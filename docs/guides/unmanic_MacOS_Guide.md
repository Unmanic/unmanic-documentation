---
title: Unmanic MacOS Install guide
description: Unmanic MacOS Install guide
id: unmanic_macos_install
---

![Difficulty](https://img.shields.io/badge/Difficulty-moderate-orange?style=flat)
![Setup Time](https://img.shields.io/badge/Setup%20Time-30%20minutes-orange?style=flat)
[![Original Author](https://img.shields.io/badge/Original%20Author-austinsr1-lightgrey?style=flat?style=plastic&logo=github)](https://github.com/austinsr1)

## Requirements

This requires a recent MacOS, Python 3.7-3.8,ffmpeg and PIP.
:::note
MacOS Monterey 12.3 was used when creating this guide. Slight changes may need to be made for older systems.
:::

### 1) Checking requirements

First, we will need to open a Terminal window. Either click on the spotlight search in the upper right of the screen and type Terminal or run it from Applications/Utilites/ folder.

Once the terminal is open, type
```
python3 --version
```
If this is the first time running python, it may prompt you to download the command line developer tools. Click install to continue.
<img className={"screenshot"} src={require('/img/guides/unmanic_macos_install_images/python3.png').default} />
If you already have python installed, the version needs to be between 3.7 and 3.8 to work best with Unmanic.


### 2) Installing pip

pip is not included in MacOS, so we must manually install it.
Open the terminal application and enter
```
cd ~/Desktop/;curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
```
You may see a prompt asking if Terminal can access your desktop directory. Click Yes if prompted.

This will change directories to your Desktop folder and download the get-pip.py script

Next, run the script from the Terminal
```
python3 get-pip.py
```

After it downloads and installs, you can verify pip installed by typing 
```
pip3 --version
```
in the Terminal.


### 3) Installing ffmpeg

We will need to download ffmpeg and ffprobe from https://evermeet.cx/ffmpeg/ .
Go to your download folder and extract both ffmpeg and ffprobe.
Click and drag to highlight both ffmpeg and ffprobe then right click on them and click Copy from the menu.
Next, go to the Go menu and select Go to folder.
Enter
```
/usr/local/bin
```
<img className={"screenshot"} src={require('/img/guides/unmanic_macos_install_images/go_to_folder.png').default} />
When the directory opens, right click and select Paste 2 items.
You will be prompted for your password. Enter and press enter.
Next, we will need to set these files to be executable.
From the terminal, enter the following.
```
sudo chmod 755 /usr/local/bin/ffmpeg
sudo chmod 755 /usr/local/bin/ffprobe
```
Next, we have to deal with the macOS security settings for unsigned packages.
From the terminal, type
```
ffmpeg
```
You will see a dialog similar to <img className={"screenshot"} src={require('/img/guides/unmanic_macos_install_images/cannot_be_opened.png').default} />
Click Cancel in the dialog box.

Open the Apple Menu->System Preferences menu
Open Security & Privacy
Click the Allow Anyway button.
<img className={"screenshot"} src={require('/img/guides/unmanic_macos_install_images/cannot_be_opened.png').default} />
From the terminal, type
```
ffmpeg
```
When the dialog opens, click the open button.

Next, we will repeat the same process for ffprobe.
From the terminal, type
```
ffprobe
```
Click Canel in the dialog box.

Open the Apple Menu->System Preferences menu
Open Security & Privacy
Click the Allow Anyway button.

From the terminal, type
```
ffprobe
```
When the dialog opens, click the open button.

### 4) Installing Unmanic

From the Terminal enter
```
pip3 install unmanic
```
This will install Unmanic and dependencies. 


### 5) Creating a shellscript to start Unmanic

For the next step, we will need root access.
At the terminal, enter the following command
```
sudo su -
```
This will then prompt you for your account password. Enter your password and press enter.

Next, in the terminal, enter the following command
```
echo "python3 -m unmanic" >/usr/local/bin/start_unmanic.sh
```
Lastly, we will make the shell script executable by entering the following command in the terminal
```
chmod 755 /usr/local/bin/start_unmanic.sh
```
In the Terminal type exit to leave root access.
```
exit
```


### 6) Start Unmanic

From the Terminal, type
```
/usr/local/bin/start_unmanic.sh
```
This will start Unmanic. This terminal must be left open or Unmanic will stop.


### 7) Mount your media

Mount the remote drive that contains your media from the Go menu ->Connect to Server.
<img className={"screenshot"} src={require('/img/guides/unmanic_macos_install_images/connect_to_server.png').default} />
Enter the ip address and share name and click Connect.

When you are configuring Unmanic to access your library, it will now be locate under the /Volumes directory .


### 8) Configure Library path

Open a web brower of your choice and go to the following url
```
localhost:8888
```
Click the 3 horizontal lines in the upper left to expand the menu. Next go to Settings
<img className={"screenshot"} src={require('/img/guides/unmanic_macos_install_images/settings.png').default} />

In the setting menu, you will see your default library. Click the 3 horizontal bars to the right of the library to open the configuration.

Next, cliock on the box that says Library Path.

By default, Unmanic looks for a library at /library, but that is in use already in macOS.

Click the .. at the top of the window to go up a level.
<img className={"screenshot"} src={require('/img/guides/unmanic_macos_install_images/up_one_level.png').default} />

Navigate to the /Volumes director and you should see the network drive that was mounted in the previous step.
<img className={"screenshot"} src={require('/img/guides/unmanic_macos_install_images/select_library.png').default} />
From there, navigate to your media.


### 9) Optional Autostart

If you would like Unmanic to start automatically, we can compile an applescript applet to do this.

Open Applications->Utilities->Script Editor
<img className={"screenshot"} src={require('/img/guides/unmanic_macos_install_images/script_editor.png').default} />

Paste the following into the script editor

```
try
	do shell script "/usr/local/bin/start_unmanic.sh"
on error errMsg
	display dialog "ERROR: " & errMsg
end try

```
Next, go to File->Export
<img className={"screenshot"} src={require('/img/guides/unmanic_macos_install_images/export_script.png').default} />
```

Export As: Start_Unmanic
Where:Applications
File Format: Application
```
Click the Save button

Close Script Editor.
Click the Apple Menu->System Preferences
Click Users & Groups
Click your username on the left and then click the Login Items tab.
Click the + and navigate to the Applications directory and click the Start_Unmanic application.
<img className={"screenshot"} src={require('/img/guides/unmanic_macos_install_images/login_items.png').default} />












