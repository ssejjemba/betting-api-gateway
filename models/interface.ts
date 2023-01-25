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

export interface TokenService {
  generateToken: (user: User) => string;
  verifyToken: (token: string) => { email: string; role: Role };
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
