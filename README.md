# zstarter

## Modern b2b project

Tech Stack: react, express, typescript, nx, prisma, zitadel, tailwind, daisyui, resend and postgresql.

This is a multi tenancy project, each organization with its independant space. Uses zitadel as the IDP: identity provider.

Each organization is created in zitadel and in the app's database.

Working apps:

- Create articles, no login required.
- Log in with zitadel and get to a dashboard.
- Log out

...actually fixing sending email with resend when you publish an article.

## Required software

1.- Node 18 or superior is required, we recommend install with nvm:

https://github.com/nvm-sh/nvm

2.- Install nx globally

```
npm i -g nx
```

3.- hosts file

In a multi tenancy environment host names are important, moreover when you are not logged in.

In order for the two organizations in this sample, dinobank and dogsinc to work, you must add two hosts to this machine. Add next line to your `/etc/hosts` file:

`127.0.0.1 dinobank.localhost dogsinc.localhost`

4.- Environment variables file

Rename .env.sample to .env

## Start installation

1.- Clone and install this project

```
git clone https://github.com/hanspoo/zstarter
cd zstarter
npm install
```

2.- Start 3 required containers:

- zitadel database and server
- zstarter database

Open a terminal and do:

```
cd docker-dev
docker compose up
```

5.- Start back end express

```
nx serve web-server
```

6.- Start the front end

```
nx serve front
```

---

That's it

You can go to:
http://dinobank.localhost:4200/
or
http://dogsinc.localhost:4200/

or to the admin organization
http://localhost:4200/

Besides the name each one has a different daisyui theme.

## Users

```
organization:dogsinc
url: http://dogsinc.localhost:4200
user: pitbull@dogsinc.com
pass: Password2!
```

```
organization:admin org
url: http://localhost:4200
user: zitadel-admin@zitadel.localhost
password: Password2!
```

## Zitadel admin

Zitadel admin panel at:

http://localhost:8080

And create users in the other organizations, and you will see that they as expected can only log in where they are registered.
