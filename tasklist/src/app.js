import express from "express";
import cors from "cors";

import routes from "./routes";

// Importing database
import "./database";

// TODO -> Update this project that was created with the same versions of packages used in the course to the latest ones
// TODO -> Create dockerfile to run the app using containers
class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
