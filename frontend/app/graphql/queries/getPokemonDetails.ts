import { gql } from '@apollo/client';

export const GET_POKEMON_DETAILS = gql`
  query GetPokemonDetails($name: String!) {
    pokemonByName(name: $name) {
      id
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      types
      maxCP
      evolutions {
        name
        id
        image
        isFavorite
      }
      maxHP
      image
      isFavorite
    }
  }
`;
