import React from "react";
import Card from "components/commons/Card";
import styled from "styled-components";
import MatchSummary from "./MatchSummary";
import MatchHistoryList from "./MatchHistoryList";
import { useAppSelector } from "lib/hooks";
import { selectMatches } from "modules/matches";

const MatchHistory = () => {
  const matches = useAppSelector(selectMatches);
  const [matchType, setMatchType] = React.useState<
    "all" | "솔랭" | "자유 5:5 랭크"
  >("all");

  if (!matches) return null;

  return (
    <>
      <Card>
        <TabBar>
          <TabItem
            type="button"
            active={matchType === "all"}
            onClick={() => setMatchType("all")}
          >
            전체
          </TabItem>
          <TabItem
            type="button"
            active={matchType === "솔랭"}
            onClick={() => setMatchType("솔랭")}
          >
            솔로게임
          </TabItem>
          <TabItem
            type="button"
            active={matchType === "자유 5:5 랭크"}
            onClick={() => setMatchType("자유 5:5 랭크")}
          >
            자유랭크
          </TabItem>
        </TabBar>
        <MatchSummary
          matchSummary={matches.summary}
          championSummary={matches.champions}
          positionSummary={matches.positions}
        />
      </Card>
      <Card>
        <MatchHistoryList
          matches={
            matchType === "all"
              ? matches.games
              : matches.games.filter((item) => item.gameType === matchType)
          }
        />
      </Card>
    </>
  );
};

const TabBar = styled.div`
  display: flex;
  height: 44px;
`;

const TabItem = styled.a<{ active?: boolean }>`
  font-size: 12px;
  color: #555;
  padding: 10px 16px;
  font-weight: ${(props) => (props.active ? 700 : 400)};
  border-bottom: ${(props) => (props.active ? "2px solid #1f8ecd" : "")};
`;

TabItem.defaultProps = {
  active: false,
};

export default MatchHistory;
