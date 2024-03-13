'use client';
import { ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { appStateVar, useAppState } from '../appState';
import styles from './searchBar.module.scss';
import React from 'react';

type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: Function;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  const appState = useAppState();

  const debounced = useDebouncedCallback((value) => {
    appStateVar({ ...appState, searchQuery: value, offset: 0 });
  }, 500);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    debounced(e.target.value);
  };

  return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Search"
      value={searchQuery}
      onChange={handleInputChange}
    />
  );
};
