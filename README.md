# phaser-3-webpack-cordova
A template boilerplate for making phaser 3 projects (could be other projects) and build them for android and ios (or browser) using Webpack and Cordova.

![Image description](banner.png)

## Getting Started
Installation steps to set this template up and running.

### Install
#### Clone repo (and specify folder name)
```
git clone https://github.com/PeeJeeDR/phaser-3-webpack-cordova.git PROJECT_NAME
```

#### Navigate in folder
```
cd PROJECT_NAME
```

#### Remove git
```
rm -rf .git
```

#### Optional init own
```
git init
```

#### Install dependecies
```
yarn
```

### Available scripts
#### Start development server
```
yarn serve
```

On desktop visit http://localhost:8080 to open te project. In order to visit the project on another device (phone, ipad, etc.) you have to get the public ip address of your machine first. You can do this by running the following command (in new terminal):

**MAC**
```
yarn get-ip
```

Execute `ifconfig` if this doesn't work and find it there.

**WINDOWS**
```
ipconfig
```
Find your IPv4 address.

Now you can visit this ip address in the browser on your external device followed by the `:PORT`. (ex. http://192.168.1.5:8080)

**Make sure your devices are on the same network.**

#### Build the app
This will put the builded files in the www folder (used by Cordova)

```
yarn build
```

## Cordova
First update the config.xml to your prefences. (name, description, ...)

In this example I will use android as example. Change `android` to `ios` for iOS build

**Make sure you ran `yarn build` at least once and that the `www` folder present.**

#### Add prefered platform
```
cordova platform add android
```

#### Run app
```
cordova run android
```

#### Build
```
cordova build android
```

#### Build release
```
cordova build --release android
```
