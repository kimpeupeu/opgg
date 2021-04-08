import React from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { getMostInfo, selectMostInfo } from "../../../modules/mostInfo";
import { selectCurrentSummoner } from "../../../modules/common";
import ChampionWinRateProfile from "./ChampionWinRateProfile";
import RecentWinRateProfile from "./RecentWinRateProfile";

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
    <div>
      <div>
        <button
          type="button"
          className={selectedTab === "champion" ? "active" : ""}
          onClick={() => setSelectedTab("champion")}
        >
          챔피언 승률
        </button>
        <button
          type="button"
          className={selectedTab === "recent" ? "active" : ""}
          onClick={() => setSelectedTab("recent")}
        >
          7일간 랭크 승률
        </button>
      </div>
      {selectedTab === "champion" ? (
        <ChampionWinRateProfile mostChampionsSummary={mostInfo.champions} />
      ) : (
        <RecentWinRateProfile recentWinRateSummary={mostInfo.recentWinRate} />
      )}
    </div>
  );
};

export default WinRateProfileSection;
