# phaser-3-webpack-cordova
A template boilerplate for making phaser 3 projects (could be other projects) and build them for android and ios (or browser) using Webpack and Cordova.

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

#### Remove git (and init new)
```
rm -rf .git && git init
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
