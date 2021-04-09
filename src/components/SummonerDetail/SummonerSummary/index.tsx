import React from "react";
import styled from "styled-components";
import RankProfileSection from "./RankProfileSection";
import WinRateProfileSection from "./WinRateProfileSection";

const SummonerSummary = () => (
  <Wrapper>
    <RankProfileSection />
    <WinRateProfileSection />
  </Wrapper>
);

const Wrapper = styled.div`
  > * {
    margin-bottom: 10px;

    :last-child {
      margin-bottom: 0;
    }
  }
`;

export default SummonerSummary;
