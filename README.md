# mern-backend

Backend project with MERN and Mongo

## Use postman to test APIs

- run server in vscode
- use postman GET functionality to send requests
- Create a collection that stores all your api calls
  - Create a blank collection and name it
  - Add new requests
  - Select the url and set it to be a variable, scoped to the collection
  - Make sure to save the request before creating a new one
  - On the APi page, click Postbot, can use AI to write documentation and tests. This is now viewable at the documentation page from the collections view
  - Can use postman for tests too, run the entire test suite, generate random values within request body using `{{$randomCity}}` `{{$randomPrice}}` etc.
  - Can share postman docs with frontend devs

## Express

Simple framework to create web servers.
Package.json is the entrypoint

1. `npm init -y` asks questions about repo and creates package.json
2. Create an `index.js` and create a start command that runs `node index.js`
3. `npm install express` -- this will create node_modules and add a new section to package.json

- Running a dev server with hot reload - `npm i -D nodemon` --> creates a dev dependency in package.json
  - Add an entry to `package.json` under `scripts` called `dev`: `"dev": "nodemon index.js`, now run a dev server with hot realod using `npm run dev`

## Receiving data from the frontend

Express docs: https://expressjs.com/en/5x/api.html#req.body

- `app.use(express.json())`
- Data coming in via the request body is accessed using `req.body`
- Data coming via the url is accessed via `req.params` -> this comes as a string to use `parseInt` as needed
- Create placeholders for variables when declaring routes using `/path/:variable`
- Return data with `res.status(code).send(json data)`
- Filter data using `object.find(predicate, i.e (t) => t.id === req.body.id)`
- Extract data from request body using curly brace notation for succinctness
- Delete data from array by first finding its index (use `findIndex`) and then calling `splice`

## Deploying

- When deploying to digitalOcean app platform, we cannot hardcode port numbers. We need to pick an appropriate port number based on the runtime environment.
- https://www.npmjs.com/package/dotenv
- `const port = process.env.PORT || 3000`
- Create a .env file but don't push it to github. Now on DO we get the env from the runtime.

## Better logging

- Use `winston` and `morgan`. Guide: https://docs.chaicode.com/advance-node-logger/
- Use winston to create a logger that can parse custom formatted logs and forward them anywhere (console, db, file) and morgan to define a custom log format.
- Export your winston logger and then import it in your main scripts. Now insead of using `console.log` use `logger.info` etc to get pretty printed logs with useful information.
- Use `app.use(function)` to create middleware. That simple.

## Idea to database design

- Just to buld an MVP, no need to consider scaling right now
- Go from problem statement to database design first
- Tools: Eraser, Moon moddeler (allows export to SQL)
  - Eraser: Diagrams with code. Has own syntax. `<` is for one to many relationships, `>` is for many to one, `-` is for one to one.
  - 3 examples here (todo app, ecommerce app, hospital management system): https://app.eraser.io/workspace/ipT2N0NZGB6zsaTz5410?origin=share
