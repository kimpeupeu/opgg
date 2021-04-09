import React from "react";
import { Position } from "lib/api/types";
import { calcWinRate } from "lib/utils/calcuator";
import styled from "styled-components";

interface PositionSummaryItemProps {
  summary: Position;
}

interface PostionSummaryListProps {
  summaries: Position[];
}

const PositionSummaryList: React.FC<PostionSummaryListProps> = ({
  summaries,
}) => (
  <List>
    <Title>선호 포지션 (랭크)</Title>
    {summaries.map((summary, index) => (
      <PositionSummaryItem key={index} summary={summary} />
    ))}
  </List>
);

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
`;

const Title = styled.h5`
  font-weight: 400;
  color: #666;
  font-size: 12px;
  margin-bottom: 20px;
`;

function getPositionImgSrc(positionName: string) {
  return `/images/icon-mostposition-${positionName.toLowerCase()}.png`;
}

const PositionSummaryItem: React.FC<PositionSummaryItemProps> = ({
  summary,
}) => {
  return (
    <Item>
      <PositionImage
        src={getPositionImgSrc(summary.position)}
        alt="Most position"
      />
      <SummaryBlock>
        <PositionName>{summary.positionName}</PositionName>
        <SummaryContent>
          <SummaryContentItem color="#1f8ecd">30%</SummaryContentItem>
          <SummaryContentItem color="#cdd2d2">|</SummaryContentItem>
          <SummaryContentItem color="#666666">
            승률 {calcWinRate(summary)}%
          </SummaryContentItem>
        </SummaryContent>
      </SummaryBlock>
    </Item>
  );
};

const Item = styled.div`
  display: flex;
  margin-bottom: 24px;
  :last-child {
    margin-bottom: 0;
  }
`;

const PositionImage = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;

const SummaryBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const PositionName = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`;

const SummaryContent = styled.div`
  display: flex;
`;

const SummaryContentItem = styled.p`
  font-size: 11px;
  margin-right: 8px;
  letter-spacing: 0.02rem;
  color: ${(props) => props?.color};
`;

export default PositionSummaryList;
