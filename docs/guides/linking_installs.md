---
title: Linking Installs
description: Linking Unmanic Installs
id: unmanic_link_installs
---

![Difficulty](https://img.shields.io/badge/Difficulty-moderate-orange?style=flat)
![Setup Time](https://img.shields.io/badge/Setup%20Time-10%20minutes-orange?style=flat)
[![Original Author](https://img.shields.io/badge/Original%20Author-fredrikbaberg-lightgrey?style=flat?style=plastic&logo=github)](https://github.com/fredrikbaberg)


Installs of Unmanic can be linked, enabling multiple machines to work on tasks.

This guide will describe how to setup a main installation with access to the files to process, while a remote installation does the work.

## Instructions

### Requirements

* At least two installs of Unmanic, with network access.

### Setup

Let us call the installs _main_ and _remote_, where _main_ has access to the files to process. Files will automatically be transfered from _main_ to _remote_ for processing, and back when this is completed.

* On _main_, setup a [library](/docs/configuration/libraries/adding_libraries.mdx) following the normal instructions. Let's call the library `Guide`.

* On _remote_, create a new library. The name of this library has to be **exactly** the same as the library in _main_, in this case `Guide`. You can either export the library from _main_ and import it on _remote_, or set it up manually. This library does not need any "scanning" plugins, only plugins for making changes, e.g. encoding.

* [Link](/docs/configuration/linking.mdx) the installs:
    * On _main_, add _remote_ as remote installation and enable _"Send tasks to this installation when workers are available"_.
    <!-- * On _remote_, add link to _main_ and enable _"Receive tasks from this installation when workers are available"_. -->

Pending tasks on _main_ should now be sent to _remote_. This may take a few minutes, depending on network speed.