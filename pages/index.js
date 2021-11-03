// External modules
import { useAmp } from 'next/amp';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect } from 'react';

// Internal modules
import If from '@/components/if';
import PokemonList from '@/components/pokemon-list';
import client from '@/graphql/client';
import { VARIABLES as variables } from '@/graphql/constants';
import { GET_POKEMONS } from '@/graphql/query';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { checkAmp } from '@/state/actions';
import { useAppContext } from '@/state/context';
import usePokemons from '@/hooks/usePokemons';

// Dynamic internal modules
const Loading = dynamic(() => import('@/components/loading'));
const MessageBox = dynamic(() => import('@/components/message-box'));

// AMP configuration
export const config = { amp: 'hybrid' };

const Pokemons = ({ initialPokemons }) => {
  const isAmp = useAmp();
  const { dispatch } = useAppContext();
  useEffect(() => dispatch(checkAmp(isAmp)), []);

  // Set initial pokemons data from the server
  // and fetch another pokemons data in the client
  const data = usePokemons(initialPokemons);
  const { loading, error, pokemons, getPokemons } = data;
  useInfiniteScroll(loading, getPokemons);

  return (
    <>
      <Head>
        <title>Képomon</title>
        <meta
          name="description"
          content="A list of curious monsters out there"
        />
      </Head>
      <If condition={typeof error !== 'undefined'}>
        <MessageBox message={`Error! ${error?.message}`} />
      </If>
      <If condition={typeof error === 'undefined'}>
        <PokemonList pokemons={pokemons} />
        <If condition={loading}>
          <Loading />
        </If>
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
