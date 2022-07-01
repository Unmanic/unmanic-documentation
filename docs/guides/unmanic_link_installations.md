---
title: Linking Unmanic Installations
description: Linking Unmanic Installations
id: unmanic_link_installations
---
![Difficulty](https://img.shields.io/badge/Difficulty-moderate-orange?style=flat)
![Setup Time](https://img.shields.io/badge/Setup%20Time-10%20minutes-orange?style=flat)
[![Original Author](https://img.shields.io/badge/Original%20Author-fredrikbaberg-lightgrey?style=flat?style=plastic&logo=github)](https://github.com/fredrikbaberg)

Multiple installations of Unmanic can be linked, this allows the distribution of tasks to be processed.

This guide will describe the use of a main installation with access to the library, with a remote installation that does the work.

## Instructions

### Requirements

* At least two installs of Unmanic:
    * One install will be called `main`, this has access to a folder with files to process.
    * The other install will be called `remote`, this has to be reachable from `main` but does not require access to the files. Files will automatically be transfered from `main` to `remote` and back.

### Setup

* On `main`, setup a [Library](/docs/configuration/libraries/adding_libraries) following the normal instructions. Let us call the library `Guide`.

* On `remote`, create a new library. The name of this library has to be **exactly** the same as the library in `main`, in this case `Guide`. You can either export the library from `main` and import it on `remote`, see tip below, or set it up manually. This library only needs plugins for making changes, i.e. encoding. "Scanning" plugins, such as filter by size, are not needed.

:::note
Library name must be identical on both installations.
:::
:::note
It is recommended to create a new library for this, instead of using the default library.
:::

* [Link](/docs/configuration/link_settings) the installs:
    * On `main`, add `remote` as remote installation and enable _"Send tasks to this installation when workers are available"_. _"Preload some tasks on the remote installation Pending Tasks queue"_ is optional.
    <img className={"screenshot"} src={require('/img/guides/unmanic_link_installations_images/link_from_main.png').default} />


Pending tasks on `main` should now be sent to `remote`. This may take a few minutes, depending on network speed.


:::tip
You can export the library configuration from `main` using the export button, copy the code shown in the panel that opens.
<img className={"screenshot"} src={require('/img/guides/unmanic_link_installations_images/export_config.png').default} />

You can then use import on `remote`, paste the code you got from `main`.
<img className={"screenshot"} src={require('/img/guides/unmanic_link_installations_images/import_config.png').default} />
:::