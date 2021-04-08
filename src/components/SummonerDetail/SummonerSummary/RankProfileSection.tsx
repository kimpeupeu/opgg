import React from "react";
import { useAppSelector } from "../../../lib/hooks";
import { selectSummonerInfo } from "../../../modules/api/summoner";
import RankProfile from "./RankProfile";

const RankProfileSection = () => {
  const summonerInfo = useAppSelector(selectSummonerInfo);

  return (
    <div>
      <RankProfile league={summonerInfo.summoner.leagues[0]} />
      <RankProfile league={summonerInfo.summoner.leagues[1]} />
    </div>
  );
};

export default RankProfileSection;
