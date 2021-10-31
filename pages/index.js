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
  const data = usePokemons(initialPokemons);
  const { loading, error, pokemons, getPokemons } = data;

  // Fetch another pokemons data in the client on scroll
  useInfiniteScroll(loading, getPokemons);

  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Head>
        <title>Kepomon</title>
        <meta name="description" content="Let's catch a kepo monster" />
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
