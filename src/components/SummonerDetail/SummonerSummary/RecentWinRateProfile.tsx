import React from "react";
import { ChampionWinRate } from "../../../lib/api/types";

interface RecentWinRatePorfileProps {
  recentWinRateSummary: ChampionWinRate[];
}

interface RecentWinRateItemProps {
  summary: ChampionWinRate;
}

const RecentWinRateItem: React.FC<RecentWinRateItemProps> = ({ summary }) => {
  const totalGames = summary.wins + summary.losses;
  const winRate = Math.round((summary.wins / totalGames) * 100);

  return (
    <div>
      <img src={summary.imageUrl} alt={summary.name} />
      <p>{summary.name}</p>
      <p>{winRate}</p>
      <div>
        <p>{summary.wins}</p>
        <p>{summary.losses}</p>
      </div>
    </div>
  );
};

const RecentWinRateProfile: React.FC<RecentWinRatePorfileProps> = ({
  recentWinRateSummary,
}) => (
  <div>
    {recentWinRateSummary.map((summary, index) => (
      <RecentWinRateItem key={index} summary={summary} />
    ))}
  </div>
);

export default RecentWinRateProfile;
