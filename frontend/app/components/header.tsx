'use client';
import { SearchBar } from './searchBar';
import { Select } from './select';
import { ViewSelector } from './viewSelector';
import styles from './header.module.scss';
import { FavoritesViewSelector } from './favoritesViewSelector';
import React, { useState } from 'react';
import { useAppState } from '../appState';

export const Header: React.FC = () => {
  const appState = useAppState();
  const [searchQuery, setSearchQuery] = useState(appState.searchQuery);

  return (
    <div className={styles.stickyHeader}>
      <div className={styles.searchContainer}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Select />
      </div>
      <ViewSelector />
      <FavoritesViewSelector setSearchQuery={setSearchQuery} />
    </div>
  );
};
