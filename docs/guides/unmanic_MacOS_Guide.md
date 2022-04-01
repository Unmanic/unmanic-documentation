---
title: Unmanic MacOS Install guide
description: Unmanic MacOS Install guide
id: unmanic_macos_install
---

## Requirements

This requires a recent MacOS, Python 3.7-3.8 and PIP.
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

### 3) Installing Unmanic

From the Terminal enter
```
pip3 install unmanic
```
This will install Unmanic and dependencies. 

### 4) Creating a shellscript to start Unmanic

In the terminal, enter the following command
```
echo "cd ~/Library/Python/3.8/lib/python/site-packages/unmanic;python3 service.py" >/usr/local/bin/start_unmanic.sh
```
Next, we will make the shell script executable by entering the following command in the terminal
```
chmod 755 /usr/local/bin/start_unmanic.sh
```



