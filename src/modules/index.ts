import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import summonerInfoReducer from "./summoner";
import matchesReducer from "./matches";
import commonSlice from "./common";
import mostInfoSlice from "./mostInfo";
import summonerInstant from "./summonerInstant";

export const store = configureStore({
  reducer: {
    mostInfo: mostInfoSlice,
    matches: matchesReducer,
    summonerInfo: summonerInfoReducer,
    summonerInstant: summonerInstant,
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
