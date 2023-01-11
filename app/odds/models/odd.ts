export class Odd {
  id: number;
  league: string;
  homeTeam: string;
  awayTeam: string;
  gameDate: Date;
  homeTeamWinOdd: number;
  drawOdd: number;
  awayTeamWinOdd: number;
  constructor(
    league: string,
    homeTeam: string,
    awayTeam: string,
    gameDate: Date,
    homeTeamWinOdd: number,
    drawOdd: number,
    awayTeamWinOdd: number
  ) {
    this.league = league;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.gameDate = gameDate;
    this.homeTeamWinOdd = homeTeamWinOdd;
    this.drawOdd = drawOdd;
    this.awayTeamWinOdd = awayTeamWinOdd;
  }
}
