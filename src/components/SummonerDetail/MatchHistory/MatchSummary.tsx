import React from "react";
import { ChampionSummary, Position, Summary } from "lib/api/types";
import { calcKDA, calcTotalGames, calcWinRate } from "lib/utils/calcuator";
import styled from "styled-components";
import PositionSummaryList from "./PositionSummaryList";
import ChampionSummaryList from "./ChampionSummaryList";
import { pickKDAColor } from "lib/utils/colorPickers";

export interface MatchSummaryProps {
  matchSummary: Summary;
  championSummary: ChampionSummary[];
  positionSummary: Position[];
}

const MatchSummary: React.FC<MatchSummaryProps> = ({
  matchSummary,
  championSummary,
  positionSummary,
}) => {
  const totalGames = calcTotalGames(matchSummary);
  const winRate = calcWinRate(matchSummary);
  const kda = calcKDA(matchSummary);

  return (
    <Wrapper>
      <MatchesSummaryItem>
        <WinRateSummary>
          <MatchScoreText>
            {totalGames}전 {matchSummary.wins}승 {matchSummary.losses}패
          </MatchScoreText>
          <WinRateText>{winRate}%</WinRateText>
        </WinRateSummary>
        <KDAScoreSummary>
          <KDAScoreTextBlock>
            <KDAScoreText>{matchSummary.kills}</KDAScoreText>
            <DeathScoreText>{matchSummary.deaths}</DeathScoreText>
            <KDAScoreText>{matchSummary.assists}</KDAScoreText>
          </KDAScoreTextBlock>
          <KDAScoreTextBlock>
            <KDAText color={pickKDAColor(kda)}>
              {kda === -1 ? "Perfact" : `${kda}:1`}
            </KDAText>
            <KillParticipationText>(58%)</KillParticipationText>
          </KDAScoreTextBlock>
        </KDAScoreSummary>
      </MatchesSummaryItem>
      <Divider />
      <ChampionSummaryList summaries={championSummary} />
      <Divider />
      <PositionSummaryList summaries={positionSummary} />
    </Wrapper>
  );
};

const Divider = styled.div`
  border-right: 1px solid #cdd2d2;
  border-collapse: collapse;
  margin: 0 24px;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 0 24px;
`;

const MatchesSummaryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WinRateSummary = styled.div`
  margin-right: 35px;
`;

const MatchScoreText = styled.p`
  font-size: 12px;
  color: #666;

  display: flex;
  justify-content: center;
`;

const WinRateText = styled.p`
  font-size: 14px;
  color: #555;
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

const KDAScoreSummary = styled.div`
  display: flex;
  flex-direction: column;
`;

const KDAScoreTextBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

const KDAScoreText = styled.p`
  display: flex;
  font-size: 11px;
  color: #333;
  font-weight: 700;
  margin-right: 2px;

  :after {
    margin-left: 2px;
    content: "/";
  }

  :last-child&:after {
    content: none;
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }
`;

const DeathScoreText = styled(KDAScoreText)`
  color: #c6443e;
`;

const KDAText = styled.p`
  font-size: 16px;
  color: ${(props) => props.color};
  font-weight: 700;
`;

const KillParticipationText = styled(KDAText)`
  color: #c6443e;
`;

export default MatchSummary;
