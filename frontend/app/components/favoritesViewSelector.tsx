import { useState } from 'react';
import { appStateVar, useAppState } from '../appState';
import styles from './favoritesViewSelector.module.scss';
import React from 'react';

type FavoritesViewSelectorProps = {
  setSearchQuery: Function;
};

export const FavoritesViewSelector: React.FC<FavoritesViewSelectorProps> = ({
  setSearchQuery,
}) => {
  const appState = useAppState();
  const [selectedButton, setSelectedButton] = useState(
    appState.isFavorite ? 2 : 1,
  );

  const isSelected = (id: number): boolean => {
    return selectedButton === id;
  };

  return (
    <div className={styles.buttonsContainer}>
      <button
        className={isSelected(1) ? styles.selectedButton : styles.switchButton}
        onClick={() => {
          setSelectedButton(1);
          appStateVar({
            searchQuery: '',
            filterType: '',
            isFavorite: false,
            offset: 0,
          });
          setSearchQuery('');
        }}
      >
        All
      </button>
      <button
        className={isSelected(2) ? styles.selectedButton : styles.switchButton}
        onClick={() => {
          setSelectedButton(2);
          appStateVar({
            searchQuery: '',
            filterType: '',
            isFavorite: true,
            offset: 0,
          });
          setSearchQuery('');
        }}
      >
        Favorites
      </button>
    </div>
  );
};
