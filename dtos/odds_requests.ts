import {
  GetOddsRequest,
  CreateOddRequest,
  UpdateOddRequest,
  DeleteOddRequest,
} from "../models/requests";

export class GetOddsRequestDTO {
  league: string;
  gameDate: string;
  constructor(data: GetOddsRequest) {
    this.league = data.league;
    this.gameDate = data.game_date;
  }
}

export class CreateOddRequestDTO {
  league: string;
  homeTeam: string;
  awayTeam: string;
  gameDate: string;
  homeTeamWinOdd: number;
  drawOdd: number;
  awayTeamWinOdd: number;
  constructor(data: CreateOddRequest) {
    this.league = data.league;
    this.homeTeam = data.home_team;
    this.awayTeam = data.away_team;
    this.gameDate = data.game_date;
    this.homeTeamWinOdd = data.home_team_win_odd;
    this.drawOdd = data.draw_odd;
    this.awayTeamWinOdd = data.away_team_win_odd;
  }
}

export class UpdateOddRequestDTO {
  id: number;
  homeTeamWinOdd: number;
  drawOdd: number;
  awayTeamWinOdd: number;
  constructor(data: UpdateOddRequest) {
    this.id = data.id;
    this.homeTeamWinOdd = data.home_team_win_odd;
    this.drawOdd = data.draw_odd;
    this.awayTeamWinOdd = data.away_team_win_odd;
  }
}

export class DeleteOddRequestDTO {
  id: number;
  constructor(data: DeleteOddRequest) {
    this.id = data.id;
  }
}
