import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "lib/hooks";
import { removeHistory, searchSummoner } from "modules/common";

export interface SearchHistoryProps {
  history: string[];
}

export interface SearchHistoryItemProps {
  name: string;
}

const SearchHistoryItem: React.FC<SearchHistoryItemProps> = ({ name }) => {
  const dispatch = useAppDispatch();

  return (
    <SearchHistoryItemWrap key={name}>
      <QuickSearchButton onClick={() => dispatch(searchSummoner(name))}>
        {name}
      </QuickSearchButton>
      <RemoveButton onClick={() => dispatch(removeHistory(name))}>
        &times;
      </RemoveButton>
    </SearchHistoryItemWrap>
  );
};

const SearchHistory: React.FC<SearchHistoryProps> = ({ history }) => {
  if (!history.length) {
    return <p>검색 기록</p>;
  }

  return (
    <SearchHistoryWrap>
      {history.map((name) => (
        <SearchHistoryItem key={name} name={name} />
      ))}
    </SearchHistoryWrap>
  );
};

const SearchHistoryWrap = styled.ol`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 8px 12px;
`;

const SearchHistoryItemWrap = styled.li`
  display: flex;
  justify-content: space-between;
`;

const QuickSearchButton = styled.button`
  background: none;
  border: none;
  outline: none;

  :hover {
    cursor: pointer;
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  outline: none;

  :hover {
    cursor: pointer;
  }
`;

export default SearchHistory;
