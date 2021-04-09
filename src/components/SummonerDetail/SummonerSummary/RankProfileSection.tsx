import React from "react";
import { useAppSelector } from "lib/hooks";
import { selectSummonerInfo } from "modules/summoner";
import RankProfile from "./RankProfile";
import styled from "styled-components";

const RankProfileSection = () => {
  const summonerInfo = useAppSelector(selectSummonerInfo);

  if (!summonerInfo) {
    return null;
  }

  return (
    <Wrapper>
      <RankProfile league={summonerInfo.summoner.leagues[0]} />
      <RankProfile league={summonerInfo.summoner.leagues[1]} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  > * {
    margin-bottom: 10px;

    :last-child {
      margin-bottom: 0;
    }
  }
`;

export default RankProfileSection;
