import { AuthenticateResponse } from "../models/AuthenticateResponse";

export interface IAuthenticateUseCase {
  execute(jwt: string): Promise<AuthenticateResponse>;
}
