import express from "express";
import { ENV_VARS } from "../../../config/config";
import { IServer } from "../../../models/server";
import { AuthProvider } from "../../../providers/grpc/auth/Auth";
import { OddsProvider } from "../../../providers/grpc/odds/Odds";
import { AuthService } from "../../../services/auth/Auth";
import { OddsService } from "../../../services/odds/Odds";
import { AuthRoutes } from "../auth/auth.routes";
import { OddRoutes } from "../odds/odds.routes";

export class ExpressServer implements IServer {
  app = express();

  configureApp() {
    const authProvider = new AuthProvider();
    const oddsProvider = new OddsProvider();

    const authService = new AuthService(authProvider);
    const oddsService = new OddsService(oddsProvider);

    const authRouter = new AuthRoutes(authService).getRouter();
    const oddsRouter = new OddRoutes(oddsService).getRouter();

    this.app.use("auth", authRouter);
    this.app.use("odds", oddsRouter);
  }

  startServer() {
    this.configureApp();
    this.app.listen(ENV_VARS.httpServerPort, () => {
      console.log(`Server is running on port ${ENV_VARS.httpServerPort}`);
    });
  }
}
