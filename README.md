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

In order to visit the project on another device (phone, ipad, etc.) you have to get the public ip address of your machine. You can do this by running the following command (in new terminal):

**MAC**
```
yarn get-ip
```

Execute `ifconfig` is this doesn't work and find it there.

**WINDOWS**
```
ipconfig
```
Find your IPv4 address.

Now you can visit this ip in the browser on your external device followed by the `:PORT`. (ex. 192.168.1.5:8080)

**make sure your devices are on the same network**

#### Build the app
This will put the builded files in the www folder (used by Cordova)

```
yarn build
```

## Cordova
First update the config.xml to your prefences. (name, description, ...)

In this example I will use android as example. Change `android` to `ios` for iOS build

#### Add prefered platform
```
cordova platform add android
```

#### Run app
```
cordova run android
```

#### build
```
cordova build android
```

#### build release
```
cordova build --release android
```
