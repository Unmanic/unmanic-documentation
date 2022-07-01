---
title: Unmanic Kubernetes Install guide
description: Unmanic Kubernetes Install guide
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
