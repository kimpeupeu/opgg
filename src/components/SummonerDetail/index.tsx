import React from "react";
import SearchBar from "./SearchBar";
import SummonerSummary from "./SummonerSummary";
import SummonerProfile from "./SummonerProfile";
import MatchHistory from "./MatchHistory";

const SummonerDetail = () => (
  <div>
    <SearchBar />
    <SummonerProfile />
    <div>
      <SummonerSummary />
      <MatchHistory />
    </div>
  </div>
);

export default SummonerDetail;
