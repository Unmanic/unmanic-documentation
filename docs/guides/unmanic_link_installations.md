---
title: Linking Unmanic Installations
description: Linking Unmanic Installations
id: unmanic_link_installations
---

![Difficulty](https://img.shields.io/badge/Difficulty-moderate-orange?style=flat)
![Setup Time](https://img.shields.io/badge/Setup%20Time-10%20minutes-orange?style=flat)
[![Original Author](https://img.shields.io/badge/Original%20Author-fredrikbaberg-lightgrey?style=flat?style=plastic&logo=github)](https://github.com/fredrikbaberg)

Multiple installations of Unmanic can be linked. This allows tasks to be processed in a distributed fashion.

## Instructions

### Requirements

- At least two installs of Unmanic:
- One install has access to the filesystem containing the media to be processed. For the purpose of this guide, we'll refer to this install as `main`.
- The other install will be called `remote`. This has to be reachable from `main` but does not require direct access to the files as they can be transferred to and from `main` as needed.

### Link Setup

On `main`, setup a [library](/docs/configuration/libraries/adding_libraries). For the purpose of this exercise, this library will be named `Guide`.

Linking relies on libraries sharing a common name. Therefore, create a new library on `remote` with the same name; in this case `Guide`. Either export the library from `main` then import it on `remote` (see tip below) or set it up manually. The library on `remote` only needs plugins related to making changes, i.e. encoding. "Scanning" plugins, such as filter by size, are not needed.

:::note
It is recommended to create a new library for this, instead of using the default library.
:::

:::tip
If both installations can access the same files (for example via a shared network mount), set the `remote` library path to the same content. When a matching file exists at the remote path, Unmanic will use that path directly instead of uploading the file through the API.
:::

On `main`, use the plus sign to add a remote installation:

- Enter the service address of `remote` using either the IP or hostname. For example, `192.168.1.3:8888`.
- Accept `None` for authentication.
- Click `Add`.
- Click the `Configure` icon and enable `Send tasks to this installation when workers are available`.

Once setup, the once grey logo should now turn blue. This indicates the remote installation is connected. The final result should look like this (as of version 0.2.4):

<img className={"screenshot"} src={require('/img/guides/unmanic_link_installations_images/remote_connected.png').default} />

Pending tasks on `main` should now be sent to `remote`. This may take a few minutes, depending on network speed.

:::tip
You can export the library configuration from `main` using the export button, copy the code shown in the panel that opens.
<img className={"screenshot"} src={require('/img/guides/unmanic_link_installations_images/export_config.png').default} />

You can then use import on `remote` to paste the code.
<img className={"screenshot"} src={require('/img/guides/general/import_config.png').default} />
:::

### Route Tasks with Tags

At this point, this documentation makes the following assumptions about the existing setup thus far:

- 2 installations of Unmanic exist on the network; `main` and `remote`.
- Both installations are connected via `Link`.
- Each installation has 1 library setup.
  - The library on `main` has either `File Monitor`, and/or `Library scanner` enabled (based upon the needs of the reader).
- The library on `remote` has both `File Monitor` and `Library scanner` disabled.

For the purposes of this exercise, our objective now is to ensure all work is sent exclusively to `remote`. In order to create this pipeline, proceed as follows:

- Add a tag to the library on `main`. We'll use the string "work" with no quotes. Remember to hit the Enter key after typing the string or the tag won't persist.
- Add the same tag to the library on `remote`.
- Add the same tag to the worker on `remote`.
- Ensure this tag is not present on `main's` worker.

With this setup in place, the work flow operates as follows:

- The library on `main` will be used to initiate all pending task (based on scans or file monitoring).
- Local workers only process tasks when their tags match the library tags.
- Tasks are sent to a linked installation that has a library with a matching name and is configured to receive tasks.
- Once the file associated with the task is transferred to a valid worker, it will be processed according to the matching library.
- Once processing is complete, the file will be transferred back to `main`.

In all cases where greater insight is needed (troubleshooting, etc), each Unmanic installation can have `EnableDebugging` toggled in the `Logs` section of the `Help & Support` page.
