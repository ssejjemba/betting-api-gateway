import { Odd } from "../models/odd";
import { OddFilter } from "./oddFilter";

export interface IGetOddsUseCase {
  execute(filter: OddFilter): Promise<Odd[]>;
}
