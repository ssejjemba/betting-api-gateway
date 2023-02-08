import { Request, Response } from "express";
import {
  CreateOddRequest,
  CreateOddResponse,
  DeleteOddRequest,
  DeleteOddResponse,
  GetOddsRequest,
  GetOddsResponse,
  UpdateOddRequest,
  UpdateOddResponse,
} from "./requests";
import {
  Role,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
  User,
  VerifyTokenRequest,
  VerifyTokenResponse,
} from "./user";

export interface IAuthService {
  login: (req: Request<SignInRequest>, res: Response<SignInResponse>) => void;
  register: (
    req: Request<SignUpRequest>,
    res: Response<SignUpResponse>
  ) => void;
  validate?: (
    req: Request<VerifyTokenRequest>,
    res: Response<VerifyTokenResponse>
  ) => void;
}

export interface ITokenService {
  generateToken: (user: User) => string;
  verifyToken: (token: string) => { email: string; role: Role };
}

export interface IOddsService {
  create: (
    req: Request<CreateOddRequest>,
    res: Response<CreateOddResponse>
  ) => void;
  read: (req: Request<GetOddsRequest>, res: Response<GetOddsResponse>) => void;
  update: (
    req: Request<UpdateOddRequest>,
    res: Response<UpdateOddResponse>
  ) => void;
  delete: (
    req: Request<DeleteOddRequest>,
    res: Response<DeleteOddResponse>
  ) => void;
}
