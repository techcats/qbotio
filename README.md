# Q-Bot IO

[![Stories in Ready](https://badge.waffle.io/techcats/qbotio.png?label=ready&title=Ready)](https://waffle.io/techcats/qbotio)

An IR Closed-Domain Answering System that generates relevant and accurate answers to Computer Science Interview questions.

## Development

> Install the latest NodeJS LTS

### Install dependencies

```bash
$ npm install -g gulp
$ npm install -g bower
$ bower install
$ npm install
```

### Test Locally

> Serves the app on localhost:80 for local testing

```bash
$ gulp serve
```

### Deployment:

> It is a good idea to merge your changes to 'dev' branch before deployment

```bash
$ gulp # compiles sources into dist/
$ gulp deploy
```

### Configuring Tasks

See `gulpfile.js` for task config.
