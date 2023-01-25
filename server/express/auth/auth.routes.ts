import { AuthService } from "../../../models/interface";
import { IAuthRoutes } from "../../../models/server";
import {
  SignInRequest,
  SignInResponse,
  User,
  SignUpResponse,
  VerifyTokenRequest,
  VerifyTokenResponse,
  SignUpRequest,
} from "../../../models/user";

export class AuthRoutes implements IAuthRoutes {
  constructor(public authService: AuthService) {}

  login(req: SignInRequest) {
    return this.authService.login(req);
  }

  register(req: SignUpRequest) {
    return this.authService.register(req);
  }

  validate(req: VerifyTokenRequest) {
    return this.authService.validate(req);
  }
}
