export interface CreateOddsResponse {
  status: number;
  error: string[];
  id: number;
}

export interface OddData {
  id: number;
  league: string;
  homeTeam: string;
  awayTeam: string;
  homeTeamWinOdds: number;
  awayTeamWinOdds: number;
  drawOdds: number;
  gameDate: string;
}

export interface FindLeagueOddsRequest {
  league: string;
  gameDate: string;
}

export interface FindLeagueOddsResponse {
  status: number;
  error: string[];
  data: OddData[];
}

export interface UpdateGameOddsRequest {
  id: number;
  homeTeamWinOdds: number;
  awayTeamWinOdds: number;
  drawOdds: number;
}

export interface UpdateGameOddsResponse {
  status: number;
  error: string[];
}

export interface DeleteGameOddsRequest {
  id: number;
}

export interface DeleteGameOddsResponse {
  status: number;
  error: string[];
}
