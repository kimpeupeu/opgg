import Card from "components/commons/Card";
import { GameInfo } from "lib/api/types";
import {
  toLocalTimeLengthString,
  calcDateStringFromNow,
} from "lib/utils/convertor";
import React from "react";
import styled from "styled-components";
import Item from "./Item";

export interface MatchHistoryItemProps {
  match: GameInfo;
}

const MatchHistoryItem: React.FC<MatchHistoryItemProps> = ({ match }) => {
  const accessory = match.items.slice(-1).map((item) => item.imageUrl);
  let items = match.items.slice(0, -1).map((item, index) => item.imageUrl);

  while (items.length < 6) {
    items.push("");
  }

  items = [...items.slice(0, 3), ...accessory, ...items.slice(3)];
  items.push(
    match.isWin ? "/images/icon-buildblue-p.png" : "/images/icon-buildred-p.png"
  );

  return (
    <Wrapper win={match.isWin}>
      <GameStats>
        <GameType>{match.gameType}</GameType>
        <GameDate>{calcDateStringFromNow(match.createDate)}</GameDate>
        <GameStatsDivider win={match.isWin} />
        <GameResult win={match.isWin}>
          {match.isWin ? "승리" : "패배"}
        </GameResult>
        <GamePlayTime>{toLocalTimeLengthString(match.gameLength)}</GamePlayTime>
      </GameStats>
      <GameSettings>
        <GameSettingsTitle>챔피언 이름</GameSettingsTitle>
        <GameSettingsContent>
          <ChampionImage src={match.champion.imageUrl} />
          <SpellList>
            <SpellImage src={match.spells[0].imageUrl} />
            <SpellImage src={match.spells[1].imageUrl} />
          </SpellList>
          <PerkList>
            <PerkImage src={match.peak[0]} />
            <PerkImage src={match.peak[1]} />
          </PerkList>
        </GameSettingsContent>
      </GameSettings>
      <KDAStats>
        <KDAScore>
          <KDAScoreText>{match.stats.general.kill}</KDAScoreText>
          <KDAScoreTextDivider>&nbsp;/&nbsp;</KDAScoreTextDivider>
          <DeathScoreText>{match.stats.general.assist}</DeathScoreText>
          <KDAScoreTextDivider>&nbsp;/&nbsp;</KDAScoreTextDivider>
          <KDAScoreText>{match.stats.general.death}</KDAScoreText>
        </KDAScore>
        <KDAText>
          <strong>{match.stats.general.kdaString}</strong> 평점
        </KDAText>
        <OpScoreBadgeList>
          {match.stats.general.opScoreBadge && (
            <OpScoreBadge>{match.stats.general.opScoreBadge}</OpScoreBadge>
          )}
        </OpScoreBadgeList>
      </KDAStats>
      <PlayStats>
        <ChampionLevel>레벨{match.champion.level}</ChampionLevel>
        <CreepScore>
          {match.stats.general.cs} ({match.stats.general.csPerMin}) CS
        </CreepScore>
        <ContribueForKills>
          킬관여 {match.stats.general.contributionForKillRate}
        </ContribueForKills>
      </PlayStats>
      <ItemStats>
        <ItemList>
          {items.map((item, index) => (
            <Item key={`${match.gameId}_item_${index}`} imgSrc={item} />
          ))}
        </ItemList>
        <WardStats>
          <WardImage
            src={`/images/icon-ward-${match.isWin ? "blue" : "red"}.png`}
          />
          <WardCount>제어 와드 {match.stats.ward.visionWardsBought}</WardCount>
        </WardStats>
      </ItemStats>
    </Wrapper>
  );
};

const Wrapper = styled(Card)<{ win?: boolean }>`
  display: flex;
  background-color: ${(props) => (props.win ? "#b0ceea" : "#d6b5b2")};
  border: ${(props) => (props.win ? "1px solid #a1b8cd" : "1px solid #c0aba8")};
  margin-bottom: 8px;

  :last-child {
    margin-bottom: 0;
  }
`;

const GameStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 13px 0;
  width: 70px;
`;

const GameType = styled.p`
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 4px;
`;
const GameDate = styled.p`
  font-size: 11px;
  margin-bottom: 4px;
`;
const GameResult = styled.p<{ win?: boolean }>`
  font-size: 11px;
  font-weight: 700;
  color: ${(props) => (props.win ? "#2c709b" : "#d0021b")};
  margin-bottom: 4px;
`;

const GameStatsDivider = styled.div<{ win?: boolean }>`
  width: 27px;
  border-bottom: 1px solid ${(props) => (props.win ? "#94b9d6" : "#d0a6a5")};
  margin-bottom: 4px;
`;

const GamePlayTime = styled.p`
  font-size: 11px;
`;

const GameSettings = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

const GameSettingsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

const GameSettingsTitle = styled.h3`
  font-weight: 400;
  font-size: 11px;
  color: #555;
  letter-spacing: -0.05rem;
`;

const ChampionImage = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  margin-right: 6px;
`;

const SpellList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SpellImage = styled.img`
  width: 22px;
  height: 22px;
  margin-bottom: 2px;
`;

const PerkList = styled.div`
  display: flex;
  flex-direction: column;
`;
const PerkImage = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
`;

const KDAStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 130px;
`;

const KDAScore = styled.div`
  display: flex;
  margin-bottom: 6px;
`;

const KDAScoreText = styled.p`
  display: flex;
  font-size: 15px;
  color: #555e5e;
  font-weight: 700;
`;

const KDAScoreTextDivider = styled(KDAScoreText)`
  font-weight: 400;
  color: #948e8d;
`;

const DeathScoreText = styled(KDAScoreText)`
  color: #c6443e;
`;

const KDAText = styled.p`
  font-size: 11px;
  color: #555e5e;
  margin-bottom: 6px;
`;

const OpScoreBadgeList = styled.div``;
const OpScoreBadge = styled.p`
  border-radius: 9px;
  background-color: #8c51c5;
  color: white;
  font-size: 10px;
  padding: 3px 5px;
  letter-spacing: 0.05rem;
`;

const PlayStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PlayStatsItem = styled.p`
  font-size: 11px;
  margin-bottom: 6px;
  color: #555e5e;

  :last-child {
    margin-bottom: 0;
  }
`;

const ChampionLevel = styled(PlayStatsItem)``;
const CreepScore = styled(PlayStatsItem)``;
const ContribueForKills = styled(PlayStatsItem)`
  color: #d0021b;
`;

const ItemStats = styled.div`
  width: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemList = styled.div`
  width: 96px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
`;

const WardStats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WardImage = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;
const WardCount = styled.p`
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MatchHistoryItem;
