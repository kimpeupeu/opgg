import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from ".";
import api from "lib/api";
import { SummonerDTO } from "lib/api/types";
import { SummonerInfoState } from "./summoner";

const initialState: SummonerInfoState = {
  status: "idle",
  summonerDTO: null,
};

export const getSummonerInstant = createAsyncThunk(
  "summonerInstant/getSummoner",
  async (summonerName: string): Promise<SummonerDTO> =>
    await api.getSummoner(summonerName)
);

export const summonerInstantSlice = createSlice({
  name: "summonerInstant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSummonerInstant.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSummonerInstant.fulfilled, (state, action) => {
        state.status = "idle";
        state.summonerDTO = action.payload;
      });
  },
});

// export const {} = summonerInfoSlice.actions;

export const selectSummonerInstant = (state: RootState) =>
  state.summonerInstant.summonerDTO;

export default summonerInstantSlice.reducer;
