
<h1 align="center">Express Typescript Boilerplate</h1>

<!-- <p align="center">
  <a href="https://david-dm.org/w3tecch/express-typescript-boilerplate">
    <img src="https://david-dm.org/w3tecch/express-typescript-boilerplate/status.svg?style=flat" alt="dependency" />
  </a>
  <a href="https://travis-ci.org/w3tecch/express-typescript-boilerplate">
    <img src="https://travis-ci.org/w3tecch/express-typescript-boilerplate.svg?branch=master" alt="travis" />
  </a>
  <a href="https://ci.appveyor.com/project/dweber019/express-typescript-boilerplate/branch/master">
    <img src="https://ci.appveyor.com/api/projects/status/f8e7jdm8v58hcwpq/branch/master?svg=true&passingText=Windows%20passing&pendingText=Windows%20pending&failingText=Windows%20failing" alt="appveyor" />
  </a>
  <a href="https://stackshare.io/hirsch88/express-typescript-boilerplate">
    <img src="https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat" alt="StackShare" />
  </a>
</p> -->

<p align="center">
  <b>A delightful way to building a Node.js RESTful API Services with beautiful code written in TypeScript.</b></br>
  <span>Inspired by the awesome framework <a href="https://laravel.com/">laravel</a> in PHP and of the repositories from <a href="https://github.com/pleerock">pleerock</a></span></br>
  <sub>Made with ❤️ by <a href="https://github.com/w3tecch">w3tech</a>, <a href="https://twitter.com/GeryHirschfeld1">Gery Hirschfeld</a> and <a href="https://github.com/w3tecch/express-typescript-boilerplate/graphs/contributors">contributors</a></sub>
</p>

<br />

## ❯ Fork changes

Not every backend needa a DB or GraphQL. This version should be backed up with some services for data storage.

    Changes:
    * removed ORM support
    * removed GraphQL support

## ❯ Why

Our main goal with this project is a feature complete server application.
We like you to be focused on your business and not spending hours in project configuration.

Try it!! We are happy to hear your feedback or any kind of new features.

### Features

