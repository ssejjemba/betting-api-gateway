import {
  LoginRequest,
  RegisterRequest,
  ValidateRequest,
} from 'src/models/Auth';
import { IAuthProvider, IAuthService } from 'src/models/Infrastructure';

export class AuthService implements IAuthService {
  constructor(public authProvider: IAuthProvider) {}

  public register(body: RegisterRequest) {
    return this.authProvider.register(body);
  }

  public login(body: LoginRequest) {
    return this.authProvider.login(body);
  }

  public validate(body: ValidateRequest) {
    return this.authProvider.validate(body);
  }
}
