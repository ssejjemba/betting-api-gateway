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

import { Response, Request } from "express";

export interface IOddsProvider {
  create: (req: Request<CreateOddRequest>, res: Response) => void;
  read: (req: Request<GetOddsRequest>, res: Response) => void;
  update: (req: Request<UpdateOddRequest>, res: Response) => void;
  delete: (req: Request<DeleteOddRequest>, res: Response) => void;
}
