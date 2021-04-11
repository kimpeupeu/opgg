import React from "react";
import Container, { Row, Column } from "components/commons/Container";
import Header from "components/commons/Header";
import SearchBar from "components/SummonerDetail/SearchBar";
import SummonerProfile from "components/SummonerDetail/SummonerProfile";
import SummonerSummary from "components/SummonerDetail/SummonerSummary";
import MatchHistory from "components/SummonerDetail/MatchHistory";
import styled from "styled-components";
import { useAppSelector } from "lib/hooks";
import { selectCurrentSummoner, selectIsLoading } from "modules/common";
import Loading from "components/commons/Loading";

const SummonerDetailPage = () => {
  const hasResult = useAppSelector(selectCurrentSummoner);

  return (
    <Background>
      <Header justifyContent="flex-end" alignItems="flex-end">
        <SearchBar />
      </Header>
      {hasResult ? (
        <>
          <Container>
            <SummonerProfile />
          </Container>
          <Divider />
          <Container>
            <Row>
              <Column flex={3}>
                <SummonerSummary />
              </Column>
              <Column flex={7}>
                <MatchHistory />
              </Column>
            </Row>
          </Container>
        </>
      ) : (
        <NoResultHelp />
      )}
    </Background>
  );
};

const Background = styled.div`
  background-color: #eaeaea;
  min-height: 100vh;
`;

const Divider = styled.div`
  width: 100vw;
  margin: 14px 0;
  border-bottom: 1px solid #d8d8d8;
`;

const NoResultHelp = () => (
  <NoResultHelpBlock>소환사를 검색해주세요.</NoResultHelpBlock>
);

const NoResultHelpBlock = styled.p`
  display: flex;
  justify-content: center;
  padding-top: 24px;
  font-size: 34px;
  color: #242929;
`;

export default SummonerDetailPage;
