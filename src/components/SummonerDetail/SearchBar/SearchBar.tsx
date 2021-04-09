import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector, useOutsideClick } from "lib/hooks";
import {
  searchSummoner,
  selectCurrentSummoner,
  selectSearchHistory,
} from "modules/common";
import {
  getSummonerInstant,
  selectSummonerInstant,
} from "modules/summonerInstant";
import SummonerInstant from "./SummonerInstant";
import SearchHistory from "./SearchHistory";

const SearchBar = () => {
  const searchBarRef = React.useRef<HTMLDivElement>(null);
  const history = useAppSelector(selectSearchHistory);
  const summonerName = useAppSelector(selectCurrentSummoner);
  const [localKeyword, setLocalKeyword] = React.useState(summonerName);
  const summonerInstant = useAppSelector(selectSummonerInstant);
  const [focused, setFocused] = React.useState(false);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (localKeyword) dispatch(getSummonerInstant(localKeyword));
  }, [localKeyword, dispatch]);

  useOutsideClick(searchBarRef, () => {
    setFocused(false);
  });

  return (
    <SearchBarWrapper ref={searchBarRef}>
      <SearchForm>
        <SearchInput
          placeholder="소환사명, 챔피언, ..."
          value={localKeyword}
          onChange={(e) => {
            setLocalKeyword(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") dispatch(searchSummoner(localKeyword));
          }}
          onFocus={() => setFocused(true)}
          // onBlur={() => setFocused(false)}
        />
        <SearchButton
          type="button"
          onClick={() => dispatch(searchSummoner(localKeyword))}
        >
          .GG
        </SearchButton>
      </SearchForm>
      {focused && (
        <DropDown>
          {localKeyword ? (
            summonerInstant && (
              <SummonerInstant summonerInfo={summonerInstant} />
            )
          ) : (
            <SearchHistory history={history} />
          )}
        </DropDown>
      )}
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  display: relative;
  border-radius: 2px;
  overflow: hidden;
`;

const SearchForm = styled.div`
  width: 260px;
  display: flex;
`;

const SearchInput = styled.input`
  height: inherit;
  padding: 9px 14px;
  flex: 1;
  border: none;
  background-color: white;

  :active,
  :focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  border: none;
  background-color: white;
  font-size: 20px;
  font-weight: 700;
  color: #1ea1f7;
  padding-right: 12px;
`;

const DropDown = styled.div`
  position: absolute;
  width: 260px;
  background-color: white;
`;

export default SearchBar;
