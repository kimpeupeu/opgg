import React from "react";
import { ChampionSummary } from "lib/api/types";
import { calcKDA, calcWinRate } from "lib/utils/calcuator";
import styled from "styled-components";
import { pickKDAColor, pickWinRateColor } from "lib/utils/colorPickers";

export interface ChampionSummaryProps {
  summaries: ChampionSummary[];
}

const ChampionSummaryList: React.FC<ChampionSummaryProps> = ({ summaries }) => (
  <List>
    {summaries.map((summary) => (
      <ChampionSummaryItem key={summary.id} summary={summary} />
    ))}
  </List>
);

const List = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  padding: 16px 0;
`;

interface ChampionSummaryItemProps {
  summary: ChampionSummary;
}

const ChampionSummaryItem: React.FC<ChampionSummaryItemProps> = ({
  summary,
}) => {
  const winRate = calcWinRate(summary);
  const kda = calcKDA(summary);

  return (
    <Wrapper>
      <ChampionImage src={summary.imageUrl} alt="Champion" />
      <div>
        <ChampionName>{summary.name}</ChampionName>
        <MatchSummary>
          <MatchSummaryText color={pickWinRateColor(winRate)}>
            {winRate}%
          </MatchSummaryText>
          <MatchSummaryText>
            ({summary.wins}승 {summary.losses}패)
          </MatchSummaryText>{" "}
          &#124;{" "}
          <KDAText color={pickKDAColor(kda)}>
            {kda === -1 ? "Perfact" : kda} 평점
          </KDAText>
        </MatchSummary>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 16px;

  :last-child {
    margin-bottom: 0;
  }
`;

const ChampionImage = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 8px;
`;

const ChampionName = styled.p`
  font-size: 14px;
  color: #333;
`;

const MatchSummary = styled.div`
  display: flex;
  font-size: 11px;
  color: #555;
`;

const MatchSummaryText = styled.p`
  font-size: 11px;
  color: ${(props) => (props.color ? props.color : "#333")};
  margin-right: 6px;
`;

const KDAText = styled.p`
  margin-left: 6px;
`;

export default ChampionSummaryList;
