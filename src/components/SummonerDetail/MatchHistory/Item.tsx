import React from "react";
import styled from "styled-components";
import itemData from "lib/api/item.json";
import path from "path";

export interface ItemProps {
  imgSrc?: string;
}

export interface Data {
  [key: string]: any;
}

export interface Test {
  data: Data;
}

const Item: React.FC<ItemProps> = ({ imgSrc }) => {
  const [hover, setHover] = React.useState(false);
  if (!imgSrc) {
    return <ItemWrappper></ItemWrappper>;
  }
  const itemNum = imgSrc ? path.basename(imgSrc).split(".")[0] : null;

  const data = itemNum && (itemData as Test).data[itemNum];

  return (
    <ItemWrappper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {imgSrc && <ItemImage src={imgSrc} />}
      {hover && <DropDown>{data && data.description}</DropDown>}
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

const DropDown = styled.div`
  position: absolute;
  width: 260px;
  background-color: white;
  z-index: 99;
`;

export default Item;
