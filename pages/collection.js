// External modules
import Head from 'next/head';

// Internal modules
import If from '@/components/if';
import PokemonList from '@/components/pokemon-list';
import { useAppContext } from '@/state/context';

const Collection = () => {
  const { state } = useAppContext();
  const { ownedPokemons } = state;

  return (
    <>
      <Head>
        <title>Collection</title>
        <meta name="description" content="My collection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <If condition={ownedPokemons.length === 0}>
        <p>You have no Képomon yet!</p>
      </If>
      <If condition={ownedPokemons.length !== 0}>
        <PokemonList pokemons={ownedPokemons} />
      </If>
    </>
  );
};

export default Collection;
