import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query GetPokemons($pokemonsQueryInput: PokemonsQueryInput!) {
    pokemons(query: $pokemonsQueryInput) {
      limit
      offset
      edges {
        id
        name
        image
        types
        isFavorite
      }
    }
  }
`;
