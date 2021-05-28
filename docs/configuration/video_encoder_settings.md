---
title: Video Encoding Settings
description: Unmanic Configuration - Video Encoding
id: video_encoder_settings
---


## Video Guide:

<figure class="video-container">
    <iframe width="500" height="285" src="https://www.youtube.com/embed/Xsx9kqMoQHE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
</figure>


![Settings - Video Encoding](/img/unmanic-settings-video-encoding.png "settings-video-encoding")

The ** Video Encoding** section of your Unmanic settings you will find the ability to specify the desired output codecs for your video files.

A video file contains one to many video *streams*. These streams are encoded with various codecs and various codecs have different properties to target a range of applications. Some codecs are better designed for compatibility to work with more playback devices, while others are designed to compress video such that it is better optimised for streaming over a network.

---


##### Enable Video Encoding
Check this option to enable video stream encoding.

Leaving this unchecked will cause Unmanic to simply copy all video streams from the source file to the destination without modifying their encoding in any way.

You may wish to uncheck this option if you are looking only to remux your files or only transcode audio streams. Or you may wish to rely on a [Plugin](/docs/plugins/overview) for transcoding videos as that could provide you with more advanced options that are not available in the main Unmanic settings.

## Transcode The Video Stream

##### Video codec
From the dropdown, select your desired output video codec for all video streams.

##### Video encoder
Depending on the selected *Video codec* above, you will be given a selection of video encoders to chose from. It is recommenced that you research these encoders to determine which is best suited to your needs.
