'use client';
import Image from 'next/image';
import FilledHeartIcon from '../../public/heart-filled.svg';
import OutlinedHeartIcon from '../../public/heart-outlined.svg';
import styles from './likeButton.module.scss';
import React from 'react';
import { ADD_TO_FAVORITES } from '../graphql/mutations/addToFavorites';
import { useMutation } from '@apollo/client';
import { REMOVE_FROM_FAVORITES } from '../graphql/mutations/removeFromFavorites';
import { GET_POKEMONS } from '../graphql/queries/getPokemons';
import { useAppState } from '../appState';
import {
  AddToFavoritesMutation,
  RemoveFromFavoritesMutation,
} from '../__generated__/graphql';

type LikeButtonProps = {
  isFavorite: boolean;
  id: string;
};

export const LikeButton: React.FC<LikeButtonProps> = ({ isFavorite, id }) => {
  const [isLiked, setLiked] = React.useState(isFavorite);
  const appState = useAppState();

  const mutationOptions = (value?: number) => {
    return {
      variables: {
        pokemonId: id,
      },
      refetchQueries: [
        {
          query: GET_POKEMONS,
          variables: {
            pokemonsQueryInput: {
              offset: 0,
              limit: value || 12,
              search: appState.searchQuery,
              filter: {
                type: appState.filterType,
                isFavorite: true,
              },
            },
          },
        },
      ],
    };
  };

  const [addToFavorites, { error, loading }] =
    useMutation<AddToFavoritesMutation>(ADD_TO_FAVORITES, mutationOptions());
  const [removeFromFavorites] = useMutation<RemoveFromFavoritesMutation>(
    REMOVE_FROM_FAVORITES,
    mutationOptions(appState.offset + 12),
  );

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!loading && !error) {
      if (isLiked) {
        removeFromFavorites();
      } else {
        addToFavorites();
      }
      setLiked(!isLiked);
    }
  };

  return (
    <button className={styles.likeButton} onClick={clickHandler}>
      <Image
        className={styles.buttonIcon}
        width={24}
        height={24}
        src={isLiked ? FilledHeartIcon : OutlinedHeartIcon}
        alt={'Like icon'}
      />
    </button>
  );
};
