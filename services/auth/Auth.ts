import { Request, Response } from "express";
import { IAuthService } from "../../models/services";
import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from "../../models/user";
import { IAuthProvider } from "../../providers/models/providers";

export class AuthService implements IAuthService {
  constructor(public authProvider: IAuthProvider) {}

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
