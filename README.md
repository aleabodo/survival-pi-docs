# Survival-Pi Minecraft SMP official website

This is the documention and blog website of the Minecraft server Survival-Pi. If you're a member of the community and want to add a blog post or information to the docs, let any admin of the server know. You may also create pull requests with changes with your Minecraft username included in the description. 

### Installation
You need Node and npm for building this project. I recomment installing and managing it with nvm (https://github.com/nvm-sh/nvm):
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install node
```
Initialize the project and install dependencies:
```
npm install
```

### Local Development

```
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service or with `npm run serve`.


