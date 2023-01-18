import { Odd } from "./odds.model";

export interface IOddsService {
  getOdds(): Promise<Odd[]>;
  createOdds(odds: Odd): Promise<Odd>;
  updateOdds(id: string, odds: Odd): Promise<Odd>;
  deleteOdds(id: string): Promise<void>;
}
