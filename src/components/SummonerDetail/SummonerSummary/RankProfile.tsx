import React from "react";
import { League } from "../../../lib/api/types";

export interface RankProfileProps {
  league: League;
}

const RankProfile: React.FC<RankProfileProps> = ({ league }) => {
  const totalPlays = league.wins + league.losses;
  const winRate = Math.round((league.wins / totalPlays) * 100);

  return (
    <div>
      <img src={league.tierRank.imageUrl} alt="tier mark" />
      <div>
        <p>{league.tierRank.name}</p>
        <p>탑 {totalPlays}</p>
        <p>{league.tierRank.tier}</p>
        <p>
          <strong>{league.tierRank.tierRankPoint}LP</strong> / {league.wins}승{" "}
          승률 {league.losses}패
        </p>
        <p>{winRate}%</p>
      </div>
    </div>
  );
};

export default RankProfile;
