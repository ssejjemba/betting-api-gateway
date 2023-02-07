import { ENV_VARS } from "../../../config/config";
import grpc from "@grpc/grpc-js";
import {
  OddsServiceService,
  IOddsServiceServer,
} from "../../../generated/odds_grpc_pb";

export default class Odds {
  host: string;

  serverPort: string;

  server: grpc.Server;

  constructor() {
    this.host = ENV_VARS.grpcOddsHost || "";
    this.serverPort = ENV_VARS.grpcOddsPort || "";
  }

  startServer() {
    const server = new grpc.Server();
    const serverImplementation: IOddsServiceServer = {
      createOdd: this.createOdd,
      getOdds: this.getOdds,
      updateOdd: this.updateOdd,
      deleteOdd: this.deleteOdd,
    };
    server.addService(OddsServiceService, serverImplementation);
    server.bindAsync(
      `${this.host}:${this.serverPort}`,
      grpc.ServerCredentials.createInsecure(),
      (err: Error | null, port: number) => {
        if (err) {
          console.error(`Server error: ${err.message}`);
        } else {
          console.log(`Server bound on port: ${port}`);
          server.start();
        }
      }
    );
  }

  createOdd() {}

  getOdds() {}

  updateOdd() {}

  deleteOdd() {}
}
