import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getSummoner } from "./summoner";
import { AppThunk, RootState } from "./index";
import { getMatches } from "./matches";

export interface SummonerInfoState {
  searchHistory: string[];
  currentSummoner: string;
}

const initialState: SummonerInfoState = {
  searchHistory: [],
  currentSummoner: "",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    addHistory: (state, action: PayloadAction<string>) => {
      state.searchHistory = state.searchHistory.filter(
        (val) => action.payload !== val
      );
      state.searchHistory.push(action.payload);

      if (state.searchHistory.length > 5) {
        delete state.searchHistory[0];
      }
    },
    removeHistory: (state, action: PayloadAction<string>) => {
      state.searchHistory = state.searchHistory.filter(
        (val) => action.payload !== val
      );
    },
    clearHistory: (state) => {
      state.searchHistory = [];
    },
    setCurrentSummoner: (state, action: PayloadAction<string>) => {
      state.currentSummoner = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  addHistory,
  removeHistory,
  clearHistory,
  setCurrentSummoner,
} = commonSlice.actions;

export const selectCurrentSummoner = (state: RootState) =>
  state.common.currentSummoner;

export const selectSearchHistory = (state: RootState) =>
  state.common.searchHistory;

export const selectIsLoading = (state: RootState) => {
  return (
    state.matches.status !== "idle" &&
    state.mostInfo.status !== "idle" &&
    state.summonerInfo.status !== "idle"
  );
};

export const searchSummoner = (summonerName: string): AppThunk => (
  dispatch,
  getState
) => {
  if (summonerName) {
    dispatch(addHistory(summonerName));
    dispatch(setCurrentSummoner(summonerName));

    dispatch(getSummoner(summonerName));
    dispatch(getMatches(summonerName));
  }
};

export default commonSlice.reducer;
