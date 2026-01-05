---
title: Basic Authentication with Nginx
description: Basic Authentication with Nginx
id: basic_auth_nginx
---

![Difficulty](https://img.shields.io/badge/Difficulty-moderate-orange?style=flat)
![Setup Time](https://img.shields.io/badge/Setup%20Time-15%20minutes-orange?style=flat)
[![Original Author](https://img.shields.io/badge/Original%20Author-exu--g-lightgrey?style=flat?style=plastic&logo=github)](https://github.com/exu-g)

Unmanic can use basic authentication when connecting to another instance. Authentication itself however isn't built into Unmanic. Instead a reverse proxy like Nginx must be used to handle the authentication.

## Requirements

A running Unmanic instance is required. We will put this instance behind basic authentication.  
Install Nginx on your system. On Debian, the package name is `nginx`.  
To create the file containing our users for basic auth, we need the program "htpasswd". On Debian it is contained in the package `apache2-utils`

```sh
sudo apt install nginx apache2-utils
```

## Password File

We will be creating a password file under the path `/etc/apache2/.htpasswd`  
To create the file and a first user run this command.  
You will be prompted to enter a password.

:::caution
If a file already exists in that path it will be overwritten!  
:::

```sh
sudo htpasswd -c /etc/apache2/.htpasswd [USER]
```

If you want to add more users to the same file, use the command without the `-c` option.

```sh
sudo htpasswd /etc/apache2/.htpasswd [USER]
```

The permissions on the .htpasswd file should look something like this:

```
-rw-r--r-- 1 root root 43 Jun  1 17:46 /etc/apache2/.htpasswd
```

## Nginx Config

Now we'll be going over the nginx config.  
On Debian, site configurations go into `/etc/nginx/sites-available/`  
Create a new file under that directory

Open the file in your preferred editor and insert the following content:

```nginx
server {
    server_name [YOUR DOMAIN NAME];

    # Security / XSS Mitigation Headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";


    client_max_body_size [MAX FILE SIZE];

    location / {
        # Proxy main traffic
        proxy_pass http://[UNMANIC IP];
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Protocol $scheme;
        proxy_set_header X-Forwarded-Host $http_host;

        # Proxy WebSocket connection
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";

        # Basic Authentication
        auth_basic           "Unmanic";
        auth_basic_user_file [HTPASSWORD FILE];
    }

    listen *:80;

    #listen *:443 ssl http2;
    #ssl_certificate_key /etc/certificate/key.pem;
    #ssl_certificate /etc/certificate/cert.pem;
}
```

You'll have to change some of the settings from the file above to fit your setup.

1. server_name: If available, set this to your domain name. You can remove this line if you don't use a domain.
2. client_max_body_size: Only necessary for linked installations. Set this value higher than the largest video file you want to transcode. **If this value is too small, files won't be transferred and fail to transcode**
   You can enter a value like `50G` for 50 GBs or completely disable this check with `client_max_body_size 0;`
3. proxy_pass: If you run Nginx and Unmanic on the same server with default settings this will be `http://127.0.0.1:8888`. Else, change the ip address and port number to match with your setup
4. auth_basic_user_file: Insert the path of your "htpasswd" File. If you followed this guide, it should be `/etc/apache2/.htpasswd`

Optionally, you can also set up SSL certificates and uncomment the `listen *:443 ssl http2;` and the two below. Modify them to point to your certificate file and key and make sure to remove the `listen *:80;` above.

### Activate Config

To activate the configuration file, symlink it to `/etc/nginx/sites-enabled/`

```sh
sudo ln -s /etc/nginx/sites-available/[UNMANIC CONFIG] /etc/nginx/sites-enabled/
```

Remove the default Nginx configuration file

```sh
sudo rm /etc/nginx/sites-enabled/default
```

Reload Nginx to install the new configuration file

```sh
sudo systemctl reload nginx
```

If everything went well, you should be seeing a login prompt now if you try to access your server through the web browser.
