### Links to Other Pages:
- Résumé: [resume.MD](resume.MD)
- Index: [index.MD](index.MD)
- Jan 18,2018 Projects: [2018-1-18.MD](2018-1-18.MD)

## Servers
- Using Vultr.com cloud housting provider [My referral link](https://www.vultr.com/?ref=7305525)
- $2.50 - $5 a month, 20gb,512mb ram, 1TB storage.
- Also DigitalOcean.com - [My referral link](https://m.do.co/c/712f2fa51673)
- $5 - 25gb / 1gb RAM / 1tb storage.
- Apps they offer, that I set up manually - on Debian 9:
- NextCloud (Apache2/MySql(MariaDB)/PHP 7)
- Webmin/Usermin
- Twitter Link:
`Easily deploy an SSD cloud server on @DigitalOcean in 55 seconds. Sign up using my link and receive $10 in credit:`[My referral link](https://m.do.co/c/712f2fa51673)


## Instructions to set up a server:
- Make sure an available DNS domain name is registered
- Assign the FQDN hostname in the cloud provider before deploying
- Pick all the default settings to deploy a raw image of the latest distros:
Debian 9, Centos 7, or Ubuntu 17.10 (the commands will have to be adapted accordingly)
- login as `root`, `default` password
- change root `passwd`
- create new user: `yourname`
### Sudo & SSH
- `nano /etc/sudoers` add yourname
- logout and back in on the other yourname account
- SSH Keys added to `~/.ssh/authorized-keys`
- if this is an important user, possibly Generate our yourname SSH key `~/.ssh/id_RSA.pub`
### Node.js:
- `apt-get install build-essential curl git m4 ruby texinfo libbz2-dev libcurl4-openssl-dev libexpat-dev libncurses-dev zlib1g-dev` (this was debian 9)
- `brew install node` (homebrew is a package manager)
- (for Fuccbot remember to configure the Google Custom search API whitelist IP in control panel)
### WebServers:
- `apache2` / `nginx`
- MySql (MariaDB)
- PHP 7.0 (php-fm)
- `apt-get install apache2 mariadb-server libapache2-mod-php7.0`
- `apt-get install php7.0-gd php7.0-json php7.0-mysql php7.0-curl php7.0-mbstring`
- `apt-get install php7.0-intl php7.0-mcrypt php-imagick php7.0-xml php7.0-zip`
- symlink each apache sites `.conf` file from `/etc/apache2/sites-available/???` to `etc/apache2/sites-enabled/???`
### Server Management (control panel):
- `webmin` / `usermin` / `virtualmin`
- webmin : http://www.webmin.com/standard.html
-   Standard Modules: https://doxfer.webmin.com/Webmin/Webmin_Modules
- this is what it helps me control:


1. Apache2 webserver,
1. IMAP/Pop3/Sendmail/SMTP/Postfix Mail Servers,
1. Bind DNS server,
1. DHCP server,
1. Bootup and shutdown (init.d scripts),
1. Schedules and manages lists of Cron jobs,
1. Change passwords/user info,
1. Set permissions in wizard to permission secure dirs,
1. Console shell commands, Web File Manager,
1. Package software updating,
1. MySql Database editor,
1. NFS,iSCSI,Samba Shared filesystems,
1. LVM/LinuxRaid distributed Filesystem managers,
1. PAM (auth) + SSH/SSL secure configuration
1. OpenVPN remote VPN tunneling.
1. ProFTPD or VSFTPd FTP server supports secure FTP w/ TLS.
1. Firewall config with iptables, edit all chains in dropdowns
1. System log viewer, dashboard, status overview (top)

-(alternative would be CPanel, etc.)

### NextCloud
- Follow this official but INCOMPLETE guide @ https://docs.nextcloud.com/server/12/admin_manual/installation/source_installation.html
- wget the latest .zip `wget https://download.nextcloud.com/server/releases/nextcloud-12.0.4.zip`
- unzip it in your dir and `sudo cp -R nextcloud /var/www/` over to /var/www/nextcloud
- make a `nextcloud.conf` file for apache
- set up MariaDB For database nextcloud, username nextclouduser, assign a password, and un-deny from that user so they can login.(series of commands)
- if you ever need to reinstall nextcloud you can just delete the folder `rm -rf nextcloud` and in MySQL do: `DROP DATABASE nextcloud;` and just re `CREATE DATABASE nextcloud;` no other commands needed.
- https://community.time4vps.eu/discussion/110/nextcloud-nextcloud-12-0-installation-with-mariadb-and-php-7-1
- MariaDB is port 3306 by default, you dont need to allow it outside
- edit the /etc/php/7.0/.../php.ini files and insert the specialized commands it wants to remove all the errors.
- make sure your SSL self-certs are OK, your firewall is port allowed on the 443 HTTPS port, and your webserver and SSL 443 on port working
- This allows access to the web Configuration `chown -R www-data:www-data /var/www/nextcloud/`
- connect to https://yourdomain:443/nextcloud/ to continue the setup. Type in the passwords.
- make sure your data folder is outside the www-root, I recommend `/var/nextcloud`
- any other questions, or for Nginx instead refer to : https://www.vultr.com/docs/how-to-install-nextcloud-12-on-debian-9
- visit the scan website to confirm an A+ or A security rating: https://scan.nextcloud.com

### DigitalOcean Refcode:
This site named DigitalOcean are giving away 250GB Free storage for 2 months and after that its $5/mo - use my ref code please, its legit. http://www.digitalocean.com/?refcode=712f2fa51673


### Create WordPress from scratch:
- Automated Guide @ https://peteris.rocks/blog/unattended-installation-of-wordpress-on-ubuntu-server/
- Guide @ https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-with-lamp-on-ubuntu-16-04
- Guide @ https://help.ubuntu.com/lts/serverguide/wordpress.html
- Official Guide @ https://codex.wordpress.org/Installing_WordPress
- `wget https://wordpress.org/latest.zip`
- `unzip latest.zip`
- `mv latest.zip /var/www/wordpress.zip`
- `cd /var/www/wordpress`
- `touch .htaccess`
- `chmod 660 .htaccess`
- `chown -R www-data:www-data .htaccess`
- `cp wp-config-sample.php wp-config.php`
- (repeat chown above but for wp-config.php)
- Edit your wp-config.php file, with the new username/data for MySQL.
- Get the Salt and unique nonce data secret keys from:
- `curl -s https://api.wordpress.org/secret-key/1.1/salt/`
- `mysql -u root -p`
- `CREATE DATABASE wordpress DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;`
- `GRANT ALL ON wordpress.* TO wordpressuser@localhost IDENTIFIED BY 'asdfghjklqwertyui123';`
- Edit your apache wordpress.conf file:

### /etc/apache2/sites-available/wordpress.conf
```
Alias /blog /var/www/wordpress
<Directory /var/www/wordpress>
    Options FollowSymLinks
    AllowOverride Limit Options FileInfo
    DirectoryIndex index.php
    Order allow,deny
    Allow from all
</Directory>
<Directory /var/www/wordpress/wp-content>
    Options FollowSymLinks
    Order allow,deny
    Allow from all
</Directory>
```
- Issue the following commands to rewrite the permissions correctly according to your username:
```
a2ensite wordpress
root@genr8:/var/www/wordpress# sudo chown -R genr8_:www-data /var/www/wordpress
genr8_@genr8:/var/www/wordpress$ sudo chmod g+w wp-content
genr8_@genr8:/var/www/wordpress$ sudo chmod -R g+w wp-content/themes
genr8_@genr8:/var/www/wordpress$ sudo chmod -R g+w wp-content/plugins
```

### OPENVPN guides:
- https://community.openvpn.net/openvpn/wiki/OpenvpnSoftwareRepos
- https://www.vultr.com/docs/connect-two-servers-using-openvpn-with-shared-secret
- https://www.digitalocean.com/community/tutorials/how-to-set-up-an-openvpn-server-on-ubuntu-16-04
- https://doc.pfsense.org/index.php/OpenVPN_Remote_Access_Server
- My recipe for service obliteration (be careful with the rm statements!):
```
systemctl stop [servicename]
systemctl disable [servicename]
rm /etc/systemd/system/[servicename]
rm /etc/systemd/system/[servicename] symlinks that might be related
systemctl daemon-reload
systemctl reset-failed
```
`$ sudo systemctl disable openvpn@default.service`

### LetsEncrypt:
Apache options needed:
- `SSLCertificateFile      /etc/letsencrypt/live/genr8.pw/fullchain.pem`
- `SSLCertificateKeyFile   /etc/letsencrypt/keys/0000_key-certbot.pem`

### FccBot (Node.JS Discord Bot on Startup from cron.d script)
`$ nano launch.sh`
```
// Launch.sh
#!/bin/bash
cd ~/discordbot
screen -dmS "fccbot"
screen -S "fccbot" -p 0 -X stuff "/home/linuxbrew/.linuxbrew/bin/node discord_bot.js$(printf \\r)"
echo "Launching Fccbot... from Cron Script"
```

### FREENAS NMAP from genr8.pw
`$ sudo nmap 192.168.1.2`
```
Starting Nmap 7.40 ( https://nmap.org )
2018-01-30 09:37 UTC
Nmap scan report for 192.168.1.2
Host is up (0.013s latency).
Not shown: 992 closed ports
PORT     STATE SERVICE
21/tcp   open  ftp
22/tcp   open  ssh
80/tcp   open  http
139/tcp  open  netbios-ssn
443/tcp  open  https
445/tcp  open  microsoft-ds
6000/tcp open  X11
9000/tcp open  cslistener
Nmap done: 1 IP address (1 host up) scanned in 81.44 seconds
```
### Benchmark the CPU: 13 seconds
`$ sysbench --test=cpu --num-threads=4 --cpu-max-prime=9999 run`

### Copy with (verbose, permissions, timestamps, links, dirs, human readable, Partial Progress)
`$ rsync -vptldhP *.mrimg /mnt/Media/ `
(above Was not working, below was)
`$ rsync -rtlzuv --progress /mnt/Software/*.mrimg /mnt/Media/mrimg/ `