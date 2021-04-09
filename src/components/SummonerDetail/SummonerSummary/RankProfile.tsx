import React from "react";
import { League } from "lib/api/types";
import Card from "components/commons/Card";
import styled from "styled-components";

function romanToNumber(roman: string) {
  const romanLetters = ["", "i", "ii", "iii", "iv", "v"];
  const number = romanLetters.indexOf(roman.toLowerCase());
  return number === -1 ? 0 : number;
}

export interface RankProfileProps {
  league: League;
}

const RankProfile: React.FC<RankProfileProps> = ({ league }) => {
  const totalPlays = league.wins + league.losses;
  const winRate = Math.round((league.wins / totalPlays) * 100);

  return (
    <Wrapper>
      <TierImage src={league.tierRank.imageUrl} alt="tier mark" />
      <SummaryContent>
        <RankName>{league.tierRank.name}</RankName>
        <TotalPlay>탑 (총 {totalPlays}게임)</TotalPlay>
        <TierName>
          {league.tierRank.tier} {romanToNumber(league.tierRank.division)}
        </TierName>
        <WinSummary>
          <strong>{league.tierRank.tierRankPoint}LP</strong> / {league.wins}승{" "}
          {league.losses}패
        </WinSummary>
        <WinRate>{winRate}%</WinRate>
      </SummaryContent>
    </Wrapper>
  );
};

const Wrapper = styled(Card)`
  display: flex;
  padding: 10px;
`;

const TierImage = styled.img`
  width: 100px;
  height: 100px;
`;

const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const RankName = styled.p`
  font-size: 11px;
  color: #879292;
`;

const TotalPlay = styled.p`
  font-size: 12px;
  color: #353a3a;
`;

const TierName = styled.p`
  font-size: 15px;
  color: #1f8ecd;
`;

const WinSummary = styled.p`
  font-size: 12px;
  color: #879292;
`;

const WinRate = styled.p`
  font-size: 12px;
  color: #879292;
`;

export default RankProfile;
