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

export interface ChampionSummary {
  id: number;
  key: string;
  name: string;
  imageUrl: string;
  games: number;
  kills: number;
  deaths: number;
  assists: number;
  wins: number;
  losses: number;
}

export interface MatchesDTO {
  champions: ChampionSummary[];
  games: GameInfo[];
  positions: Position[];
  summary: Summary;
}

// most info

export interface ChampionWinRate {
  id: number;
  imageUrl: string;
  key: string;
  losses: number;
  name: string;
  wins: number;
}

export interface MostChampion {
  assists: number;
  cs: number;
  deaths: number;
  games: number;
  id: number;
  imageUrl: string;
  key: string;
  kills: number;
  losses: number;
  name: string;
  rank: number;
  wins: number;
}

export interface MostInfoDTO {
  champions: MostChampion[];
  recentWinRate: ChampionWinRate[];
}
