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
  return (
    <SearchHistoryWrapper>
      <Title>검색기록</Title>
      <SearchHistoryList>
        {history.map((name) => (
          <SearchHistoryItem key={name} name={name} />
        ))}
      </SearchHistoryList>
    </SearchHistoryWrapper>
  );
};

const SearchHistoryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 8px 12px;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
  margin: auto;
  padding: 4px 0;
  margin-bottom: 4px;
  border-bottom: 1px solid #333;
`;

const SearchHistoryList = styled.ol`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0;
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
