'use client';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAILS } from '../graphql/queries/getPokemonDetails';
import {
  GetPokemonDetailsQuery,
  PokemonDimension,
} from '../__generated__/graphql';
import { Card } from '../components/card';
import { AdditionalInfo } from '../components/additionalInfo';
import styles from './page.module.scss';
import { LoadingSpinner } from '../components/loadingSpinner';
import React from 'react';

type DetailsPageProps = {
  params: {
    name: string;
  };
};

const formatDimension = (dimension: PokemonDimension): string => {
  return `${dimension.minimum} - ${dimension.maximum}`;
};

const DetailPage: React.FC<DetailsPageProps> = ({ params: { name } }) => {
  const { loading, data, error } = useQuery<GetPokemonDetailsQuery>(
    GET_POKEMON_DETAILS,
    {
      variables: {
        name: decodeURIComponent(name),
      },
    },
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  const pokemon = data?.pokemonByName;

  if (error || !pokemon) {
    throw new Error(
      'Something went wrong. Please try again later. Please reload the page.',
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.mainCardContainer}>
          <Card {...pokemon} />
        </div>
        <AdditionalInfo
          hp={pokemon.maxHP}
          cp={pokemon.maxCP}
          weight={formatDimension(pokemon.weight)}
          height={formatDimension(pokemon.height)}
          evolutions={pokemon.evolutions}
        />
      </div>
    </div>
  );
};

export default DetailPage;
