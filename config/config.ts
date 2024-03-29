require("dotenv").config();

export const ENV_VARS = {
  grpcAuthPort: process.env.GRPC_AUTH_PORT,
  grpcOddsPort: process.env.GRPC_ODDS_PORT,
  grpcAuthHost: process.env.GRPC_AUTH_HOST,
  grpcOddsHost: process.env.GRPC_ODDS_HOST,
  httpServerPort: process.env.HTTP_SERVER_PORT,
  jwtSecret: process.env.JWT_TOKEN_SECRET,
  jwtExpireDuration: process.env.JWT_EXP_DURATION,
};
