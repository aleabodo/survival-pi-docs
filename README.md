# Survival-Pi Minecraft SMP official website

This is the documention and blog website of the Minecraft server Survival-Pi. If you're a member of the community and want to add a blog post or information to the docs, let any admin of the server know. The docs explain how to create and submit a blog post in detail. 

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
