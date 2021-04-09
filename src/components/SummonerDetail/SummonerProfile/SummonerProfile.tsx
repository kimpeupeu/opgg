import React from "react";
import { useAppSelector } from "lib/hooks";
import { selectSummonerInfo } from "modules/summoner";
import PreviousTierList from "./PreviousTierList";
import styled from "styled-components";

const SummonerProfile = () => {
  const summonerInfo = useAppSelector(selectSummonerInfo);

  if (!summonerInfo) {
    return <div>loading</div>;
  }

  return (
    <Wrapper>
      <PreviousTierList prevTiers={summonerInfo.summoner.previousTiers} />
      <SummonerInfo>
        <ProfileImageWrapper>
          <ProfileImage
            src={summonerInfo.summoner.profileImageUrl}
            alt="tier mark"
          />
          <ProfileImageCaption>32</ProfileImageCaption>
        </ProfileImageWrapper>
        <Content>
          <SummonerName>{summonerInfo.summoner.name}</SummonerName>
          <SummonerLadder>
            레더 랭킹 {summonerInfo.summoner.ladderRank.rank.toLocaleString()}위
            (상위 {summonerInfo.summoner.ladderRank.rankPercentOfTop}%)
          </SummonerLadder>
        </Content>
      </SummonerInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border: 3px solid #aaa;
  margin-right: 22px;
`;

const ProfileImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const ProfileImageCaption = styled.span`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  background-color: #333;
  padding: 2px 8px;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.05rem;
  border-radius: 4px;
  border: 1px solid #eabf5e;
  color: #eabf5e;
`;

const SummonerInfo = styled.div`
  display: flex;
`;

const Content = styled.div``;

const SummonerName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #242929;
`;

const SummonerLadder = styled.p`
  font-size: 11px;
  color: #555e55;
`;

export default SummonerProfile;
