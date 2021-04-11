import ItemJson from "./item.json";
import { ItemData } from "./types";

const API_SERVER_BASE = "https://codingtest.op.gg/api";

const api = {
  getSummoner: async (summonerName: string, hl = "ko") => {
    const response = await fetch(
      `${API_SERVER_BASE}/summoner/${encodeURI(summonerName)}?hl=${hl}`
    );
    return await response.json();
  },
  getMatchDetail: async (summonerName: string, gameId: string, hl = "ko") => {
    const response = await fetch(
      `${API_SERVER_BASE}/summoner/${encodeURI(
        summonerName
      )}/matchDetail/${gameId}?hl=${hl}`
    );
    return await response.json();
  },
  getMatches: async (summonerName: string, hl = "ko") => {
    const response = await fetch(
      `${API_SERVER_BASE}/summoner/${encodeURI(summonerName)}/matches?hl=${hl}`
    );
    return await response.json();
  },
  getMostInfo: async (summonerName: string, hl = "ko") => {
    const response = await fetch(
      `${API_SERVER_BASE}/summoner/${encodeURI(summonerName)}/mostInfo?hl=${hl}`
    );
    return await response.json();
  },
};

export const ItemDB = ItemJson as ItemData;

export default api;
