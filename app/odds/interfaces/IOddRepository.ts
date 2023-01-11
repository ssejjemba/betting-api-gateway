import { Odd } from "../models/odd";
import { OddFilter } from "./oddFilter";

export interface IOddRepository {
  create(odd: Odd): Promise<Odd>;
  update(odd: Odd): Promise<Odd>;
  delete(id: number): Promise<void>;
  find(filter: OddFilter): Promise<Odd[]>;
}
