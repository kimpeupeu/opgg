import React from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import {
  searchSummoner,
  selectCurrentSummoner,
  selectSearchHistory,
} from "../../modules/common";

const SearchBar = () => {
  const history = useAppSelector(selectSearchHistory);
  const summonerName = useAppSelector(selectCurrentSummoner);
  const [localKeyword, setLocalKeyword] = React.useState(summonerName);
  const dispatch = useAppDispatch();

  return (
    <div>
      <input
        placeholder="소환사명, 챔피언, ..."
        value={localKeyword}
        onChange={(e) => setLocalKeyword(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") dispatch(searchSummoner(localKeyword));
        }}
      />
      <button
        type="button"
        onClick={() => dispatch(searchSummoner(localKeyword))}
      >
        .GG
      </button>
      {history}
    </div>
  );
};

export default SearchBar;
