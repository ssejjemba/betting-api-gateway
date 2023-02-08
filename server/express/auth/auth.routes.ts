import { Application } from "express";
import { IAuthService } from "../../../models/interface";
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
import { Router, Request, Response, NextFunction } from "express";

export class AuthRoutes implements AppRoutes {
  private readonly router = Router();
  constructor(public authService: IAuthService) {}

  public makeRoutes() {
    this.router.post("/login", this.login.bind(this));
    this.router.post("/register", this.register.bind(this));
    this.router.post("/validate", this.validate.bind(this));
  }

  private async login(req: Request, res: Response, next: NextFunction) {
    const request = req.body as SignInRequest;
    try {
      const response = await this.authService.login(request);
      return res.json(response);
    } catch (err) {
      next(err);
    }
  }

  private async register(req: Request, res: Response, next: NextFunction) {
    const request = req.body as SignUpRequest;
    try {
      const response = await this.authService.register(request);
      return res.json(response);
    } catch (err) {
      next(err);
    }
  }

  private async validate(req: Request, res: Response, next: NextFunction) {
    const request = req.body as VerifyTokenRequest;
    try {
      const response = await this.authService.validate(request);
      return res.json(response);
    } catch (err) {
      next(err);
    }
  }

  public getRouter() {
    return this.router;
  }
}
