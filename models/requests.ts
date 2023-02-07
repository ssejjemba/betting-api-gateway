export enum ErrorCode {
  OK = 0,
  NOT_FOUND = 1,
  INVALID_REQUEST = 2,
  INTERNAL_ERROR = 3,
  UNRECOGNIZED = -1,
}

export interface Error {
  code: ErrorCode;
  message: string;
}

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
  error: Error | undefined;
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
  error: Error | undefined;
  odd: Odd | undefined;
}

export interface UpdateOddRequest {
  id: number;
  home_team_win_odd: number;
  draw_odd: number;
  away_team_win_odd: number;
}

export interface UpdateOddResponse {
  error: Error | undefined;
  odd: Odd | undefined;
}

export interface DeleteOddRequest {
  id: number;
}

export interface DeleteOddResponse {
  error: Error | undefined;
  success: boolean;
}
