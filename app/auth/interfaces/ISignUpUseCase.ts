import { SignUpResponse } from "../models/SignUpResponse";
import { User } from "../models/user";

export interface ISignUpUseCase {
  execute(user: User): Promise<SignUpResponse>;
}
