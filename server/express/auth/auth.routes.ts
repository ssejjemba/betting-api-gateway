import { Application } from "express";
import { AuthService } from "../../../models/interface";
import { AppRoutes } from "../../../models/server";
import {
  SignInRequest,
  SignInResponse,
  User,
  SignUpResponse,
  VerifyTokenRequest,
  VerifyTokenResponse,
  SignUpRequest,
} from "../../../models/user";
import bodyParser from "body-parser";

export class AuthRoutes implements AppRoutes {
  constructor(
    public authService: AuthService,
    public application: Application
  ) {}

  public makeRoutes() {
    this.application.post("/login", bodyParser.json(), (req, res) => {});
  }

  private login(req: SignInRequest) {
    return this.authService.login(req);
  }

  private register(req: SignUpRequest) {
    return this.authService.register(req);
  }

  private validate(req: VerifyTokenRequest) {
    return this.authService.validate(req);
  }
}
