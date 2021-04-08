import React from "react";
import SearchBar from "./SearchBar";
import SummonerSummary from "./SummonerSummary";
import SummonerProfile from "./SummonerProfile";
import MatchHistory from "./MatchHistory";

const SummonerDetail = () => (
  <>
    <SummonerProfile />
    <div>
      <SummonerSummary />
      <MatchHistory />
    </div>
  </>
);

export default SummonerDetail;
