import React from "react";
import { MostChampion } from "../../../lib/api/types";

interface ChampionWinRateProfileProps {
  mostChampionsSummary: MostChampion[];
}

interface ChampionWinRateItemProps {
  mostChampionSummary: MostChampion;
}

const ChampionWinRateItem: React.FC<ChampionWinRateItemProps> = ({
  mostChampionSummary,
}) => {
  const kda =
    mostChampionSummary.deaths === 0
      ? "Perfact"
      : (mostChampionSummary.kills + mostChampionSummary.assists) /
        mostChampionSummary.deaths;
  const totalGames = mostChampionSummary.wins + mostChampionSummary.losses;
  const winRate = Math.round((mostChampionSummary.wins / totalGames) * 100);

  return (
    <div>
      <img src={mostChampionSummary.imageUrl} alt={mostChampionSummary.name} />
      <div>
        <p>{mostChampionSummary.name}</p>
        <p>CS {mostChampionSummary.cs} (2.4)</p>
      </div>
      <div>
        <p>{kda}</p>
        <p>CS {mostChampionSummary.cs} (2.4)</p>
      </div>
      <div>
        <p>{winRate}</p>
        <p>{totalGames}게임</p>
      </div>
    </div>
  );
};

const ChampionWinRateProfile: React.FC<ChampionWinRateProfileProps> = ({
  mostChampionsSummary,
}) => {
  return (
    <div>
      {mostChampionsSummary.map((mostChampionSummary, index) => (
        <ChampionWinRateItem
          key={index}
          mostChampionSummary={mostChampionSummary}
        />
      ))}
    </div>
  );
};

export default ChampionWinRateProfile;
