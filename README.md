# infra-map

## Configuration setup

set the following env variables during runtime or update `.env` file.

### Kubernetes

Required parameters:

```bash
KUBERNETES_SERVICE_HOST=https://IP_ADDRESS:16443
KUBERNETES_CA_CART_PATH=kube-ca.crt
KUBERNETES_SA_TOKEN=LKdgk34l...
```

The `KUBERNETES_SERVICE_HOST` is the api server, [microk8s documentation](https://microk8s.io/docs/services-and-ports#services-binding-to-the-default-host-interface) describes that API server is running at port `16443`. Runtime in a pod this will be set by kubernetes.

Get ca_cert from the any running pod at: `/var/run/secrets/kubernetes.io/serviceaccount/ca.crt`.

### Proxmox

Required parameters:

```bash
PROXMOX_URL=https://apollo.schleppe:8086/api2/json/
PROXMOX_TOKEN=PVEAPITOKEN=USER@pve!USER=TOKEN_VALUE
```

`PROXMOX_TOKEN` should contain the sub-variable `PVEAPITOKEN` that describes a proxmox API token.

Create api token:

- Create Users
  - user name: infra-map
  - realm: pve
  - expire: never
- Add API tokens
  - user: infra-map@pve
  - token ID: infra-map
- Permissions
  - add: API Token permissions
  - path: /
  - api-token: infra-map@pve!infra-map
  - role: Administrator
  - propagate: true

## Home Assistant

Required parameters:

```bash
HOMEASSISTANT_URL=http://homeassistant.schleppe:8123/api/states
HOMEASSISTANT_TOKEN=
```

Follow hass documentation on generating a api token: https://developers.home-assistant.io/docs/auth_api/#long-lived-access-token.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
yarn dev
```

## Building

To create a production version to be run from node:

```bash
yarn build
```

To preview either use vite to serve or execute node entrypoint:

```bash
yarn preview
```

or

```bash
node build/index.js
```

## Run using docker

The application is configure to be used either standalone or behind a webserver. To build the svelte-application docker image run:

> NB! Remember to configure .env, which is automatically picked up by docker-compose. Set and override for both containers in this file.

Svelte-kit application:

```bash
docker build -t infra-map .
```

Varnish cache:

```bash
cd varnish
docker build -t infra-varnish-cache .
```

Or both using docker compose:

```bash
docker compose up
```
