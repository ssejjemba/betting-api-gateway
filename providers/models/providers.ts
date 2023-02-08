import {
  CreateOddRequest,
  GetOddsRequest,
  UpdateOddRequest,
  DeleteOddRequest,
  CreateOddResponse,
  GetOddsResponse,
  UpdateOddResponse,
  DeleteOddResponse,
} from "../../models/requests";

import { Response } from "express";

export interface IOddsProvider {
  create: (req: CreateOddRequest, res: Response) => void;
  read: (req: GetOddsRequest, res: Response) => void;
  update: (req: UpdateOddRequest, res: Response) => void;
  delete: (req: DeleteOddRequest, res: Response) => void;
}
