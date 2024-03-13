import { InMemoryCache } from '@apollo/client';
import { PokemonConnection } from '../__generated__/graphql';

export const apolloCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pokemons: {
          keyArgs: ['query', ['filter', 'search']],
          merge(
            existing: PokemonConnection,
            incoming: PokemonConnection,
            { args, readField },
          ) {
            const { offset, filter } = args!.query;

            const { isFavorite } = filter;

            if (!existing) {
              return incoming;
            }

            if (offset === 0 && incoming.edges.length < existing.edges.length) {
              return incoming;
            }

            const mergedEdges = existing ? [...existing.edges] : [];
            for (let i = 0; i < incoming.edges.length; ++i) {
              mergedEdges[offset + i] = incoming.edges[i];
            }
            if (isFavorite) {
              return {
                ...incoming,
                edges: mergedEdges.filter((pokemonRef) =>
                  readField('isFavorite', pokemonRef),
                ),
              };
            }
            return {
              ...incoming,
              edges: mergedEdges,
            };
          },

          read(existing: PokemonConnection, { args }) {
            if (!existing || !args) {
              return existing;
            }

            const { offset, limit } = args.query;

            if (existing?.edges.length !== offset + limit) {
              return {
                offset: offset,
                limit: limit,
                edges: existing.edges.slice(0, offset + limit),
              };
            }
            return existing;
          },
        },
      },
    },
  },
});
