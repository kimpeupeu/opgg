import React from "react";
import { MostChampion } from "lib/api/types";
import SummaryContainer, {
  SummaryContent,
  SummaryItem,
  ChampionImage,
} from "./SummaryContainer";
import { pickKDAColor, pickWinRateColor } from "lib/utils/colorPickers";
import { calcKDA, calcTotalGames, calcWinRate } from "lib/utils/calcuator";

interface ChampionWinRateProfileProps {
  mostChampionsSummary: MostChampion[];
}

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

interface ChampionWinRateItemProps {
  mostChampionSummary: MostChampion;
}

const ChampionWinRateItem: React.FC<ChampionWinRateItemProps> = ({
  mostChampionSummary,
}) => {
  const totalGames = calcTotalGames(mostChampionSummary);
  const winRate = calcWinRate(mostChampionSummary);
  const kda = calcKDA(mostChampionSummary);

  return (
    <SummaryContainer>
      <ChampionImage
        src={mostChampionSummary.imageUrl}
        alt={mostChampionSummary.name}
      />
      <SummaryContent>
        <div>
          <SummaryItem>{mostChampionSummary.name}</SummaryItem>
          <SummaryItem caption>CS {mostChampionSummary.cs} (2.4)</SummaryItem>
        </div>
        <div>
          <SummaryItem color={pickKDAColor(kda === -1 ? 999 : kda)}>
            {kda} 평점
          </SummaryItem>
          <SummaryItem caption>CS {mostChampionSummary.cs} (2.4)</SummaryItem>
        </div>
        <div>
          <SummaryItem textAlign="right" color={pickWinRateColor(winRate)}>
            {winRate}%
          </SummaryItem>
          <SummaryItem textAlign="right" caption>
            {totalGames}게임
          </SummaryItem>
        </div>
      </SummaryContent>
    </SummaryContainer>
  );
};

export default ChampionWinRateProfile;
