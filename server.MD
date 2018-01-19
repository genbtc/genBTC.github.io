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
- wget the latest .zip from the site above nextcloud-12.0.4.zip to download
- unzip it in your dir and `sudo cp -R nextcloud /var/www/` over to /var/www/
- make a `nextcloud.conf` file for apache
- perms on the data/ folder need to be set for www-data write access 755.
- `chown -R www-data:www-data /var/www/nextcloud/`
- set up MariaDB For database nextcloud, username nextclouduser, assign a password, and un-deny from that user so they can login.(series of commands)
- https://community.time4vps.eu/discussion/110/nextcloud-nextcloud-12-0-installation-with-mariadb-and-php-7-1
- MariaDB is port 3306 by default, you dont need to allow it outside
- edit the /etc/php/7.0/.../php.ini files and insert the specialized commands it wants to remove all the errors.
- make sure your SSL self-certs are OK, your firewall is port allowed on the 443 HTTPS port, and your webserver and SSL 443 on port working
- connect to https://yourdomain:443/nextcloud/ to continue the setup. Type in the passwords.
- any other questions, or for Nginx instead refer to : https://www.vultr.com/docs/how-to-install-nextcloud-12-on-debian-9
