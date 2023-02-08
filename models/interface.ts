import {
  CreateOddRequest,
  CreateOddResponse,
  DeleteOddRequest,
  DeleteOddResponse,
  GetOddsRequest,
  GetOddsResponse,
  UpdateOddRequest,
  UpdateOddResponse,
} from "./odds";
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
  login: (req: SignInRequest) => SignInResponse;
  register: (req: SignUpRequest) => SignUpResponse;
  validate: (req: VerifyTokenRequest) => VerifyTokenResponse;
}

export interface IAuthProvider {
  login: (req: SignInRequest) => SignInResponse;
  register: (req: SignUpRequest) => SignUpResponse;
  validate: (req: VerifyTokenRequest) => VerifyTokenResponse;
}

export interface ITokenService {
  generateToken: (user: User) => string;
  verifyToken: (token: string) => { email: string; role: Role };
}

export interface IOddsService {
  create: (req: CreateOddRequest) => CreateOddResponse;
  read: (req: GetOddsRequest) => GetOddsResponse;
  update: (req: UpdateOddRequest) => UpdateOddResponse;
  delete: (req: DeleteOddRequest) => DeleteOddResponse;
}

export interface IOddsProvider {
  create: (req: CreateOddRequest) => CreateOddResponse;
  read: (req: GetOddsRequest) => GetOddsResponse;
  update: (req: UpdateOddRequest) => UpdateOddResponse;
  delete: (req: DeleteOddRequest) => DeleteOddResponse;
}
