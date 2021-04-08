import React from "react";
import styled from "styled-components";
import { SummonerDTO } from "../../../lib/api/types";
import summonerInstant from "../../../modules/summonerInstant";

export interface SummonerInstantProps {
  summonerInfo: SummonerDTO;
}

const SummonerInstant: React.FC<SummonerInstantProps> = ({ summonerInfo }) => (
  <Wrapper>
    <ProfileImage src={summonerInfo.summoner.profileImageUrl} />
    <div>
      <p>{summonerInfo.summoner.name}</p>
      <LeagueInfo>
        <p>{summonerInfo.summoner.leagues[0].tierRank.tier}</p>
        <p>&middot;</p>
        <p>{summonerInfo.summoner.leagues[0].tierRank.lp}</p>
      </LeagueInfo>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 12px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 12px;
`;

const LeagueInfo = styled.div`
  display: flex;
  color: #333;
`;

export default SummonerInstant;
