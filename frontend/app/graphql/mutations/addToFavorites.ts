import { gql } from '@apollo/client';

export const ADD_TO_FAVORITES = gql`
  mutation AddToFavorites($pokemonId: ID!) {
    favoritePokemon(id: $pokemonId) {
      id
      name
      image
      classification
      types
      isFavorite
    }
  }
`;
