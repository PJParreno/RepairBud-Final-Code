//const http = require('http');
//importing the express app in server.js to listen to request
//will be the path to you app.js file(relative path)
//const app = require('./backend/app');

//const port = process.env.PORT || 3000;

//setting port/configuration to express application
//app.set('port', port)

//pass app to create server to list to it
//const server = http.createServer(app);

//server.listen(port);

const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");



const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "4000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);

//install package command to listen to chances in server and automatically restart server
// 'npm install --save-dev nodemon
