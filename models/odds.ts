export type Odd = {
  id: number;
  league: string;
  homeTeam: string;
  awayTeam: string;
  gameDate: string;
  homeTeamWinOdd: number;
  drawOdd: number;
  awayTeamWinOdd: number;
};

export type CreateOddRequest = {
  league: string;
  homeTeam: string;
  awayTeam: string;
  gameDate: string;
  homeTeamWinOdd: number;
  drawOdd: number;
  awayTeamWinOdd: number;
};

export type CreateOddResponse = {
  code: number;
  error: string;
  odd: Odd | undefined;
};

export type GetOddsRequest = {
  league: string;
  gameDate: string;
};

export type GetOddsResponse = {
  code: number;
  error: string;
  odds: Odd[];
};

export type UpdateOddRequest = {
  id: number;
  homeTeamWinOdd: number;
  drawOdd: number;
  awayTeamWinOdd: number;
};

export type UpdateOddResponse = {
  code: number;
  error: string;
  odd: Odd | undefined;
};

export type DeleteOddRequest = {
  id: number;
};

export type DeleteOddResponse = {
  code: number;
  error: string;
};
