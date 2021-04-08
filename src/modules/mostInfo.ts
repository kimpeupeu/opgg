import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import api from "../lib/api";
import { MostInfoDTO } from "../lib/api/types";

export interface MostInfoState {
  status: "idle" | "loading" | "failed";
  mostInfoDTO: MostInfoDTO | null;
}

const initalState: MostInfoState = {
  status: "idle",
  mostInfoDTO: null,
};

export const getMostInfo = createAsyncThunk(
  "mostInfo/getMostInfo",
  async (summonerName: string): Promise<MostInfoDTO> =>
    await api.getMostInfo(summonerName)
);

const mostInfoSlice = createSlice({
  name: "mostInfo",
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMostInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMostInfo.fulfilled, (state, action) => {
        state.status = "idle";
        state.mostInfoDTO = action.payload;
      });
  },
});

export const selectMostInfo = (state: RootState) => state.mostInfo.mostInfoDTO;

export default mostInfoSlice.reducer;
