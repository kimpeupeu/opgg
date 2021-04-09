import React from "react";
import { ChampionWinRate } from "lib/api/types";
import styled from "styled-components";
import SummaryContainer, {
  SummaryContent,
  SummaryItem,
  ChampionImage,
} from "./SummaryContainer";
import { calcWinRate } from "lib/utils/calcuator";

interface RecentWinRatePorfileProps {
  recentWinRateSummary: ChampionWinRate[];
}

const RecentWinRateProfile: React.FC<RecentWinRatePorfileProps> = ({
  recentWinRateSummary,
}) => (
  <div>
    {recentWinRateSummary.map((summary, index) => (
      <RecentWinRateItem key={index} summary={summary} />
    ))}
  </div>
);

interface RecentWinRateItemProps {
  summary: ChampionWinRate;
}

const RecentWinRateItem: React.FC<RecentWinRateItemProps> = ({ summary }) => {
  const winRate = calcWinRate(summary);

  return (
    <SummaryContainer>
      <ChampionImage src={summary.imageUrl} alt={summary.name} />
      <SummaryContent>
        <SummaryItem>{summary.name}</SummaryItem>
        <SummaryItem caption textAlign="right">
          {winRate}%
        </SummaryItem>
        <ChartContainer>
          <WinsChart flex={summary.wins}>{summary.wins}승</WinsChart>
          <LossesChart flex={summary.losses}>{summary.losses}패</LossesChart>
        </ChartContainer>
      </SummaryContent>
    </SummaryContainer>
  );
};

const ChartContainer = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: #333;
  overflow: hidden;
  align-items: center;
  height: 24px;
  width: 120px;
`;

interface ChartProps {
  flex?: number;
}

const Chart = styled.div<ChartProps>`
  flex: ${(props) => props.flex};
  color: #fff;
  font-size: 12px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 2px;
`;

Chart.defaultProps = {
  flex: 1,
};

const WinsChart = styled(Chart)`
  background-color: #1f8ecd;
`;
const LossesChart = styled(Chart)`
  background-color: #ee5a52;
  justify-content: flex-end;
`;

export default RecentWinRateProfile;
