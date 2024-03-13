'use client';
import { useQuery, useReactiveVar } from '@apollo/client';
import React, { useState } from 'react';
import { GET_POKEMON_TYPES } from '../graphql/queries/getPokemonTypes';
import { GetPokemonTypesQuery } from '../__generated__/graphql';
import { appStateVar } from '../appState';
import styles from './select.module.scss';

export const Select: React.FC = () => {
  const appState = useReactiveVar(appStateVar);
  const [selectedOption, setSelectedOption] = useState<string>();

  const { data } = useQuery<GetPokemonTypesQuery>(GET_POKEMON_TYPES);

  if (appState.filterType !== selectedOption) {
    setSelectedOption(appState.filterType);
  }

  const options = data?.pokemonTypes;

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    appStateVar({ ...appState, filterType: event.target.value, offset: 0 });
  };

  return (
    <select
      className={styles.customSelect}
      value={selectedOption}
      onChange={handleSelectChange}
    >
      <option value="">Filter</option>
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
