import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
  VerifyTokenRequest,
  VerifyTokenResponse,
} from "./user";

export interface IServer {
  startServer: () => void;
}

export interface IAuthRoutes {
  login: (req: SignInRequest) => SignInResponse;
  register: (req: SignUpRequest) => SignUpResponse;
  validate: (req: VerifyTokenRequest) => VerifyTokenResponse;
}
