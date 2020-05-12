# Debugging a express server with simple html webpack client
This project is using an Express server with simple html webpack client front end.

[![Debugging Video Tutorial](https://img.youtube.com/vi/-Y8J4sgr6uU/0.jpg)](https://www.youtube.com/watch?v=-Y8J4sgr6uU)

## Project Configuration
| Setting | Value |
| --- | --- |
| Purpose | Debug a simple web server and simple front end with self contained container directory architecture |
| Server | Express web server |
| Client | Simple HTML/JavaScript webpack configuration |
| Language | JavaScript |
| Architecture | npm/node |
| IDE | Visual Studio Code |
| CI | Travis CI |
| License | GPL v3 |
| Tutorial | [Youtube Tutorial](https://www.youtube.com/watch?v=-Y8J4sgr6uU) |


## Debugging

* From the project root, run `npm install` to download the libraries used in the client and server directories.

### Debugging Server

* Use the VS Code Launcher `1. Launch Server`
* http://localhost:3000 - ./ server
* http://localhost:3000/api - ./api server

### Debugging Client

* Use the VS Code Launcher `2. Launch Client`
* http://localhost:8080 - ./ client

### Debugging Client & Server Together
Debug both the client and server together. The webpack dev server provides a reverse proxy to the server. 

* Use the VS Code Launcher `3. Launch Client Chrome`
* http://localhost:8080 - ./ client
* http://localhost:8080/api - ./api server



## Build
Build from the root of this project. 

* Run `npm install`
* Run `npm run build`
* The files will be output to the `./dist` directory.
* Run `npm run serverFromDist` to run the server from `./dist` build directory.
* Open http://localhost:3000 or http://localhost:3000/api


## Deploy
Would you like to deploy this to Elastic Beanstalk? 

* [Check out Part 2: Debugging AWS multi-docker EB config](https://github.com/branflake2267/debugging-multi-docker-aws-eb)
