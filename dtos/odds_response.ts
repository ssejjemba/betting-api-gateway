import {
  CreateOddResponse,
  GetOddsResponse,
  UpdateOddResponse,
} from "../models/odds";
import { Odd } from "../models/requests";
import { OddResponseDTO } from "./odd";

export class CreateOddResponseDTO {
  code: number;
  message: string;
  odd: Odd | undefined;

  constructor(data: CreateOddResponse) {
    this.code = data.code;
    this.message = data.error;
    if (data.odd) {
      this.odd = new OddResponseDTO(data.odd);
    }
  }
}

export class UpdateOddResponseDTO {
  code: number;
  message: string;
  odd: Odd | undefined;

  constructor(data: UpdateOddResponse) {
    this.code = data.code;
    this.message = data.error;
    if (data.odd) {
      this.odd = new OddResponseDTO(data.odd);
    }
  }
}

export class GetOddsResponseDTO {
  code: number;
  message: string;
  odds: Odd[] = [];

  constructor(data: GetOddsResponse) {
    this.code = data.code;
    this.message = data.error;
    if (data.odds) {
      data.odds.forEach((odd) => {
        this.odds.push(new OddResponseDTO(odd));
      });
    }
  }
}
