import { IOddsService } from "../../models/services";
import {
  CreateOddRequest,
  CreateOddResponse,
  GetOddsRequest,
  GetOddsResponse,
  UpdateOddRequest,
  UpdateOddResponse,
  DeleteOddRequest,
  DeleteOddResponse,
} from "../../models/requests";
import { IOddsProvider } from "../../providers/models/providers";
import { Request, Response } from "express";

export class OddsService implements IOddsService {
  constructor(public oddsProvider: IOddsProvider) {}

  create(
    req: Request<any, any, CreateOddRequest>,
    res: Response<CreateOddResponse>
  ) {
    this.oddsProvider.create(req, res);
  }

  read(req: Request<any, any, GetOddsRequest>, res: Response<GetOddsResponse>) {
    this.oddsProvider.read(req, res);
  }

  update(
    req: Request<any, any, UpdateOddRequest>,
    res: Response<UpdateOddResponse>
  ) {
    this.oddsProvider.update(req, res);
  }

  delete(
    req: Request<any, any, DeleteOddRequest>,
    res: Response<DeleteOddResponse>
  ) {
    this.oddsProvider.delete(req, res);
  }
}
