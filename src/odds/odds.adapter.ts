import { injectable } from "inversify";
import { IOddsService } from "./odds.port";
import { Odd } from "./odds.model";

@injectable()
export class OddsAdapter implements IOddsService {
  async getOdds(): Promise<Odd[]> {
    // implement the logic to get odds from the service
  }
  async createOdds(odds: Odd): Promise<Odd> {
    // implement the logic to create odds in the service
  }
  async updateOdds(id: string, odds: Odd): Promise<Odd> {
    // implement the logic to update odds in the service
  }
  async deleteOdds(id: string): Promise<void> {
    // implement the logic to delete odds from the service
  }
}
