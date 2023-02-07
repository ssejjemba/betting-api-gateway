import { Odd } from "../models/requests";

// will transform odd snake case to pascal case
export class OddDTO {
  id: number;
  league: string;
  homeTeam: string;
  awayTeam: string;
  gameDate: string;
  homeTeamWinOdd: number;
  drawOdd: number;
  awayTeamWinOdd: number;
  constructor(data: Odd) {
    this.id = data.id;
    this.league = data.league;
    this.homeTeam = data.home_team;
    this.awayTeam = data.away_team;
    this.gameDate = data.game_date;
    this.homeTeamWinOdd = data.home_team_win_odd;
    this.drawOdd = data.draw_odd;
    this.awayTeamWinOdd = data.away_team_win_odd;
  }
}
