'use client';
import { useViewState, viewStateVar } from '../appState';
import { IconButton } from './iconButton';
import styles from './viewSelector.module.scss';
import React from 'react';

export const ViewSelector: React.FC = () => {
  const viewState = useViewState();

  const clickHandler = (variant: 'list' | 'grid') => {
    if (variant !== viewState) {
      viewStateVar(variant);
    }
  };

  return (
    <div className={styles.buttonsContainer}>
      <IconButton
        variant="list"
        onClick={() => {
          clickHandler('list');
        }}
      />
      <IconButton
        variant="grid"
        onClick={() => {
          clickHandler('grid');
        }}
      />
    </div>
  );
};
