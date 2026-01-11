# Unmanic Documentation Website

This repository contains the documentation site for Unmanic, a self-hosted media library optimizer and automation tool that runs on Docker or bare metal.
The live documentation is available at https://docs.unmanic.app/.

## Installation

```console
npm ci --cache .cache/npm --prefer-offline
```

## Local Development

```console
npm run start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=$(git config --get user.name) USE_SSH=true npm run  deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Styling

For all things page layout and styling, refer to [infima.dev](https://infima.dev/)
