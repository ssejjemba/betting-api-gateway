import { Request, Response } from "express";
import { IAuthService } from "../../models/services";
import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from "../../models/user";
import { AuthProvider } from "../../providers/grpc/auth/Auth";

export class AuthService implements IAuthService {
  constructor(public authProvider: AuthProvider) {}

  login(req: Request<any, any, SignInRequest>, res: Response<SignInResponse>) {
    this.authProvider.login(req, res);
  }

  register(
    req: Request<any, any, SignUpRequest>,
    res: Response<SignUpResponse>
  ) {
    this.authProvider.register(req, res);
  }
}
