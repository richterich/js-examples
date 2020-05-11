# Js Examples

[![License](https://img.shields.io/github/license/Rihtarich/js-examples.svg?style=popout)](LICENSE.md)

A simple set of programs written in JavaScript

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
See deployment for notes on how to deploy the project on a live system.

- [Prerequisites](#Prerequisites)
- [Installing](#Installing)
- [Deployment](#Deployment)
- [Author](#Author)
- [License](#License)

### Prerequisites

- Node.js

### Installing

Check your software for your operating system. You should install `Node.js`.

#### Linux

You should download binary archive from [Node.js official site](https://nodejs.org).
To install `Node.js`, please follow the [official instructions](https://github.com/nodejs/help/wiki/Installation) or the short guide below:

Create a directory `nodejs` in `/usr/local/lib`:
```bash
$ sudo mkdir /usr/local/lib/nodejs
```
You should pass to the directory where you downloaded the binary archive. I use nodejs version `12.16.3` distributive `linux-x64`. The command to unziping the binary archive to already created directory looks like:
```bash
$ sudo tar -xJvf node-v12.16.3-linux-x64.tar.xz -C /usr/local/lib/nodejs
```

Set the environment variable to use `Node.js`. Add lines below to the end in your `~/.profile` file:
```bash
# Export Node.js to PATH
export PATH=/usr/local/lib/nodejs/node-v12.16.3-linux-x64/bin:$PATH
```
You should refresh your profile:
```bash
. ~/.profile
```
To check version of `node` enter the command `$ node -v` in terminal.
The output of the command would be something like this:
```bash
$ node -v
v12.16.3
```
To check version of `npm` enter the command `$ npm version` in terminal.
The output of the command would be something like this:
```bash
$ npm version
{
  npm: '6.14.4',
  ares: '1.16.0',
  brotli: '1.0.7',
  cldr: '36.0',
  http_parser: '2.9.3',
  icu: '65.1',
  llhttp: '2.0.4',
  modules: '72',
  napi: '5',
  nghttp2: '1.40.0',
  node: '12.16.3',
  openssl: '1.1.1g',
  tz: '2019c',
  unicode: '12.1',
  uv: '1.34.2',
  v8: '7.8.279.23-node.35',
  zlib: '1.2.11'
}
```
To check version of `npx` enter the command `$ npx -v` in terminal.
The output of the command would be something like this:
```bash
$ npx -v
6.14.4
```

#### Windows

You should download Windows Installer from [Node.js official site](https://nodejs.org).
To install `Node.js` start the installer and follow instructions.

To check version of `node` enter the command `> node -v` in command prompt.
The output of the command would be something like this:
```pwsh
> node -v
v12.16.3
```
To check version of `npm` enter the command `> npm version` in command prompt.
The output of the command would be something like this:
```pwsh
> npm version
{
  npm: '6.14.4',
  ares: '1.16.0',
  brotli: '1.0.7',
  cldr: '36.0',
  http_parser: '2.9.3',
  icu: '65.1',
  llhttp: '2.0.4',
  modules: '72',
  napi: '5',
  nghttp2: '1.40.0',
  node: '12.16.3',
  openssl: '1.1.1g',
  tz: '2019c',
  unicode: '12.1',
  uv: '1.34.2',
  v8: '7.8.279.23-node.35',
  zlib: '1.2.11'
}
```
To check version of `npx` enter the command `> npx -v` in command prompt.
The output of the command would be something like this:
```pwsh
> npx -v
6.14.4
```

## Deployment

After fetch this repository you might pass to a folder with program file and run it from terminal:
```bash
$ node hello_world.js
```
For Windows the way will be the same:
 ```pwsh
> node hello_world.js
```

## Built With

* [Node.js](https://nodejs.org) - It is a JavaScript runtime engine.

## Author

* **Alexandr Rihtarich** - *Initial work* - [Rihtarich](https://github.com/Rihtarich)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
