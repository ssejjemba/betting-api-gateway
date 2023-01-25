import * as express from "express";
import { ENV_VARS } from "../../../config/config";
import { IServer } from "../../../models/server";

export class Server implements IServer {
  app = express();

  startServer() {
    this.app.listen(ENV_VARS.httpServerPort, () => {
      console.log(`Server is running on port ${ENV_VARS.httpServerPort}`);
    });
  }
}
