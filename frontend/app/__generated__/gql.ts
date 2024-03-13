/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation AddToFavorites($pokemonId: ID!) {\n    favoritePokemon(id: $pokemonId) {\n      id\n      name\n      image\n      classification\n      types\n      isFavorite\n    }\n  }\n": types.AddToFavoritesDocument,
    "\n  mutation RemoveFromFavorites($pokemonId: ID!) {\n    unFavoritePokemon(id: $pokemonId) {\n      id\n      name\n      image\n      classification\n      types\n      isFavorite\n    }\n  }\n": types.RemoveFromFavoritesDocument,
    "\n  query GetPokemonDetails($name: String!) {\n    pokemonByName(name: $name) {\n      id\n      name\n      weight {\n        minimum\n        maximum\n      }\n      height {\n        minimum\n        maximum\n      }\n      types\n      maxCP\n      evolutions {\n        name\n        id\n        image\n        isFavorite\n      }\n      maxHP\n      image\n      isFavorite\n    }\n  }\n": types.GetPokemonDetailsDocument,
    "\n  query GetPokemonTypes {\n    pokemonTypes\n  }\n": types.GetPokemonTypesDocument,
    "\n  query GetPokemons($pokemonsQueryInput: PokemonsQueryInput!) {\n    pokemons(query: $pokemonsQueryInput) {\n      limit\n      offset\n      edges {\n        id\n        name\n        image\n        types\n        isFavorite\n      }\n    }\n  }\n": types.GetPokemonsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddToFavorites($pokemonId: ID!) {\n    favoritePokemon(id: $pokemonId) {\n      id\n      name\n      image\n      classification\n      types\n      isFavorite\n    }\n  }\n"): (typeof documents)["\n  mutation AddToFavorites($pokemonId: ID!) {\n    favoritePokemon(id: $pokemonId) {\n      id\n      name\n      image\n      classification\n      types\n      isFavorite\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation RemoveFromFavorites($pokemonId: ID!) {\n    unFavoritePokemon(id: $pokemonId) {\n      id\n      name\n      image\n      classification\n      types\n      isFavorite\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveFromFavorites($pokemonId: ID!) {\n    unFavoritePokemon(id: $pokemonId) {\n      id\n      name\n      image\n      classification\n      types\n      isFavorite\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPokemonDetails($name: String!) {\n    pokemonByName(name: $name) {\n      id\n      name\n      weight {\n        minimum\n        maximum\n      }\n      height {\n        minimum\n        maximum\n      }\n      types\n      maxCP\n      evolutions {\n        name\n        id\n        image\n        isFavorite\n      }\n      maxHP\n      image\n      isFavorite\n    }\n  }\n"): (typeof documents)["\n  query GetPokemonDetails($name: String!) {\n    pokemonByName(name: $name) {\n      id\n      name\n      weight {\n        minimum\n        maximum\n      }\n      height {\n        minimum\n        maximum\n      }\n      types\n      maxCP\n      evolutions {\n        name\n        id\n        image\n        isFavorite\n      }\n      maxHP\n      image\n      isFavorite\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPokemonTypes {\n    pokemonTypes\n  }\n"): (typeof documents)["\n  query GetPokemonTypes {\n    pokemonTypes\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPokemons($pokemonsQueryInput: PokemonsQueryInput!) {\n    pokemons(query: $pokemonsQueryInput) {\n      limit\n      offset\n      edges {\n        id\n        name\n        image\n        types\n        isFavorite\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPokemons($pokemonsQueryInput: PokemonsQueryInput!) {\n    pokemons(query: $pokemonsQueryInput) {\n      limit\n      offset\n      edges {\n        id\n        name\n        image\n        types\n        isFavorite\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;