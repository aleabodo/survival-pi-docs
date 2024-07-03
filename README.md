# Survival-Pi Minecraft SMP official website

This is the documention and blog website of the Minecraft server Survival-Pi. 

If you're a member of the community and want to add a post about your base or edit the wiki, you may create a pull request with changes. Please include your Minecraft username in the description. You also need to verify with an admin of the server such that they know your Github account name.

If you don't know what all of this is and don't know how to use Git but still want to contribute, you can follow the instructions on the Wiki. There is a page explaining where and how to download a template post as a zip directory that you can use to make your own post. Then submit your modified to an admin. 

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


### Note

When using images please make sure they are at most 720p and have some compression on them in order to ensure quick loading speeds.

If you're using Linux, you can use the following commands to reduce your picture size:

```
sudo apt-get install imagemagick pngquant

find /path/to/your/directory -type f -name "*.png" -exec mogrify -resize 1280x720\> {} \; -exec pngquant --quality=80 --ext .png --force {} \;
```


