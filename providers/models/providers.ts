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

import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from "../../models/user";

import { Response, Request } from "express";

export interface IOddsProvider {
  create: (req: Request<CreateOddRequest>, res: Response) => void;
  read: (req: Request<GetOddsRequest>, res: Response) => void;
  update: (req: Request<UpdateOddRequest>, res: Response) => void;
  delete: (req: Request<DeleteOddRequest>, res: Response) => void;
}

export interface IAuthProvider {
  login: (req: Request<SignInRequest>, res: Response<SignInResponse>) => void;
  register: (
    req: Request<SignUpRequest>,
    res: Response<SignUpResponse>
  ) => void;
}
