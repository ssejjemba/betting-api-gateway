import { AppRoutes } from "../../../models/server";
import { Router, Request, Response, NextFunction } from "express";
import { IOddsService } from "../../../models/services";

export class OddRoutes implements AppRoutes {
  private readonly router = Router();
  constructor(public oddsService: IOddsService) {}

  makeRoutes() {
    this.router.post("/api/create", this.create.bind(this));
    this.router.post("/api/read", this.read.bind(this));
    this.router.post("/api/update", this.update.bind(this));
    this.router.post("/api/delete", this.delete.bind(this));
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
