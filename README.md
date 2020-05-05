# Debugging a Express server with simple html webpack client
This project is using an Express server with simple html webpack client front end.

[![Build Status](https://www.travis-ci.org/branflake2267/debugging-express-with-simplehtmlwebpack.svg?branch=master)](https://www.travis-ci.org/branflake2267/debugging-express-with-simplehtmlwebpack)

## Youtube tutorial
TODO

## Project Configuration
| Setting | Value |
| --- | --- |
| Purpose | Backend service with simple front end |
| Server | Express Web Server |
| Client | Simple HTML/JavaScript webpack configuration |
| Language | JavaScript |
| Architecture | npm/node |
| IDE | Visual Studio Code |
| License | GPL v3 |


## Debugging

* From the project root, run `npm install` to download the libraries used in this project.

### Debugging Server

* Use the VS Code Launcher `1. Launch Server`
* [http://localhost:3000](http://localhost:3000) - ./ server
* [http://localhost:3000/api](http://localhost:3000/api) - ./api server

### Debugging Client

* Use the VS Code Launcher `2. Launch Client`
* [http://localhost:8080](http://localhost:8080) - ./ client

### Debugging Client & Server Together

* Use the VS Code Launcher `3. Launch Client Chrome`
* [http://localhost:8080](http://localhost:8080) - ./ client
* [http://localhost:8080/api](http://localhost:8080/api) - ./api server



## Build
Build from the root of this project. 

* Run `npm install`
* Run `npm run build`
* The files will be output to the `./dist` directory.