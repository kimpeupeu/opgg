import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #1ea1f7;
  height: 97px;
  padding: 12px 0;
`;

const HeaderContent = styled.div<{
  justifyContent: "flex-start" | "center" | "flex-end";
  alignItems: "flex-start" | "center" | "flex-end";
}>`
  max-width: 1000px;
  height: 100%;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export interface HeaderProps {
  justifyContent?: "flex-start" | "center" | "flex-end";
  alignItems?: "flex-start" | "center" | "flex-end";
}

const Header: React.FC<HeaderProps> = ({
  children,
  justifyContent = "flex-start",
  alignItems = "flex-start",
}) => (
  <HeaderContainer>
    <HeaderContent justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </HeaderContent>
  </HeaderContainer>
);

export default Header;
