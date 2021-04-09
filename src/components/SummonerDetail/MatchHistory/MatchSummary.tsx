import React from "react";
import { ChampionSummary, Position, Summary } from "lib/api/types";
import { calcKDA, calcTotalGames, calcWinRate } from "lib/utils/calcuator";

export interface MatchSummaryProps {
  matchSummary: Summary;
  championSummary: ChampionSummary[];
  positionSummary: Position[];
}

const MatchSummary: React.FC<MatchSummaryProps> = ({
  matchSummary,
  championSummary,
  positionSummary,
}) => {
  const totalGames = calcTotalGames(matchSummary);
  const winRate = calcWinRate(matchSummary);
  const kda = calcKDA(matchSummary);

  return (
    <div>
      <div>
        <div>
          <div>
            {totalGames}전 {matchSummary.wins}승 {matchSummary.losses}패
          </div>
          <div>{winRate}%</div>
        </div>
        <div>
          <div>
            {matchSummary.kills} / <span>{matchSummary.deaths}</span> /{" "}
            {matchSummary.assists}
          </div>
          <div>{kda === -1 ? "Perfact" : `${kda}:1`} (58%)</div>
        </div>
      </div>
      <div>
        {championSummary.map((summary) => (
          <ChampionSummaryItem key={summary.id} summary={summary} />
        ))}
      </div>
      <div>
        <p>선호 포지션 (랭크)</p>
        <div>
          <img />
          <div>
            <p>탑</p>
            <p>70% &vert; 승률 53%</p>
          </div>
        </div>
      </div>
      <div>
        <img />
        <div>
          <p>정글</p>
          <p>30% &vert; 승률 33%</p>
        </div>
      </div>
    </div>
  );
};

interface ChampionSummaryItemProps {
  summary: ChampionSummary;
}

const ChampionSummaryItem: React.FC<ChampionSummaryItemProps> = ({
  summary,
}) => {
  const winRate = calcWinRate(summary);
  const kda = calcKDA(summary);

  return (
    <div>
      <img src={summary.imageUrl} alt="Champion" />
      <div>
        <p>{summary.name}</p>
        <p>
          {winRate}% ({summary.wins}승 {summary.losses}패) &#124;{" "}
          {kda === -1 ? "Perfact" : kda} 평점
        </p>
      </div>
    </div>
  );
};

export default MatchSummary;
