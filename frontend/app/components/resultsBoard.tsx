'use client';
import { useQuery } from '@apollo/client';
import { appStateVar, useAppState, useViewState } from '../appState';
import { GridView } from './gridView';
import { ListView } from './listView';
import styles from './resultsBoard.module.scss';
import { Pokemon, Query } from '../__generated__/graphql';
import { GET_POKEMONS } from '../graphql/queries/getPokemons';
import React from 'react';
import { LoadingSpinner } from './loadingSpinner';
import { ErrorComponent } from './errorComponent';

export type CommonViewProps = {
  pokemons: Pick<Pokemon, 'id' | 'name' | 'image' | 'isFavorite' | 'types'>[];
};

export const ResultsBoard: React.FC = () => {
  const view = useViewState();
  const appState = useAppState();

  const { loading, data, error, fetchMore } = useQuery<Query>(GET_POKEMONS, {
    fetchPolicy: appState.isFavorite ? 'cache-and-network' : 'cache-first',
    variables: {
      pokemonsQueryInput: {
        offset: appState.offset,
        limit: 12,
        search: appState.searchQuery,
        filter: {
          type: appState.filterType,
          isFavorite: appState.isFavorite,
        },
      },
    },
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    throw new Error(
      'Something went wrong. Please try again later. Please reload the page.',
    );
  }

  const pokemons = data?.pokemons.edges;

  if (!pokemons?.length) {
    return (
      <ErrorComponent
        error={
          new Error('Could not find any results for given search and filter.')
        }
        hideButton
      />
    );
  }

  const loadMoreHandler = () => {
    fetchMore({
      variables: {
        pokemonsQueryInput: {
          offset: appState.offset + 12,
          limit: 12,
          search: appState.searchQuery,
          filter: {
            type: appState.filterType,
            isFavorite: appState.isFavorite,
          },
        },
      },
    }).then((result) =>
      appStateVar({ ...appState, offset: result.data.pokemons.offset }),
    );
  };

  return (
    <div className={styles.resultsBoard}>
      {view === 'grid' ? (
        <GridView pokemons={pokemons} />
      ) : (
        <ListView pokemons={pokemons} />
      )}
      <button
        className={styles.loadMoreButton}
        onClick={loadMoreHandler}
        disabled={pokemons.length < appState.offset + 12}
      >
        Load more Pokemons
      </button>
    </div>
  );
};
