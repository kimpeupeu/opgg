import styled from "styled-components";

export interface SummaryItemProps {
  caption?: boolean;
  color?: string;
  textAlign?: "left" | "center" | "right";
}

export const SummaryItem = styled.p<SummaryItemProps>`
  font-size: ${(props) => (props.caption ? "11px" : "13px")};
  color: ${(props) => (props.caption ? "#879292" : props.color || "#5e5e5e")};
  font-weight: ${(props) => (props.caption ? "400" : "700")};
  letter-spacing: 0.01rem;
  text-align: ${(props) => props.textAlign};
`;

SummaryItem.defaultProps = {
  caption: false,
  textAlign: "left",
};

export const ChampionImage = styled.img`
  display: block;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const SummaryContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
`;

export default SummaryContainer;
