---
title: General Settings
description: Unmanic Configuration - General
id: overview_and_general_settings
---


## Video Guide:

<figure class="video-container">
    <iframe width="500" height="285" src="https://www.youtube.com/embed/vDVH0QJHJzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
</figure>


![Settings - General](/img/unmanic-settings-general.jpg "settings-general")

Unmanic is designed to watch a single library of content. Under the "General" tab you will find settings pertaining to how the application manages your library.

---


## Paths

##### Library path:
Browse to the location of your library. The path selected here will be used by the library scanner and watcher as configured below.

##### Cache path:
Browse to a location where temporary data will be written while processing your library files.

## Workers

##### Number of workers to spawn:
Workers are separate threads which carry out tasks in parallel. Selecting more workers means more tasks can be carried out simultaneously. Note that this may have diminishing returns as you increase this number depending on the types of tasks to be carried out by the workers.

## Library Watcher

##### Enable watcher
The library watcher monitors your selected *Library path* for changes written to disk. This includes newly created files, file movements ending up in that path or files edited within that path.

## Library Scanner

##### Library scan schedule
Set the interval in in minutes that you wish to have Unmanic scan the selected *Library path* for files that should be added to the pending task list.

The value entered here will be the time in minutes that Unmanic will wait before starting a library scan since the last library scan completed. Eg. If you set this to 5 and it take Unmanic 30 mins to scan your library, then 5 minutes after it completes the library scan, it will begin again.

If you wish to disable the Library scanner, set this value to 0.
This will also disable the ability to perform manual scans from the Dashboard.

##### Run scan on start
Selecting this option to start scanning your *Library path* when Unmanic starts.

## Keep Filename History

##### Keep filename history
Select this option to have Unmanic write converted files to a `file_info` file in the original directory.

As Unmanic may remux and rename files, it may disrupt other systems that point to those files. A common method to circumvent this disruption is to maintain a `file_info` file in the directory where that file was. Unmanic is able to update or create such a file so that other applications supporting the features `file_info` provides may associate a new file with it's original name.

## Debugging

##### Enable debugging
Select this to enable additional debug logging to the Unmanic.log files. 

You will need to restart Unmanic for this to take effect.
