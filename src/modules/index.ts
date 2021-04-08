import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import summonerInfoReducer from "./api/summoner";
import matchesReducer from "./api/matches";
import commonSlice from "./common";

export const store = configureStore({
  reducer: {
    matches: matchesReducer,
    summonerInfo: summonerInfoReducer,
    common: commonSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
