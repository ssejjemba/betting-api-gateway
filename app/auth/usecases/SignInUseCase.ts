import { IAuthService } from "../interfaces/IAuthService";
import { ISignInUseCase } from "../interfaces/ISignInUseCase";
import { User } from "../models/User";
import { SignInResponse } from "../models/SignInResponse";

export class SignInUseCase implements ISignInUseCase {
  private authService: IAuthService;
  constructor(authService: IAuthService) {
    this.authService = authService;
  }

  async execute(email: string, password: string): Promise<SignInResponse> {
    const user = await this.authService.getUserByCredentials(email, password);
    if (!user) {
      throw new Error("Invalid Email or Password");
    }
    const token = await this.authService.createJWT(user);
    return new SignInResponse(user, token);
  }
}
