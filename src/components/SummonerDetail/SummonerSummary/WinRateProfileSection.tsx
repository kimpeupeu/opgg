import React from "react";
import { useAppDispatch, useAppSelector } from "lib/hooks";
import { getMostInfo, selectMostInfo } from "modules/mostInfo";
import { selectCurrentSummoner } from "modules/common";
import ChampionWinRateProfile from "./ChampionWinRateProfile";
import RecentWinRateProfile from "./RecentWinRateProfile";
import Card from "components/commons/Card";
import styled from "styled-components";

const WinRateProfileSection = () => {
  const mostInfo = useAppSelector(selectMostInfo);
  const currentSummoner = useAppSelector(selectCurrentSummoner);
  const dispatch = useAppDispatch();
  const [selectedTab, setSelectedTab] = React.useState<"champion" | "recent">(
    "champion"
  );

  React.useEffect(() => {
    if (currentSummoner) dispatch(getMostInfo(currentSummoner));
  }, [currentSummoner, dispatch]);

  if (!mostInfo) {
    return null;
  }

  return (
    <Card>
      <TabBar>
        <TabItem
          type="button"
          active={selectedTab === "champion"}
          onClick={() => setSelectedTab("champion")}
        >
          챔피언 승률
        </TabItem>
        <TabItem
          type="button"
          active={selectedTab === "recent"}
          onClick={() => setSelectedTab("recent")}
        >
          7일간 랭크 승률
        </TabItem>
      </TabBar>
      {selectedTab === "champion" ? (
        <ChampionWinRateProfile mostChampionsSummary={mostInfo.champions} />
      ) : (
        <RecentWinRateProfile recentWinRateSummary={mostInfo.recentWinRate} />
      )}
    </Card>
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

export default WinRateProfileSection;
