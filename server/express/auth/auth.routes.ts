import { Application } from "express";
import { IAuthService } from "../../../models/services";
import { AppRoutes } from "../../../models/server";
import { Router, Request, Response, NextFunction } from "express";

export class AuthRoutes implements AppRoutes {
  private readonly router = Router();
  constructor(public authService: IAuthService) {}

  public makeRoutes() {
    this.router.post("/login", this.login.bind(this));
    this.router.post("/register", this.register.bind(this));
  }

  private async login(req: Request, res: Response, next: NextFunction) {
    try {
      return this.authService.login(req, res);
    } catch (err) {
      next(err);
    }
  }

  private async register(req: Request, res: Response, next: NextFunction) {
    try {
      return this.authService.register(req, res);
    } catch (err) {
      next(err);
    }
  }

  public getRouter() {
    return this.router;
  }
}
