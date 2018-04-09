# react-hot-reload-starter
Starter for react projects with support of hot reloading.

Starter shipped with next preinstalled libraries:
    
* [React 16](https://reactjs.org/)
* [React Router 4](https://reacttraining.com/react-router/web/guides/philosophy)
* [Redux](https://redux.js.org/)
* [Redux Thunk](https://github.com/gaearon/redux-thunk)

Starter supported hot reloading for JavaScript files and Sass files. For more information
about HMR see [react-hot-loader](http://gaearon.github.io/react-hot-loader/) and
[react-imported-component](https://github.com/theKashey/react-imported-component).

Also starter supported code splitting for async routes (see **src/App.jsx**).

## Usage

```
git clone https://github.com/nikolaas/react-hot-reload-starter.git
cd react-hot-reload-starter
npm install
npm run dev
```

Last command starts
[Webpack Dev Server](https://webpack.js.org/configuration/dev-server/) on
address [http://localhost:9000](http://localhost:9000).

## Build

Application is build using [Webpack 4](https://webpack.js.org/).

To build application you should run command:

```
npm run build
```

The command run lining, testing and building of application. Result of building
will be placed in **dist** folder.
If you want run only build without linting and testing, run command:

```
npm run build:min
```

Command run building minified bundle.

Or you can run command:

```
npm run build:fat
```

Command run building not minified bundle.

To run the production build, execute the command:

```
npm start
```

Command starts a simple static server on address
[http://localhost:9000](http://localhost:9000).

## Linting

Starter use [ESLint](https://eslint.org/) with config based on
[Airbnb's eslint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) for linting code.

To linting code of application you should run command:

```
npm run lint
```

In development mode ESLint emits warnings allowing you to focus on writing code
and not being distracted by fixing  ESLint's errors. But in production
build ESLint will be emits errors instead of warnings.
That will lead to a failure of the build.

## Testing

Starter used [Jest](https://facebook.github.io/jest/) and 
[Enzyme](http://airbnb.io/enzyme/) for testing. Tests placed
in **test** folder.

To run tests you should run command:

```
npm run test
```

Updating jest snapshots:

```
npm run test:update
```

Generating code coverage:

```
npm run test:coverage
```

Debugging of tests:

```
npm run test:debug
```

## Assets

Assets placed in **src/assets** folder.
You can use jpeg, jpg, png, gif and svg images by importing it in code.

By default svg files imported as usual image i.e. import expression returned
relative path to svg image and the file itself copied to **dist/images**
folder.

If you need do some dynamic actions with svg image, for instance change color on hover
or add click handler, you can import your image as React Component. For this you should
add suffix ".dynamic" to end of file's name. For instance if you want
import svg image with name "awesome-image.svg" as React Component you should
rename your svg file to "awesome-image.dynamic.svg" ant then import it with
common way:

```javascript
import AwesomeImage from './path/to/your/awesome-image.dynamic.svg';
```

**AwesomeImage** is React Component and you can do with it too as with
any other React Component:

```javascript
<AwesomeImage className="some-class" onClick={this.handleClick}/>
```

## Happy coding!

### P.S. Sorry for my English :blush:
