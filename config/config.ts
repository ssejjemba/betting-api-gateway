require("dotenv").config();

export const ENV_VARS = {
  grpcAuthPort: process.env.GRPC_AUTH_PORT,
  grpcOddsPort: process.env.GRPC_ODDS_PORT,
  httpServerPort: process.env.HTTP_SERVER_PORT,
};
