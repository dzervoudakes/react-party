# Party!
> Rebuilt my buddy's [party website](http://party.tynick.com) with React.

**Disclaimer:** I am not responsible for any content (including foul language) which he may decide to post.

## Instructions

### Install Dependencies
Note: I recommend `node` >= v10.11.0 and `npm` >= v6.4.1 to run the application.

```
npm install
```

### Start Local Server
```
npm start
```

### Run Linting
```
npm run lint
```

### Run Linting with Fix
```
npm run lint:fix
```

### Run Style Linting
```
npm run stylelint
```

### Run Style Linting with Fix
```
npm run stylelint:fix
```

### Build for Production
```
npm run build
```

### Build for Production with Bundle Analyzer Report
```
npm run build --report
```

## Configuration
> This application makes use of `ESLint`, `Stylelint` and `EditorConfig`. Each of these features requires
> an extension be installed in order to work properly with IDEs and text editors such as VSCode.

## Server Environments
> The same Express server handles development and production content. To run the server locally
> with webpack dev middleware, run `npm start`. To run the production server with static
> build assets from 'dist', run `NODE_ENV=production node index.js`.
