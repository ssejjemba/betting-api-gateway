import { AppRoutes } from "../../../models/server";
import { Router, Request, Response, NextFunction } from "express";
import { IOddsService } from "../../../models/services";
import { JWTAuthetication } from "../../../middleware/jwt/jwt.middleware";

export class OddRoutes implements AppRoutes {
  private readonly router = Router();
  private middleware: JWTAuthetication;

  constructor(public oddsService: IOddsService) {
    this.middleware = new JWTAuthetication();
  }

  makeRoutes() {
    this.router.post(
      "/odds/create",
      this.middleware.isAutheticated,
      this.create.bind(this)
    );
    this.router.post(
      "/odds/read",
      this.middleware.isAutheticated,
      this.read.bind(this)
    );
    this.router.post(
      "/odds/update",
      this.middleware.isAdminAuthorized,
      this.update.bind(this)
    );
    this.router.post(
      "/odds/delete",
      this.middleware.isAdminAuthorized,
      this.delete.bind(this)
    );
  }

  create(req: Request, res: Response, next: NextFunction) {
    try {
      return this.oddsService.create(req, res);
    } catch (err) {
      next(err);
    }
  }

  read(req: Request, res: Response, next: NextFunction) {
    try {
      return this.oddsService.read(req, res);
    } catch (err) {
      next(err);
    }
  }

  update(req: Request, res: Response, next: NextFunction) {
    try {
      return this.oddsService.update(req, res);
    } catch (err) {
      next(err);
    }
  }

  delete(req: Request, res: Response, next: NextFunction) {
    try {
      return this.oddsService.delete(req, res);
    } catch (err) {
      next(err);
    }
  }

  public getRouter() {
    return this.router;
  }
}
