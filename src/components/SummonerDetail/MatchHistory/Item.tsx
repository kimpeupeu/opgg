import React from "react";
import styled from "styled-components";
import path from "path";
import { ItemDB } from "lib/api";

export interface ItemProps {
  imgSrc?: string;
}

function removeTags(strHtml: string) {
  return strHtml.replace(/(<([^>]+)>)/gi, "");
}

const Item: React.FC<ItemProps> = ({ imgSrc }) => {
  const [hover, setHover] = React.useState(false);
  if (!imgSrc) {
    return <ItemWrappper></ItemWrappper>;
  }
  const itemNum = imgSrc ? path.basename(imgSrc).split(".")[0] : null;

  const data = itemNum && ItemDB.data[itemNum];

  return (
    <ItemWrappper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {imgSrc && <ItemImage src={imgSrc} />}
      {hover && data && (
        <ItemInfoDropDown>
          <ItemName>{data.name}</ItemName>
          <ItemDescription>{removeTags(data.description)}</ItemDescription>
          <ItemGold>{`${data.gold.total}(${data.gold.base})`}</ItemGold>
        </ItemInfoDropDown>
      )}
    </ItemWrappper>
  );
};

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ItemWrappper = styled.div`
  position: relative;
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 2px;
  margin-right: 2px;
  margin-bottom: 2px;
  background-color: ${(props) => (props.children ? "" : "rgba(0, 0, 0, 0.3)")};
`;

const ItemInfoDropDown = styled.div`
  position: absolute;
  width: 260px;
  background-color: #222727;
  z-index: 99;
  padding: 10px;
`;

const ItemName = styled.h3`
  color: #00cfbf;
  font-size: 11px;
  margin-bottom: 4px;
`;

const ItemDescription = styled.p`
  color: #fff;
  font-size: 11px;
  line-height: 1.3636363636rem;
  margin-bottom: 4px;
`;

const ItemGold = styled.p`
  color: #ffc659;
  font-size: 11px;
  margin-bottom: 4px;
`;

export default Item;
