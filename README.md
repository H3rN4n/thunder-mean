[![Commapp Logo](http://www.commapp.co)](http://www.commapp.co)

## Commapp Client App.
JavaScript Stack construido con Express, AngularJS, and Node.js proveyendo resultados a travez de la colección con la Api de Commapp.

## ¿Como ejecutar la aplicación?
Tener instalados las siguientes aplicaciones.
* Node.js - [Bajar e instalar Node.js](https://nodejs.org/en/download/)
* Ruby - [Bajar e instalar Ruby](https://www.ruby-lang.org/en/documentation/installation/)
* Bower - [Bower Package Manager](http://bower.io/) para instalar las dependencias de front-end. Se debe instalar globalmente a travez de npm.

```bash
$ npm install -g bower
```

* Grunt - You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process. Make sure you've installed Node.js and npm first, then install grunt globally using npm:

```bash
$ npm install -g grunt-cli
```

* Sass - You're going to use [Sass](http://sass-lang.com/) to compile CSS during your grunt task. Make sure you have ruby installed, and then install Sass using gem install:

```bash
$ gem install sass
```

```bash
$ npm install -g grunt-cli
```
## Clonar el repositorio

```bash
$ git clone https://github.com/commapp/....
```

## Instalar dependencias
```bash
$ npm install && bower install
```


## Running Your Application
After the install process is over, you'll be able to run your application using Grunt, just run grunt default task:

```
$ grunt
```

Your application should run on port 3000 with the *development* environment configuration, so in your browser just go to [http://localhost:3000](http://localhost:3000)

That's it! Your application should be running. To proceed with your development, check the other sections in this documentation.
If you encounter any problems, try the Troubleshooting section.

* explore `config/env/development.js` for development environment configuration options

### Running in Production mode
To run your application with *production* environment configuration, execute grunt as follows:

```bash
$ grunt heroku:production
```

* explore `config/env/production.js` for production environment configuration options

## Testing Your Application
You can run the full test suite included with MEAN.JS with the test task:

```bash
$ grunt test
```

This will run both the server-side tests (located in the app/tests/ directory) and the client-side tests (located in the public/modules/*/tests/).

To execute only the server tests, run the test:server task:

```bash
$ grunt test:server
```

And to run only the client tests, run the test:client task:

```bash
$ grunt test:client
```

