export interface GameSummaryParams {
  wins: number;
  losses: number;
}

export interface ScoreSummaryParams {
  kills: number;
  assists: number;
  deaths: number;
}

export const calcTotalGames = (params: GameSummaryParams): number =>
  params.wins + params.losses;

export const calcWinRate = (params: GameSummaryParams) =>
  Math.round((params.wins / calcTotalGames(params)) * 100);

export const calcKDA = (params: ScoreSummaryParams) =>
  params.deaths === 0
    ? -1
    : Math.round(((params.kills + params.assists) / params.deaths) * 100) / 100;
