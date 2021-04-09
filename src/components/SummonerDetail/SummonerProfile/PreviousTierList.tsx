import React from "react";
import { TierRank } from "lib/api/types";
import styled from "styled-components";

interface PreviousTierItemProps {
  season: number;
  tier: string;
}

const PreviousTierItem: React.FC<PreviousTierItemProps> = ({
  season,
  tier,
}) => (
  <IterItem>
    <Seanson>S{season}</Seanson> {tier}
  </IterItem>
);

interface PreviousTierListProps {
  prevTiers: TierRank[];
}

const PreviousTierList: React.FC<PreviousTierListProps> = ({ prevTiers }) => {
  const items = prevTiers
    .map((tier, index) => (
      <PreviousTierItem key={index} tier={tier.tier} season={tier.season!} />
    ))
    .reverse();

  return <IterList>{items}</IterList>;
};

const IterList = styled.ol`
  display: flex;
  padding: 8px 0;
`;

const IterItem = styled.li`
  font-size: 11px;
  background-color: #e0e3e3;
  border: 1px solid #d0d3d4;
  border-radius: 2px;
  margin-right: 8px;
  padding: 2px 4px;

  :last-child {
    margin-right: 0;
  }
`;

const Seanson = styled.strong``;

export default PreviousTierList;
