import React from "react";
import { useAppSelector } from "../../lib/hooks";
import { selectSummonerInfo } from "../../modules/summoner";
import { TierRank } from "../../lib/api/types";

interface PreviousTierItemProps {
  season: number;
  tier: string;
}

const PreviousTierItem: React.FC<PreviousTierItemProps> = ({
  season,
  tier,
}) => (
  <li className="tier-list-item">
    <strong>S{season}</strong>
    {tier}
  </li>
);

interface PreviousTierListProps {
  prevTiers: TierRank[];
}

const PreviousTierList: React.FC<PreviousTierListProps> = ({ prevTiers }) => {
  const items = prevTiers.map((tier, index) => (
    <PreviousTierItem key={index} tier={tier.string} season={tier.season!} />
  ));

  return <ol>{items}</ol>;
};

const SummonerProfile = () => {
  const summonerInfo = useAppSelector(selectSummonerInfo);

  if (!summonerInfo) {
    return <div>loading</div>;
  }

  return (
    <>
      <div>
        <PreviousTierList prevTiers={summonerInfo.summoner.previousTiers} />
      </div>
      <div>
        <div>
          <img
            width="120"
            height="120"
            src={summonerInfo.summoner.profileImageUrl}
            alt="tier mark"
          />
          <span>32</span>
        </div>
        <div>
          <h3>{summonerInfo.summoner.name}</h3>
          <p>
            레더 랭킹 {summonerInfo.summoner.ladderRank.rank.toLocaleString()}위
            (상위 {summonerInfo.summoner.ladderRank.rankPercentOfTop}%)
          </p>
        </div>
      </div>
    </>
  );
};

export default SummonerProfile;
