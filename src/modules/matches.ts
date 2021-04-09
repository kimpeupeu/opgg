import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from ".";
import { MatchesDTO } from "lib/api/types";

export interface MatchesState {
  status: "idle" | "loading" | "failed";
  matchesDTO: MatchesDTO | null;
}

const initialState: MatchesState = {
  status: "idle",
  matchesDTO: null,
};

export const getMatches = createAsyncThunk(
  "matches/getMatches",
  async (summonerName: string): Promise<MatchesDTO> => {
    const response = await fetch(
      `https://codingtest.op.gg/api/summoner/${summonerName}/matches?hl=ko&lastMatch=0`
    );
    return await response.json();
  }
);

export const summonerInfoSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMatches.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMatches.fulfilled, (state, action) => {
        state.status = "idle";
        state.matchesDTO = action.payload;
      });
  },
});

// export const {} = summonerInfoSlice.actions;

export const selectMatches = (state: RootState) => state.matches.matchesDTO;

export default summonerInfoSlice.reducer;
