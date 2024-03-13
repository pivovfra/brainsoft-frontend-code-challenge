'use client';
import { ListItem } from './listItem';
import { CommonViewProps } from './resultsBoard';
import styles from './listView.module.scss';
import React from 'react';

export const ListView: React.FC<CommonViewProps> = ({ pokemons }) => {
  return (
    <div className={styles.listView}>
      {pokemons.map((pokemon) => (
        <ListItem key={pokemon.name} {...pokemon} />
      ))}
    </div>
  );
};
