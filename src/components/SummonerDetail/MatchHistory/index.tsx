import React from "react";
import Card from "components/commons/Card";
import styled from "styled-components";
import MatchSummary from "./MatchSummary";
import MatchHistoryList from "./MatchHistoryList";
import { useAppSelector } from "lib/hooks";
import { selectMatches } from "modules/matches";

const MatchHistory = () => {
  const matches = useAppSelector(selectMatches);

  if (!matches) return null;

  return (
    <>
      <Card>
        <TabBar>
          <TabItem type="button">전체</TabItem>
          <TabItem type="button">솔로게임</TabItem>
          <TabItem type="button">자유랭크</TabItem>
        </TabBar>
        <MatchSummary
          matchSummary={matches.summary}
          championSummary={matches.champions}
          positionSummary={matches.positions}
        />
      </Card>
      <Card>
        <MatchHistoryList />
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
  background-color: ${(props) => (props.active ? "#f2f2f2" : "#ededed")};
  color: #5e5e5e;
  border: ${(props) => (props.active ? "none" : "1px solid #cdd2d2")};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${(props) => (props.active ? 700 : 400)};
  box-sizing: border-box;
`;

TabItem.defaultProps = {
  active: false,
};

export default MatchHistory;
