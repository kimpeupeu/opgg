import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div<{ flex?: number }>`
  flex: ${(props) => (props.flex ? props.flex : 1)};

  margin-right: 10px;
  :last-child {
    margin-right: 0;
  }
`;

export default Container;
