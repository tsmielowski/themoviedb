# TheMovieDB

For preparing a development environment tool create-react-app was used.
Npm package themoviedb-javascript-library is used to integrate with TheMovieDB API.
React library is used to prepare view layer.

## Instalation

Before you start to install the application make sure you have node and npm installed.
Clone project from github and run instruction:

```sh
npm install
```

## Start application

To start the application run instruction:

```sh
npm run start
```

Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

## Test application

To execute tests run instruction:

```sh
npm run test
```

##TODO

Suggested improvments:

- provide pagination for the result of searching,
- prevent sending a request on each text change in search field,
- better error handling in case of the movie DB api fail.
