import React from "react";
import styled from "styled-components";
import { SummonerDTO } from "lib/api/types";
import { useAppDispatch } from "lib/hooks";
import { searchSummoner } from "modules/common";

export interface SummonerInstantProps {
  summonerInfo: SummonerDTO;
}

const SummonerInstant: React.FC<SummonerInstantProps> = ({ summonerInfo }) => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper
      onClick={() => dispatch(searchSummoner(summonerInfo.summoner.name))}
    >
      <ProfileImage src={summonerInfo.summoner.profileImageUrl} />
      <ProfileContent>
        <SummonerName>{summonerInfo.summoner.name}</SummonerName>
        <LeagueInfo>
          <p>{summonerInfo.summoner.leagues[0].tierRank.tier}</p>
          <p>&middot;</p>
          <p>{summonerInfo.summoner.leagues[0].tierRank.lp}</p>
        </LeagueInfo>
      </ProfileContent>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  margin: 4px 0;

  :hover {
    background-color: #d4e1ff;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 12px;
`;

const LeagueInfo = styled.div`
  display: flex;

  p {
    color: #777;
  }
`;

const ProfileContent = styled.div`
  font-size: 14px;
`;

const SummonerName = styled.p`
  color: #ff781f;
`;

export default SummonerInstant;
