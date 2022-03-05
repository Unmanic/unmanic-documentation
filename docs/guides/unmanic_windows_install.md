-   -   Unmanic Windows 10 Install guide\*\*

1.  Installing WSL 2(Windows subsystem for Linux 2)

Verify you are running Windows 10, Version 1903, Build 18362 or higher.
You may check this by pressing windows key R.

In the run dialog, type: “winver” without the quotes and press enter.
!\[\](https://github.com/austinsr1/unmanic-documentation/blob/master/static/unmanic\_windows\_install\_images/winver\_run.PNG)
!\[\](https://github.com/austinsr1/unmanic-documentation/blob/master/static/unmanic\_windows\_install\_images/winver.PNG)

If you are not running Version 1903, Build 18362 or higher, you can
download the Windows Update Assistant from Microsoft.
<https://www.microsoft.com/en-us/software-download/windows10> . This
will update your system to the newest Windows 10 version.

As an administrator account, open a cmd window by pressing windows key R
!\[\](https://github.com/austinsr1/unmanic-documentation/blob/master/static/unmanic\_windows\_install\_images/cmd.PNG)

In the run dialog, enter the command, cmd and click ok. Enter the
following command in the cmd window: "wsl --install -d Ubuntu" without
the quotes. Once the command has finished, reboot your computer. After
rebooting, the Ubuntu install will continue. This will take a few
minutes. Do not close the Ubuntu dialog box while it is installing.
!\[\](https://github.com/austinsr1/unmanic-documentation/blob/master/static/unmanic\_windows\_install\_images/post%20reboot%20ubuntu%20install.PNG)

You will eventually see a prompt to Enter new UNIX username: prompt.
!\[\](https://github.com/austinsr1/unmanic-documentation/blob/master/static/unmanic\_windows\_install\_images/username.PNG)

Select a username and press enter. It will now prompt for a New
password: . Enter a password and press enter. It will then ask you to
Retype new password. Verify your password and press enter. You will now
be at a bash prompt. If at any point, you close the Ubuntu bash window,
you can re-open it by pressing windows key R and typing: bash then press
ok.
!\[\](https://github.com/austinsr1/unmanic-documentation/blob/master/static/unmanic\_windows\_install\_images/run%20bash.PNG)

1.  Mount your media library in WSL 2 Ubuntu

First, we will make a mount point for our library.

To make the changes we need to directories and files, we will use the
sudo command. This will prompt for the password that you set earlier.

As an example, we will use the Windows drive letter Y for the location
of our library.

In your Ubuntu bash window, type: "sudo mkdir /library" without the
quotes. This will create a local mount point where Unmanic will be able
to see your media.

Next, we will want to make sure this drive will be mounted after
reboots. For this command, we will need to run as root.

From the Ubuntu bash window, type: sudo su - and press enter. Enter your
password when prompted.

Next, we will add the drive entry to the fstab file.

With the following command, we will want to leave the quotes in place.
Replace Y with the drive letter of your mounted library.

From your Ubuntu bash window, type: echo "Y: /library drvfs defaults 0
0" &gt;&gt;/etc/fstab

Next, we will need to mount the drive. From the Ubuntu bash window,
type: "mount -a" without the quotes.

To verify the drive is now mounted, type: "df -h" without quotes.

The drive will be shown somewhere in the listed entries.

!\[\](https://github.com/austinsr1/unmanic-documentation/blob/master/static/unmanic\_windows\_install\_images/df.PNG)

1.  Docker for Windows

Next we will install Docker for Windows.

Docker for Windows can be found at
<https://docs.docker.com/desktop/windows/install/>

Once the Docker Desktop Installer has been downloaded, run the
installer.

When the installer opens, make sure the "Install required Windows
components for WSL 2" is checked. Click Ok to start the installation.

When the installation is complete, it will prompt you to log out of
windows. Press the Close and log out button in the Docker installer.

After logging back in, Docker will have you accept its terms of use.
Click the I accept the terms box and hit Accept.

!\[\](https://github.com/austinsr1/unmanic-documentation/blob/master/static/unmanic\_windows\_install\_images/docker%20starting.PNG)

Once the Docker starting message closes, click the Skip tutorial link.

Next we will enable WSL2 support in docker. Click the gear icon on the
top right of the Docker window to bring up settings.

!\[\](https://github.com/austinsr1/unmanic-documentation/blob/master/static/unmanic\_windows\_install\_images/docker%20wsl%20setup.PNG)

Click Resources from the left menu and then WSL INTEGRATION

Click the Enable integration with my default WSL distro.

Under the Enable integration with additional distros: , enable Ubuntu.

Click Apply & Restart.

Next we will install the Unmanic docker container.

Open the Ubuntu bash window and type: "sudo docker pull josh5/unmanic"
without the quotes.

Finally, we will go to the Unmanic documentation page to get the shell
script that will pass all the required flags to Unmanic.
<https://docs.unmanic.app/docs/installation/docker>

In the Ubuntu bash window, type: "sudo nano -w
/usr/local/bin/start-unmanic.sh" without the quotes. This will open the
text editor nano.

!\[\](https://github.com/austinsr1/unmanic-documentation/blob/master/static/unmanic\_windows\_install\_images/new%20nano.PNG)

Once the nano window is open, copy the block of shellscript from the
unmanic documentation link above. Switch back to your Ubuntu bash window
with nano open and right click anywhere on the screen. This will paste
in the shellscript copied from the documentation.

Next, we will save and exit from nano. Press Ctrl x . You will see a
message "Save modified buffer?" at the bottom left of the window. Type Y
and press enter to save and exit.

!\[\](https://github.com/austinsr1/unmanic-documentation/blob/master/static/unmanic\_windows\_install\_images/save%20nano.PNG)

Next, we will set the shell script to be executable. In the Ubuntu bash
window, type: "sudo chmod 755 /usr/local/bin/start-unmanic.sh" without
the quotes.

Finally, in the Ubuntu bash window, type: "sudo start-unmanic.sh"
without quotes.

If you are running the Windows firewall, you may see a security dialog.
Click the Allow access button.

!\[\](https://github.com/austinsr1/unmanic-documentation/blob/master/static/unmanic\_windows\_install\_images/windows%20security%20alert.PNG)

Unmanic is now running in Docker. To access Unmanic, open a web browser
window to <http://localhost:8888>

1.  Troubleshooting common issues

Problems can arise if the network connection to the computer is
interrupted. If Unmanic can no longer see your library, first check that
the network drive is still connected to the file server.

If the network drive is connected, and Unmanic still cannot see the
library, quit Docker by right clicking the Docker icon in the system
tray and click Quit Docker Desktop. Docker must be quit completely, the
Restart option will not resolve the issue.

!\[\](https://github.com/austinsr1/unmanic-documentation/blob/master/static/unmanic\_windows\_install\_images/quit%20docker.png)

Restart Docker Desktop and restart Unmanic from the Ubuntu bash window.
