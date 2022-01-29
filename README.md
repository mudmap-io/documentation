# Mudmap Docs

Mudmap is a pfSense central management solution. Connect multiple devices 
to a single dashboard for easy, efficient and fast management of all your 
devices.

## Issues

Found a bug or issue with the documentation? Please reach out by following 
one of the contact options found [here](https://mudmap.io/contact).

Contributions are welcomed, please raise an issue to discuss your proposal 
before making a pull request. That way we can agree on a course of action.

## Developer Information

### Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```


> This website is built using [Docusaurus 2](https://docusaurus.io/), a 
> modern static website generator.
