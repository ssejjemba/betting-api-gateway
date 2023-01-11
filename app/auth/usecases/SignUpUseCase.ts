import { IAuthService } from "../interfaces/IAuthService";
import { ISignUpUseCase } from "../interfaces/ISignUpUseCase";
import { User } from "../models/User";
import { SignUpResponse } from "../models/SignUpResponse";

export class SignUpUseCase implements ISignUpUseCase {
  private authService: IAuthService;
  constructor(authService: IAuthService) {
    this.authService = authService;
  }

  async execute(user: User): Promise<SignUpResponse> {
    const createdUser = await this.authService.createUser(user);
    if (!createdUser) {
      throw new Error("Error creating user");
    }
    const token = await this.authService.createJWT(createdUser);
    return new SignUpResponse(createdUser, token);
  }
}
