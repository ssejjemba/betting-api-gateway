import grpc from "@grpc/grpc-js";
import { Request, Response } from "express";
import { ENV_VARS } from "../../../config/config";
import { AuthServiceClient } from "../../../generated/auth_grpc_pb";
import {
  SignInRequest as LR,
  SignUpRequest as SR,
  User as _User,
} from "../../../generated/auth_pb";
import { JWTAuthetication } from "../../../middleware/jwt/jwt.middleware";
import { IAuthProvider } from "../../../models/interface";
import {
  SignInRequest,
  SignInResponse,
  User,
  SignUpRequest,
  SignUpResponse,
} from "../../../models/user";

export class AuthProvider implements IAuthProvider {
  client: AuthServiceClient;

  constructor() {
    const host = ENV_VARS.grpcAuthHost || "";
    const port = ENV_VARS.grpcAuthPort || "";

    this.client = new AuthServiceClient(
      `${host}:${port}`,
      grpc.credentials.createInsecure()
    );
  }

  register(req: Request<SignUpRequest>, res: Response<SignUpResponse>) {
    const body: SignUpRequest = req.body;
    const data = new SR();

    const user = new _User();
    user.setEmail(body.email);
    user.setPassword(body.password);
    user.setRole(body.role);
    user.setUsername(body.username);

    data.setUser(user);

    this.client.signUp(data, (err, response) => {
      if (err || !response) {
        console.error(err);
        res.status(500).json({
          code: 500,
          error: "Internal server error",
          user: null,
        });
        return;
      }

      const result = response.toObject();

      res.status(result.code).json({
        code: result.code,
        error: result.message,
        user: result.user
          ? {
              username: result.user.username,
              email: result.user.email,
              role: result.user.role,
            }
          : null,
      });
    });
  }

  login(req: Request<SignInRequest>, res: Response<SignInResponse>) {
    const body: SignInRequest = req.body;
    const data = new LR();
    data.setEmail(body.email);
    data.setPassword(body.password);

    this.client.signIn(data, (err, response) => {
      if (err || !response) {
        console.error(err);
        res.status(500).json({
          code: 500,
          error: "Internal server error",
          token: "",
          user: null,
        });
        return;
      }

      const result = response.toObject();

      if (result.code === 200 && result.user) {
        // generate token for this user
        const token = this.generateToken({
          username: result.user.username,
          email: result.user.email,
          password: result.user.password,
          role: result.user.role,
        });

        res.status(200).json({
          code: result.code,
          error: result.message,
          token,
          user: {
            username: result.user.username,
            email: result.user.email,
            role: result.user.role,
          },
        });
      } else {
        res.status(result.code).json({
          code: result.code,
          error: result.message,
          token: "",
          user: null,
        });
      }
    });
  }

  generateToken(user: User): string {
    const JWTAuth = new JWTAuthetication();

    return JWTAuth.generateToken(user) || "";
  }
}
