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
  create: (req: Request<any, any, CreateOddRequest>, res: Response) => void;
  read: (req: Request<any, any, GetOddsRequest>, res: Response) => void;
  update: (req: Request<any, any, UpdateOddRequest>, res: Response) => void;
  delete: (req: Request<any, any, DeleteOddRequest>, res: Response) => void;
}

export interface IAuthProvider {
  login: (
    req: Request<any, any, SignInRequest>,
    res: Response<SignInResponse>
  ) => void;
  register: (
    req: Request<any, any, SignUpRequest>,
    res: Response<SignUpResponse>
  ) => void;
}
