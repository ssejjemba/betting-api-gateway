import { IAuthService } from "../interfaces/IAuthService";
import { IAuthenticateUseCase } from "../interfaces/IAuthenticateUseCase";
import { AuthenticateResponse } from "../models/AuthenticateResponse";

export class AuthenticateUseCase implements IAuthenticateUseCase {
  private authService: IAuthService;
  constructor(authService: IAuthService) {
    this.authService = authService;
  }

  async execute(jwt: string): Promise<AuthenticateResponse> {
    const decoded = await this.authService.decodeJWT(jwt);
    if (!decoded) {
      throw new Error("Invalid Token");
    }
    return new AuthenticateResponse(jwt);
  }
}
