// External modules
import Head from 'next/head';

// Internal modules
import PokemonDetails from '@/components/pokemon-details';
import client from '@/graphql/client';
import { GET_POKEMON } from '@/graphql/query';

const Pokemon = ({ pokemon }) => (
  <>
    <Head>
      <title>{`${pokemon.name}'s Profile`}</title>
      <meta
        name="description"
        content={`The complete information about ${pokemon.name}`}
      />
    </Head>
    <PokemonDetails pokemon={pokemon} />
  </>
);

export const getServerSideProps = async context => {
  // Get pokemon name from context
  const { name, image } = context.query;

  // Get pokemon data in the server
  const { data } = await client.query({
    query: GET_POKEMON,
    variables: { name },
  });

  // Add a new `image` property to get Image from home page
  const modifiedPokemon = { ...data.pokemon, image: image ?? null };

  return {
    props: {
      pokemon: modifiedPokemon,
    },
  };
};

export default Pokemon;
