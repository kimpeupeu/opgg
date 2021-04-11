import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getSummoner } from "./summoner";
import { AppThunk, RootState } from "./index";
import { getMatches } from "./matches";
import {
  loadFromLoaclStorage,
  saveToLoaclStorage,
} from "lib/utils/localStorage";

export interface SummonerInfoState {
  searchHistory: string[];
  currentSummoner: string;
}

function persistHistory(history: string[]) {
  saveToLoaclStorage("searchHistory", history);
}

function loadHistory() {
  return (loadFromLoaclStorage("searchHistory") || []) as string[];
}

const initialState: SummonerInfoState = {
  searchHistory: loadHistory(),
  currentSummoner: "",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    addHistory: (state, action: PayloadAction<string>) => {
      // 원래 있으면 해당 항목 제거 후 다시 삽입 (최신 유지)
      state.searchHistory = state.searchHistory.filter(
        (val) => action.payload !== val
      );
      state.searchHistory.push(action.payload);

      // 항목이 5개 이상이면 오래된 항목 제거
      if (state.searchHistory.length > 5) {
        delete state.searchHistory[0];
      }
      persistHistory(state.searchHistory);
    },
    removeHistory: (state, action: PayloadAction<string>) => {
      state.searchHistory = state.searchHistory.filter(
        (val) => action.payload !== val
      );
      persistHistory(state.searchHistory);
    },
    clearHistory: (state) => {
      state.searchHistory = [];
      persistHistory(state.searchHistory);
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
