import { Odd } from "../models/odd";

export interface IUpdateOddUseCase {
  execute(odd: Odd): Promise<Odd>;
}
