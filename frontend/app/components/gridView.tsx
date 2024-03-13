'use client';
import styles from './gridView.module.scss';
import { Card } from './card';
import { CommonViewProps } from './resultsBoard';
import React from 'react';

export const GridView: React.FC<CommonViewProps> = ({ pokemons }) => {
  return (
    <div className={styles.cardsGrid}>
      {pokemons.map((pokemon) => (
        <Card key={pokemon.name} {...pokemon} />
      ))}
    </div>
  );
};
