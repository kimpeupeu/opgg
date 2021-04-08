import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import { SummonerDTO } from "./types";

export interface SummonerInfoState {
  status: "idle" | "loading" | "failed";
  summonerDTO: SummonerDTO;
}

const initialState: SummonerInfoState = {
  status: "idle",
  summonerDTO: {
    summoner: {
      name: "Hide on bush",
      level: 85,
      profileImageUrl:
        "https://opgg-static.akamaized.net/images/profile_icons/profileIcon1625.jpg",
      profileBorderImageUrl:
        "https://opgg-static.akamaized.net/images/borders2/challenger.png",
      url: "https://www.op.gg/summoner/userName=Hide on bush",
      leagues: [
        {
          hasResults: true,
          wins: 146,
          losses: 77,
          tierRank: {
            name: "솔랭",
            tier: "Platinum",
            tierDivision: "Platinum",
            string: "Platinum (593LP)",
            shortString: "P1",
            division: "i",
            imageUrl:
              "https://opgg-static.akamaized.net/images/medals/platinum_1.png",
            lp: 593,
            tierRankPoint: 81,
          },
        },
        {
          hasResults: true,
          wins: 295,
          losses: 669,
          tierRank: {
            name: "자유 5:5 랭크",
            tier: "Challenger",
            tierDivision: "Challenger",
            string: "Challenger (170LP)",
            shortString: "C1",
            division: "i",
            imageUrl:
              "https://opgg-static.akamaized.net/images/medals/challenger_1.png",
            lp: 170,
            tierRankPoint: 324,
          },
        },
      ],
      previousTiers: [
        {
          name: "솔랭",
          tier: "Bronze",
          tierDivision: "Bronze",
          string: "Bronze (739LP)",
          shortString: "B1",
          division: "i",
          imageUrl:
            "https://opgg-static.akamaized.net/images/medals/bronze_1.png",
          lp: 739,
          tierRankPoint: 404,
          season: 9,
        },
        {
          name: "솔랭",
          tier: "Grandmaster",
          tierDivision: "Grandmaster",
          string: "Grandmaster (818LP)",
          shortString: "GM1",
          division: "i",
          imageUrl:
            "https://opgg-static.akamaized.net/images/medals/grandmaster_1.png",
          lp: 818,
          tierRankPoint: 457,
          season: 8,
        },
        {
          name: "솔랭",
          tier: "Challenger",
          tierDivision: "Challenger",
          string: "Challenger (652LP)",
          shortString: "C1",
          division: "i",
          imageUrl:
            "https://opgg-static.akamaized.net/images/medals/challenger_1.png",
          lp: 652,
          tierRankPoint: 309,
          season: 7,
        },
        {
          name: "솔랭",
          tier: "Iron",
          tierDivision: "Iron",
          string: "Iron (432LP)",
          shortString: "I1",
          division: "i",
          imageUrl:
            "https://opgg-static.akamaized.net/images/medals/iron_1.png",
          lp: 432,
          tierRankPoint: 226,
          season: 6,
        },
      ],
      ladderRank: {
        rank: 175534,
        rankPercentOfTop: 7,
      },
      profileBackgroundImageUrl:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg",
    },
  },
};

export const getSummoner = createAsyncThunk(
  "summonerInfo/getSummoner",
  async (summonerName: string): Promise<SummonerDTO> => {
    const response = await fetch(
      `https://codingtest.op.gg/api/summoner/${encodeURI(summonerName)}?hl=ko`
    );
    return await response.json();
  }
);

export const summonerInfoSlice = createSlice({
  name: "summonerInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSummoner.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSummoner.fulfilled, (state, action) => {
        state.status = "idle";
        state.summonerDTO = action.payload;
      });
  },
});

// export const {} = summonerInfoSlice.actions;

export const selectSummonerInfo = (state: RootState) =>
  state.summonerInfo.summonerDTO;

export default summonerInfoSlice.reducer;
