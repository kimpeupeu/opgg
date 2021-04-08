// Summoner

export interface LadderRank {
  rank: number;
  rankPercentOfTop: number;
}

export interface TierRank {
  division: string;
  imageUrl: string;
  lp: number;
  name: string;
  season?: number;
  shortString: string;
  string: string;
  tier: string;
  tierDivision: string;
  tierRankPoint: number;
}

export interface League {
  hasResults: boolean;
  wins: number;
  losses: number;
  tierRank: TierRank;
}

export interface Summoner {
  ladderRank: LadderRank;
  leagues: League[];
  level: number;
  name: string;
  previousTiers: TierRank[];
  profileBackgroundImageUrl: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  url: string;
}

export interface SummonerDTO {
  summoner: Summoner;
}

// Matches

export interface ImageObj {
  imageUrl: string;
}

export interface Champion {
  imageUrl: string;
  level: number;
}

export interface MapInfo {
  imageUrl: string;
  mapId: number;
}

export interface General {
  assist: number;
  contributionForKillRate: string;
  cs: number;
  csPerMin: number;
  death: number;
  goldEarned: number;
  kdaString: string;
  kill: number;
  largestMultiKillString: string;
  opScoreBadge: string;
  totalDamageDealtToChampions: number;
}

export interface Ward {
  sightWardsBought: number;
  visionWardsBought: number;
}

export interface GameInfoStats {
  general: General;
}

export interface GameInfo {
  champion: Champion;
  createDate: number;
  gameId: string;
  gameLength: number;
  gameType: string;
  isWin: boolean;
  items: ImageObj[];
  mapInfo: MapInfo;
  mmr: number;
  needRenew: boolean;
  peak: string[];
  spells: ImageObj[];
  stats: GameInfoStats;
  summonerId: string;
  summonername: string;
  tierRankShort: string;
}

export interface Position {
  games: number;
  losses: number;
  position: string;
  positionName: string;
  wins: number;
}

export interface Summary {
  assists: number;
  deaths: number;
  kills: number;
  losses: number;
  wins: number;
}

export interface MatchesDTO {
  champions: Champion[];
  games: GameInfo[];
  positions: Position[];
  summary: Summary;
}