- **Beautiful Code** thanks to the awesome annotations of the libraries from [pleerock](https://github.com/pleerock).
- **Easy API Testing** with included e2e testing.
- **Dependency Injection** done with the nice framework from [TypeDI](https://github.com/pleerock/typedi).
- **Clear Structure** with different layers such as controllers, services, repositories, models, middlewares...
- **Easy Exception Handling** thanks to [routing-controllers](https://github.com/pleerock/routing-controllers).
- **Smart Validation** thanks to [class-validator](https://github.com/pleerock/class-validator) with some nice annotations.
- **Custom Validators** to validate your request even better and stricter. [custom-validation-classes](https://github.com/pleerock/class-validator#custom-validation-classes).
- **API Documentation** thanks to [swagger](http://swagger.io/) and [routing-controllers-openapi](https://github.com/epiphone/routing-controllers-openapi).
- **API Monitoring** thanks to [express-status-monitor](https://github.com/RafalWilinski/express-status-monitor).
- **Integrated Testing Tool** thanks to [Jest](https://facebook.github.io/jest).
- **E2E API Testing** thanks to [supertest](https://github.com/visionmedia/supertest).
- **Basic Security Features** thanks to [Helmet](https://helmetjs.github.io/).
- **Easy event dispatching** thanks to [event-dispatch](https://github.com/pleerock/event-dispatch).
- **DataLoaders** helps with performance thanks to caching and batching [DataLoaders](https://github.com/facebook/dataloader).

## ❯ Table of Contents

- [Getting Started](#-getting-started)
- [Scripts and Tasks](#-scripts-and-tasks)
- [Debugger in VSCode](#-debugger-in-vscode)
- [API Routes](#-api-routes)
- [Project Structure](#-project-structure)
- [Logging](#-logging)
- [Event Dispatching](#-event-dispatching)
- [Seeding](#-seeding)
- [Docker](#-docker)
- [Further Documentations](#-further-documentations)
- [Related Projects](#-related-projects)
- [License](#-license)

## ❯ Getting Started

### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

Install [Node.js and NPM](https://nodejs.org/en/download/)

- on OSX use [homebrew](http://brew.sh) `brew install node`
- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

Install yarn globally

```bash
yarn global add yarn
```

### Step 2: Create new Project

Fork or download this project. Configure your package.json for your new project.

Then copy the `.env.example` file and rename it to `.env`.

Then setup your application environment.

```bash
yarn run setup
```

> This installs all dependencies with yarn. So after that your development environment is ready to use.

### Step 3: Serve your App

Go to the project dir and start your app with this yarn script.

```bash
yarn start serve
```

> This starts a local server using `nodemon`, which will watch for any file changes and will restart the sever according to these changes.
> The server address will be displayed to you as `http://0.0.0.0:3000`.

## ❯ Scripts and Tasks

All script are defined in the `package-scripts.js` file, but the most important ones are listed here.

### Install

- Install all dependencies with `yarn install`

### Linting

- Run code quality analysis using `yarn start lint`. This runs tslint.
- There is also a vscode task for this called `lint`.

### Tests

- Run the unit tests using `yarn start test` (There is also a vscode task for this called `test`).
- Run the integration tests using `yarn start test.integration`.
- Run the e2e tests using `yarn start test.e2e`.

### Running in dev mode

- Run `yarn start serve` to start nodemon with ts-node, to serve the app.
- The server address will be displayed to you as `http://0.0.0.0:3000`

### Building the project and run it

- Run `yarn start build` to generated all JavaScript files from the TypeScript sources (There is also a vscode task for this called `build`).
- To start the builded app located in `dist` use `yarn start`.

## ❯ Debugger in VSCode

To debug your code run `yarn start build` or hit <kbd>cmd</kbd> + <kbd>b</kbd> to build your app.
Then, just set a breakpoint and hit <kbd>F5</kbd> in your Visual Studio Code.

## ❯ API Routes

The route prefix is `/api` by default, but you can change this in the .env file.
The swagger and the monitor route can be altered in the `.env` file.

| Route          | Description |
| -------------- | ----------- |
| **/api**       | Shows us the name, description and the version of the package.json |
| **/swagger**   | This is the Swagger UI with our API documentation |
| **/monitor**   | Shows a small monitor page for the server |
| **/api/users** | Example entity endpoint |
| **/api/pets**  | Example entity endpoint |

## ❯ Project Structure

| Name                              | Description |
| --------------------------------- | ----------- |
| **.vscode/**                      | VSCode tasks, launch configuration and some other settings |
| **dist/**                         | Compiled source files will be placed here |
| **src/**                          | Source files |
| **src/api/controllers/**          | REST API Controllers |
| **src/api/controllers/requests**  | Request classes with validation rules if the body is not equal with a model |
| **src/api/controllers/responses** | Response classes or interfaces to type json response bodies  |
| **src/api/errors/**               | Custom HttpErrors like 404 NotFound |
| **src/api/interceptors/**         | Interceptors are used to change or replace the data returned to the client. |
| **src/api/middlewares/**          | Express Middlewares like helmet security features |
| **src/api/services/**             | Service layer |
| **src/api/subscribers/**          | Event subscribers |
| **src/api/validators/**           | Custom validators, which can be used in the request classes |
| **src/auth/**                     | Authentication checkers and services |
| **src/core/**                     | The core features like logger and env variables |
| **src/decorators/**               | Custom decorators like @Logger & @EventDispatch |
| **src/loaders/**                  | Loader is a place where you can configure your app |
| **src/public/**                   | Static assets (fonts, css, js, img). |
| **src/types/** *.d.ts             | Custom type definitions and files that aren't on DefinitelyTyped |
| **test**                          | Tests |
| **test/e2e/** *.test.ts           | End-2-End tests (like e2e) |
| **test/integration/** *.test.ts   | Integration test with SQLite3 |
| **test/unit/** *.test.ts          | Unit tests |
| .env.example                      | Environment configurations |
| .env.test                         | Test environment configurations |

## ❯ Logging

Our logger is [winston](https://github.com/winstonjs/winston). To log http request we use the express middleware [morgan](https://github.com/expressjs/morgan).
We created a simple annotation to inject the logger in your service (see example below).

```typescript
import { Logger, LoggerInterface } from '../../decorators/Logger';

@Service()
export class UserService {

    constructor(
        @Logger(__filename) private log: LoggerInterface
    ) { }

    ...
```

## ❯ Event Dispatching

We use this awesome repository [event-dispatch](https://github.com/pleerock/event-dispatch) for event dispatching.
We created a simple annotation to inject the EventDispatcher in your service (see example below). All events are listed in the `events.ts` file.

```typescript
import { events } from '../subscribers/events';
import { EventDispatcher, EventDispatcherInterface } from '../../decorators/EventDispatcher';

@Service()
export class UserService {

    constructor(
        @EventDispatcher() private eventDispatcher: EventDispatcherInterface
    ) { }

    public async create(user: User): Promise<User> {
        ...
        this.eventDispatcher.dispatch(events.user.created, newUser);
        ...
    }
```

## ❯ Docker

### Install Docker

Before you start, make sure you have a recent version of [Docker](https://docs.docker.com/engine/installation/) installed

### Build Docker image

```shell
docker build -t <your-image-name> .
```

### Run Docker image in container and map port

The port which runs your application inside Docker container is either configured as `PORT` property in your `.env` configuration file or passed to Docker container via environment variable `PORT`. Default port is `3000`.

#### Run image in detached mode

```shell
docker run -d -p <port-on-host>:<port-inside-docker-container> <your-image-name>
```

#### Run image in foreground mode

```shell
docker run -i -t -p <port-on-host>:<port-inside-docker-container> <your-image-name>
```

### Stop Docker container

#### Detached mode

```shell
docker stop <container-id>
```

You can get a list of all running Docker container and its ids by following command

```shell
docker images
```

#### Foreground mode

Go to console and press <CTRL> + C at any time.

### Docker environment variables

There are several options to configure your app inside a Docker container

#### project .env file

You can use `.env` file in project root folder which will be copied inside Docker image. If you want to change a property inside `.env` you have to rebuild your Docker image.

#### run options

You can also change app configuration by passing environment variables via `docker run` option `-e` or `--env`.

```shell
docker run --env DB_HOST=localhost -e DB_PORT=3306
```

#### environment file

Last but not least you can pass a config file to `docker run`.

```shell
docker run --env-file ./env.list
```

`env.list` example:

```
# this is a comment
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
```

## ❯ Further Documentations

| Name & Link                       | Description                       |
| --------------------------------- | --------------------------------- |
| [Express](https://expressjs.com/) | Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. |
| [Microframework](https://github.com/pleerock/microframework) | Microframework is a simple tool that allows you to execute your modules in a proper order, helping you to organize bootstrap code in your application. |
| [TypeDI](https://github.com/pleerock/typedi) | Dependency Injection for TypeScript. |
| [routing-controllers](https://github.com/pleerock/routing-controllers) | Create structured, declarative and beautifully organized class-based controllers with heavy decorators usage in Express / Koa using TypeScript and Routing Controllers Framework. |
| [class-validator](https://github.com/pleerock/class-validator) | Validation made easy using TypeScript decorators. |
| [class-transformer](https://github.com/pleerock/class-transformer) | Proper decorator-based transformation / serialization / deserialization of plain javascript objects to class constructors |
| [event-dispatcher](https://github.com/pleerock/event-dispatch) | Dispatching and listening for application events in Typescript |
| [Helmet](https://helmetjs.github.io/) | Helmet helps you secure your Express apps by setting various HTTP headers. It’s not a silver bullet, but it can help! |
| [Auth0 API Documentation](https://auth0.com/docs/api/management/v2) | Authentification service |
| [Jest](http://facebook.github.io/jest/) | Delightful JavaScript Testing Library for unit and e2e tests |
| [supertest](https://github.com/visionmedia/supertest) | Super-agent driven library for testing node.js HTTP servers using a fluent API |
| [nock](https://github.com/node-nock/nock) | HTTP mocking and expectations library |
| [swagger Documentation](http://swagger.io/) | API Tool to describe and document your api. |
| [SQLite Documentation](https://www.sitepoint.com/getting-started-sqlite3-basic-commands/) | Getting Started with SQLite3 – Basic Commands. |

## ❯ Related Projects

- [Microsoft/TypeScript-Node-Starter](https://github.com/Microsoft/TypeScript-Node-Starter) - A starter template for TypeScript and Node with a detailed README describing how to use the two together.
- [express-graphql-typescript-boilerplate](https://github.com/w3tecch/express-graphql-typescript-boilerplate) - A starter kit for building amazing GraphQL API's with TypeScript and express by @w3tecch
- [aurelia-typescript-boilerplate](https://github.com/w3tecch/aurelia-typescript-boilerplate) - An Aurelia starter kit with TypeScript
- [Auth0 Mock Server](https://github.com/hirsch88/auth0-mock-server) - Useful for e2e testing or faking an oAuth server

## ❯ License

[MIT](/LICENSE)
