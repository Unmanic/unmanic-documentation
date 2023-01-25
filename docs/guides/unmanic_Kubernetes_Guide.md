---
title: Install Unmanic - Kubernetes
description: Unmanic Kubernetes Install Guide
id: unmanic_kubernetes_install
---

![Difficulty](https://img.shields.io/badge/Difficulty-moderate-orange?style=flat)
![Setup Time](https://img.shields.io/badge/Setup%20Time-30%20minutes-orange?style=flat)
[![Original Author](https://img.shields.io/badge/Original%20Author-preimmortal-lightgrey?style=flat?style=plastic&logo=github)](https://github.com/preimmortal)

## Requirements

This requires a functional Kubernetes Cluster or similar (k3s, minikube, etc).

For Kubernetes installation instructions

- [Kubernetes Getting Started Guide](https://kubernetes.io/docs/setup/)

:::note
K3S 1.22.7 was used to create this guide.
:::

## Running Unmanic

There are two parts to running Unmanic in Kubernetes.

1. Deployment - The unmanic container configuration
2. Service - The service that exposes the unmanic container to outside the Kubernetes cluster

For a basic deployment and service, create a file `unmanic.yaml` and append the following:

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: unmanic-deployment
spec:
  selector:
    matchLabels:
      app: unmanic
  replicas: 1
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: unmanic
    spec:
      containers:
        - name: unmanic
          image: josh5/unmanic:latest
          ports:
            - containerPort: 8888
              name: unmanic-port
              protocol: TCP
          env:
            - name: PUID
              value: "<PUID>"
            - name: PGID
              value: "<PGID>"
          volumeMounts:
            - mountPath: /library
              name: library
            - mountPath: /config
              name: unmanic-config
            - mountPath: /tmp/unmanic
              name: unmanic-cache
      volumes:
        - name: library
          nfs:
            server: <NFS_SERVER_ADDRESS>
            path: </PATH/TO/NFS/SHARE>
        - name: unmanic-config
          emptyDir: {} # Please use a more permanent storage, see Tuning section
        - name: unmanic-cache
          emptyDir: {}
---
apiVersion: v1
kind: Service
metadata:
  name: unmanic-service
spec:
  selector:
    app: unmanic
  type: NodePort
  ports:
    - name: unmanic-port
      port: 8888
      targetPort: 8888
      nodePort: 30000
```

To start the deployment and service, run the following command: `kubectl create -f unmanic.yaml`

To delete the deployment and service, run the following command: `kubectl delete -f unmanic.yaml`

## Tuning Kubernetes Unmanic Configuration

Note that the following values should be tuned based on need:

- Using NFS to share the library path to Kubernetes, please update as necessary if using CIFS or another file sharing service
- Using emptyDir for the config and cache path, please update emptyDir to more permanent paths
- Using NodePort to expose the Unmanic service, please update when using a load balancer or other method to expose the unmanic deployment

:::note
It is important not to use `emptyDir` for the `unmanic-config` in a permanent installation because the config will be deleted upon stopping the deployment.
Please consider using a more permanent volume such as iSCSI or backing up to NFS.

- [Kubernetes Volumes](https://kubernetes.io/docs/concepts/storage/volumes/)

:::

## Accessing Unmanic via NodePort

Unmanic will be available via the web browser at following address: `<Kubernetes_Cluster_Address>:30000`

## Linux Hardware Acceleration (VA-API)

### Intel Integrated GPU

It is possible to expose underlying Intel integrated GPU hardware that supports QSV/VA-API hardware acceleration into a Kubernetes workload. The proper method for implementing this functionality is through two additional Kubernetes add-ons:

- [Node feature discovery](https://kubernetes-sigs.github.io/node-feature-discovery/) to automatically detect and label worker nodes with specialized hardware.
- [Intel GPU Plugin](https://github.com/intel/intel-device-plugins-for-kubernetes) to automatically expose GPU hardware to workloads, e.g. `/dev/dri/renderD128`.

:::note
This guide does not walk through the full installation and configuration for the aforementioned Kubernetes add-ons. This process is relatively straightforward using the most up-to-date guides from the associated links to upstream repositories.
:::

### Prerequistes

1. Validate hardware compatibility
2. Install Intel GPU drivers
3. Install and configure [intel-gpu-plugin](https://github.com/intel/intel-device-plugins-for-kubernetes) add-on
4. Install and configure [node-feature-discovery](https://github.com/kubernetes-sigs/node-feature-discovery) add-on
5. Kubernetes manifest considerations

### Validate Hardware Compatibility

The Kubernetes worker node exposing GPU functionality to workloads requires Intel GPU drivers to be installed at the host level. An official lookup table exists for [GPU hardware values](https://dgpu-docs.intel.com/devices/hardware-table.html) to confirm they are supported. In the following example, `[8086:9a49]` indicates the vendor `8086` (Intel) and `9a49` (GPU; Iris Xe) from the lookup table.

```
$ lspci -nn |grep  -Ei 'VGA|DISPLAY'
00:02.0 VGA compatible controller [0300]: Intel Corporation TigerLake-LP GT2 [Iris Xe Graphics] [8086:9a49] (rev 01)
```

### Install Intel GPU drivers

The official Intel documentation outlines instructions for installation of the appropriate [Intel drivers on Ubuntu 22.04 (jammy)](https://dgpu-docs.intel.com/installation-guides/ubuntu/ubuntu-jammy-legacy.html). Once the drivers have been installed, a reboot is required before validation steps below:

```
# Install hwinfo and vainfo
$ apt update && apt install -y hwinfo vainfo

# Confirm Intel GPU drivers are functional
$ hwinfo --display
25: PCI 02.0: 0300 VGA compatible controller (VGA)
  [Created at pci.386]
  Unique ID: _Znp.vvQ429ch_ZF
  SysFS ID: /devices/pci0000:00/0000:00:02.0
  SysFS BusID: 0000:00:02.0
  Hardware Class: graphics card
  Device Name: "Onboard - Video"
  Model: "Intel UHD Graphics"
  Vendor: pci 0x8086 "Intel Corporation"
  Device: pci 0x9a49 "UHD Graphics"
  SubVendor: pci 0x8086 "Intel Corporation"
  SubDevice: pci 0x3002
  Revision: 0x01
  Driver: "i915"
  Driver Modules: "i915"
  Memory Range: 0x603c000000-0x603cffffff (rw,non-prefetchable)
  Memory Range: 0x4000000000-0x400fffffff (ro,non-prefetchable)
  I/O Ports: 0x3000-0x303f (rw)
  Memory Range: 0x000c0000-0x000dffff (rw,non-prefetchable,disabled)
  IRQ: 177 (15621845 events)
  Module Alias: "pci:v00008086d00009A49sv00008086sd00003002bc03sc00i00"
  Driver Info #0:
    Driver Status: i915 is active
    Driver Activation Cmd: "modprobe i915"
  Config Status: cfg=new, avail=yes, need=no, active=unknown

Primary display adapter: #25

# Verify profiles supported by hardware
$ vainfo
libva info: VA-API version 1.16.0
libva info: Trying to open /usr/lib/x86_64-linux-gnu/dri/iHD_drv_video.so
libva info: Found init function __vaDriverInit_1_16
libva info: va_openDriver() returns 0
vainfo: VA-API version: 1.16 (libva 2.12.0)
vainfo: Driver version: Intel iHD driver for Intel(R) Gen Graphics - 22.6.4 (aca8ee0)
vainfo: Supported profile and entrypoints
... truncated list of profiles ...
```

### Install and Configure Intel GPU Plugin

The [intel-gpu-plugin](https://github.com/intel/intel-device-plugins-for-kubernetes) add-on will provide the ability to expose `i915` devices to pods within the cluster. Due to the continually changing nature of Kubernetes, it's recommended to use the official documentation for installation of this add-on. This process will effectively passthrough the `/dev/dri/*` devices to workloads that are requesting it.

By default, passthrough will consume the associated device for that workload. It is possible to share a device with multiple workloads at the same time. Runtime argument `-shared-dev-num 2` allows two workloads access to the GPU simultaneously. Additional information or runtime options can be found [here](https://intel.github.io/intel-device-plugins-for-kubernetes/cmd/gpu_plugin/README.html#modes-and-configuration-options).

:::note
It's important to note that exposing the GPU device is only one part of the equation. You also need to ensure any pods consuming the resources have adequate permissions to access the device. This can be achieved with addition of `supplementalGroups: [44, 109]` in the associated workload manifest. This is documented in the Supplemental Device Permissions section.
:::

### Install and Configure Node Feature Discovery (NFD)

The [node-feature-discovery](https://github.com/kubernetes-sigs/node-feature-discovery) add-on is used to automatically label worker nodes with specialized hardware. Due to the continually changing nature of Kubernetes, it's recommended to use the official documentation for installation. Once deployed within a Kubernetes cluster, nodes containing Intel GPU hardware will be labeled with `feature.node.kubernetes.io/custom-intel-gpu=true`. You can use this label to apply affinity rules that will only schedule workloads on nodes with appropriate hardware.

### Manifest Configuration Considerations

Additional configuration within Kubernetes is required to take advantage of the underlying hardware. The following sections will provide additional detail depending on your needs.

#### Resource Management

Providing resource management constraints will help to ensure a workload has adequate resources. Kubernetes will schedule workloads where the resources are available, allowing them to consume more than the `requests` values, but not beyond the `limit` value. In the following example, the workload is allowed access to the GPU device exposed through the Intel GPU plugin. Additionally, a maximum of 4 CPU cores and 8GB of memory can be consumed by the workload. The following YAML should be applied in the `deployment.spec.template.spec` section from the deployment manifest example.

```
      resources:
        requests:
          cpu: 100m
          memory: 256M
          gpu.intel.com/i915: 1
        limits:
          cpu: 4
          memory: 8G
          gpu.intel.com/i915: 1
```

#### Supplemental Device Permissions

Devices exposed by Intel GPU drivers in `/dev/dri/*` have special group permissions for `video` and `render` operating system groups.
```
$ ls -la /dev/dri
total 0
drwxr-xr-x  3 root root        100 Jan 21 23:15 .
drwxr-xr-x 20 root root       4840 Jan 23 09:15 ..
drwxr-xr-x  2 root root         80 Jan 21 23:15 by-path
crw-rw----  1 root video  226,   0 Jan 21 23:15 card0
crw-rw----  1 root render 226, 128 Jan 21 23:15 renderD128

$ egrep "video|render" /etc/group
video:x:44:
render:x:109:
```

In order to utilize the devices in a workload, you must ensure supplemental group permissions are applied. This can be achieved by adding a `securityContext` to the above deployment manifest. The following YAML should be applied in the `deployment.spec.template.spec` section from the deployment manifest example.

```
      securityContext:
        supplementalGroups:
          - 44
          - 109
```

#### Affinity Rules

Affinity rules allow or disallow workloads from being placed where they shouldn't. For example, if only two worker nodes have compatible Intel GPU hardware, using the NFD node label `feature.node.kubernetes.io/custom-intel-gpu` will ensure workloads requiring GPU access to be scheduled on the corresponding nodes. The following YAML should be applied in the `deployment.spec.template.spec` section from the deployment manifest example.

```
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
              - matchExpressions:
                  - key: feature.node.kubernetes.io/custom-intel-gpu
                    operator: In
                    values:
                      - "true"
```
