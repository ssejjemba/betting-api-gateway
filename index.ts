import { IServer } from "./models/server";
import { ExpressServer } from "./server/express/api";

function startApplication(server: IServer) {
  server.startServer();
}

startApplication(new ExpressServer());
