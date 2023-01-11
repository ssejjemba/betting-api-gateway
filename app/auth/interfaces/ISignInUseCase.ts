import { SignInResponse } from "../models/SignInResponse";

export interface ISignInUseCase {
  execute(email: string, password: string): Promise<SignInResponse>;
}
