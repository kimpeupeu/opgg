import React from "react";
import styled from "styled-components";
import Container from "../components/commons/Container";
import Header from "../components/commons/Header";
import SearchBar from "../components/SummonerDetail/SearchBar";
import SummonerProfile from "../components/SummonerDetail/SummonerProfile";
import SummonerSummary from "../components/SummonerDetail/SummonerSummary";
import MatchHistory from "../components/SummonerDetail/MatchHistory";

const SummonerDetailPage = () => (
  <>
    <Header justifyContent="flex-end" alignItems="flex-end">
      <SearchBar />
    </Header>
    <Container>
      <SummonerProfile />
      <SummonerSummary />
      <MatchHistory />
    </Container>
  </>
);

export default SummonerDetailPage;
