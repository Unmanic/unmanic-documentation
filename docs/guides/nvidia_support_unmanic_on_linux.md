---
title: NVIDIA Hardware Acceleration on Linux
description: NVIDIA Hardware Acceleration on Linux
id: nvidia_support_unmanic_on_linux
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![Difficulty](https://img.shields.io/badge/Difficulty-easy-green?style=flat)
![Setup Time](https://img.shields.io/badge/Setup%20Time-5%20minutes-green?style=flat)


A number of plugins for Unmanic support hardware acceleration that utilise an NVIDIA GPU. This includes hardware acceleration (HWA) of video decoding/encoding in tools like FFmpeg or HandBrake CLI using the NVIDIA NVDEC/NVENC decoder/encoder.

Follow these instructions to configure the Unmanic Docker container for running FileBot as a Post-processor function.

## Instructions:

### 1) Check GPU Support

You can find an official list of NVIDIA Graphics Cards and their supported codecs [Here](https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new).

Check that your GPU is listed and is capable of doing what you want it to.


### 2) Install GPU Driver

Ensure you have installed the NVIDIA drivers.

This is required even if you intend to run Unmanic within a Docker container.

You can download the latest NVIDIA GPU driver from [here](https://www.nvidia.com/Download/driverResults.aspx/187162/en-us).

:::note
The minimum required NVIDIA driver version is 418.30 for this to work in Linux.
:::

:::tip
It is recommended to also patch drivers the drivers by following the instructions [here](https://github.com/keylase/nvidia-patch). This project will remove the restriction on maximum number of simultaneous NVENC video encoding sessions imposed by Nvidia to consumer-grade GPUs.
:::


### 3) FFmpeg installation with NVENC support

:::note
Only worry about this if you are running Unmanic natively on Linux.
The Docker image has FFmpeg pre-installed with support for NVENC/NVDEC
:::

Install FFmpeg for your operating system.

It is recommend to use the [Jellyfin FFmpeg builds](https://jellyfin.org/docs/general/administration/installing.html#ffmpeg-installation), however any recent release of FFmpeg will work fine.

To ensure your FFmpeg installation is capable of running the NVENC encoders, run this command:
```
for i in encoders decoders filters; do echo $i:; ffmpeg -hide_banner -${i} | egrep -i "npp|cuvid|nvenc|cuda|nvdec"; done
```

You should see a list of available encoders and decoders.


### 4) Running in Docker with NVENC support

#### Installing the NVIDIA Container Toolkit

If you intend to use Unmanic inside a Docker container, you will also need to pass through the required devices to the container. 
With NVIDIA this is done by installing the [nvidia-docker2](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#docker) package
on your host.

Once you have followed these steps, you can test that the Unmanic Docker container can use the NVENC hardware by running:
```
docker run --rm --gpus all --entrypoint="" josh5/unmanic nvidia-smi
```

You should see the following output:
```
Sun Apr 17 05:31:44 2022       
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 510.54       Driver Version: 510.54       CUDA Version: 11.6     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  NVIDIA GeForce ...  Off  | 00000000:01:00.0  On |                  N/A |
|  0%   34C    P8    N/A / 120W |    185MiB /  4096MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```

#### Creating the Docker container


<Tabs
defaultValue="docker_run"
values={[
{label: 'Docker run', value: 'docker_run'},
{label: 'Docker-compose', value: 'docker_compose'},
]}>
<TabItem value="docker_run">

  ```bash
    PUID=$(id -u)
    PGID=$(id -g)

    # CONFIG_DIR - Where you settings are saved
    CONFIG_DIR=/config

    # LIBRARY_DIR - The location/locations of your library
    LIBRARY_DIR=/library

    # CACHE_DIR - A tmpfs or and folder for temporary conversion files
    CACHE_DIR=/tmp/unmanic
    
    # NVIDIA_VISIBLE_DEVICES - The GPUs that will be accessible to the container
    NVIDIA_VISIBLE_DEVICES=all

    docker run -ti --rm \
        -e PUID=${PUID} \
        -e PGID=${PGID} \
        -e NVIDIA_VISIBLE_DEVICES=${NVIDIA_VISIBLE_DEVICES} \
        --runtime=nvidia \
        -p 8888:8888 \
        -v ${CONFIG_DIR}:/config \
        -v ${LIBRARY_DIR}:/library \
        -v ${CACHE_DIR}:/tmp/unmanic \
        josh5/unmanic:latest
  ```

  </TabItem>
  <TabItem value="docker_compose">

  ```yaml
    # Variables that will need to be changed:
    #     <PUID>                            -  User id for folder/file permissions
    #     <PGID>                            -  Group id for folder/file permissions
    #     <NVIDIA_VISIBLE_DEVICES>          -  The GPUs that will be accessible to the container
    #                                          Options: https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/user-guide.html#gpu-enumeration
    #     <PATH_TO_CONFIG>                  -  Path where Unmanic will store config files
    #     <PATH_TO_LIBRARY>                 -  Path where you store the files that Unmanic will scan
    #     <PATH_TO_ENCODE_CACHE>            -  Cache path for in-progress encoding tasks
    #

    ---
    version: '2.4'
    services:
      unmanic:
        container_name: unmanic
        image: josh5/unmanic:latest
        ports:
          - 8888:8888
        environment:
          - PUID=<PUID>
          - PGID=<PGID>
          - NVIDIA_VISIBLE_DEVICES=<NVIDIA_VISIBLE_DEVICES>
        volumes:
          - <PATH_TO_CONFIG>:/config
          - <PATH_TO_LIBRARY>:/library
          - <PATH_TO_ENCODE_CACHE>:/tmp/unmanic
        runtime: nvidia       # For H/W transcoding using the NVENC encoder
  ```

  </TabItem>
</Tabs>

