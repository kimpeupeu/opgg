import { GameInfo } from "lib/api/types";
import React from "react";
import MatchHistoryItem from "./MatchHistoryItem";

export interface MatchHistoryListProps {
  matches: GameInfo[];
}

const MatchHistoryList: React.FC<MatchHistoryListProps> = ({ matches }) => (
  <div>
    {matches.map((match) => (
      <MatchHistoryItem key={match.gameId} match={match} />
    ))}
  </div>
);

export default MatchHistoryList;
