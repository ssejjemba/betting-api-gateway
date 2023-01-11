import { Odd } from "../models/odd";
import { OddFilter } from "./oddFilter";

export interface IOddService {
  createOdd(odd: Odd): Promise<Odd>;
  updateOdd(odd: Odd): Promise<Odd>;
  deleteOdd(id: number): Promise<void>;
  findOdds(filter: OddFilter): Promise<Odd[]>;
}
