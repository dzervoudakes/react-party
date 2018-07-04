# Party!
> Rebuilt my buddy's [party website](http://party.tynick.com) with React.

**Disclaimer:** I am not responsible for any content (including foul language) which he may decide to post.

## Instructions

##### Install Dependencies
Note: I recommend `node` >= v9.0.0 and `npm` >= v5.6.0 to run the application.

```
npm install
```

##### Start Local Server
```
npm start
```

##### Run Linting
```
npm run lint
```

##### Run Linting with Fix
```
npm run lint:fix
```

##### Run Style Linting
```
npm run stylelint
```

##### Run Style Linting with Fix
```
npm run stylelint:fix
```

##### Build for Production
```
npm run build
```

##### Build for Production with Bundle Analyzer Report
```
npm run build --report
```

## Server Environments
The same Express server runs development and production builds.

> To run the server locally with webpack dev middleware, set `NODE_ENV=development`

> To run the production server with static build assets from 'dist', set `NODE_ENV=production`

## Some Technologies Used
* React
* ES6/7 + Babel
* Webpack
* Axios
* Flux Architecture
* Material-ui
* React-router-dom
* Sass
* Node + Express
