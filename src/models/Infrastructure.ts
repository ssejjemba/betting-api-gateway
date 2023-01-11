import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ValidateRequest,
  ValidateResponse,
} from './Auth';

export interface BettingConsumer {
  start: () => void;
}

export interface IAuthService {
  register: (body: RegisterRequest) => Promise<RegisterResponse>;
  login: (body: LoginRequest) => Promise<LoginResponse>;
  validate: (token: ValidateRequest) => Promise<ValidateResponse>;
}

export interface IAuthProvider {
  register: (body: RegisterRequest) => Promise<RegisterResponse>;
  login: (body: LoginRequest) => Promise<LoginResponse>;
  validate: (token: ValidateRequest) => Promise<ValidateResponse>;
}

export type AuthorizationHeader = string | null | undefined;
