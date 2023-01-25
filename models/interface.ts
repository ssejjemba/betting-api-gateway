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
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
  VerifyTokenRequest,
  VerifyTokenResponse,
} from "./user";

export interface AuthService {
  login: (req: SignInRequest) => SignInResponse;
  register: (req: SignUpRequest) => SignUpResponse;
  validate: (req: VerifyTokenRequest) => VerifyTokenResponse;
}

export interface AuthProvider {
  login: (req: SignInRequest) => SignInResponse;
  register: (req: SignUpRequest) => SignUpResponse;
  validate: (req: VerifyTokenRequest) => VerifyTokenResponse;
}

export interface OddsService {
  create: (req: CreateOddRequest) => CreateOddResponse;
  read: (req: GetOddsRequest) => GetOddsResponse;
  update: (req: UpdateOddRequest) => UpdateOddResponse;
  delete: (req: DeleteOddRequest) => DeleteOddResponse;
}

export interface OddsProvider {
  create: (req: CreateOddRequest) => CreateOddResponse;
  read: (req: GetOddsRequest) => GetOddsResponse;
  update: (req: UpdateOddRequest) => UpdateOddResponse;
  delete: (req: DeleteOddRequest) => DeleteOddResponse;
}
