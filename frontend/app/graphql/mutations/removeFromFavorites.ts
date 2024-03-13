import { gql } from '@apollo/client';

export const REMOVE_FROM_FAVORITES = gql`
  mutation RemoveFromFavorites($pokemonId: ID!) {
    unFavoritePokemon(id: $pokemonId) {
      id
      name
      image
      classification
      types
      isFavorite
    }
  }
`;
