import { Odd } from "../models/odd";

export interface ICreateOddUseCase {
  execute(odd: Odd): Promise<Odd>;
}
