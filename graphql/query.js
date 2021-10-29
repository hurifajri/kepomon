// External modules
import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query Pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        dreamworld
      }
    }
  }
`;
