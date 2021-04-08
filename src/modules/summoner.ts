import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from ".";
import api from "../lib/api";
import { SummonerDTO } from "../lib/api/types";

export interface SummonerInfoState {
  status: "idle" | "loading" | "failed";
  summonerDTO: SummonerDTO | null;
}

const initialState: SummonerInfoState = {
  status: "idle",
  summonerDTO: null,
};

export const getSummoner = createAsyncThunk(
  "summonerInfo/getSummoner",
  async (summonerName: string): Promise<SummonerDTO> =>
    await api.getSummoner(summonerName)
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
