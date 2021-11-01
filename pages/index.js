// External modules
import Head from 'next/head';

// Internal modules
import If from '@/components/if';
import Loading from '@/components/loading';
import PokemonList from '@/components/pokemon-list';
import client from '@/graphql/client';
import { VARIABLES as variables } from '@/graphql/constants';
import { GET_POKEMONS } from '@/graphql/query';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import usePokemons from '@/hooks/usePokemons';

const Pokemons = ({ initialPokemons }) => {
  // Set initial pokemons data from the server
  // and fetch another pokemons data in the client
  const data = usePokemons(initialPokemons);
  const { loading, error, pokemons, getPokemons } = data;
  useInfiniteScroll(loading, getPokemons);

  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Head>
        <title>Képomon</title>
        <meta name="description" content="A curious monster" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PokemonList pokemons={pokemons} />
      <If condition={loading}>
        <Loading />
      </If>
    </>
  );
};

export const getServerSideProps = async () => {
  // Get initial pokemons data in the server
  const { data } = await client.query({ query: GET_POKEMONS, variables });

  return {
    props: {
      initialPokemons: data.pokemons.results,
    },
  };
};

export default Pokemons;
