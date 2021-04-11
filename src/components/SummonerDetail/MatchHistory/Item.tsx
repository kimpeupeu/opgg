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
      {hover && <DropDown>{data && removeTags(data.description)}</DropDown>}
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
