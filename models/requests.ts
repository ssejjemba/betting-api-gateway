export interface Odd {
  id: number;
  league: string;
  home_team: string;
  away_team: string;
  game_date: string;
  home_team_win_odd: number;
  draw_odd: number;
  away_team_win_odd: number;
}

export interface GetOddsRequest {
  league: string;
  game_date: string;
}

export interface GetOddsResponse {
  code: number;
  message: string;
  odds: Odd[];
}

export interface CreateOddRequest {
  league: string;
  home_team: string;
  away_team: string;
  game_date: string;
  home_team_win_odd: number;
  draw_odd: number;
  away_team_win_odd: number;
}

export interface CreateOddResponse {
  code: number;
  message: string;
  odd: Odd | undefined;
}

export interface UpdateOddRequest {
  id: number;
  home_team_win_odd: number;
  draw_odd: number;
  away_team_win_odd: number;
}

export interface UpdateOddResponse {
  code: number;
  message: string;
  odd: Odd | undefined;
}

export interface DeleteOddRequest {
  id: number;
}

export interface DeleteOddResponse {
  code: number;
  message: string;
}
