export interface OddFilter {
  league?: string;
  gameDate?: Date;
  homeTeamWinOdd?: {
    $gte?: number;
    $lte?: number;
  };
  drawOdd?: {
    $gte?: number;
    $lte?: number;
  };
  awayTeamWinOdd?: {
    $gte?: number;
    $lte?: number;
  };
}
