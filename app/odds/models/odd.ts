import * as Joi from "joi";
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

export const oddSchema = Joi.object({
  league: Joi.string().required(),
  homeTeam: Joi.string().required(),
  awayTeam: Joi.string().required(),
  gameDate: Joi.date().required(),
  homeTeamWinOdd: Joi.number().required(),
  drawOdd: Joi.number().required(),
  awayTeamWinOdd: Joi.number().required(),
});
