// External modules
import Head from 'next/head';

// Internal modules
import If from '@/components/if';
import PokemonList from '@/components/pokemon-list';
import useMounted from '@/hooks/useMounted';
import { useAppContext } from '@/state/context';

const Collection = () => {
  const { ownedPokemons } = useAppContext();
  const mounted = useMounted();

  return (
    <>
      <Head>
        <title>Collection</title>
        <meta name="description" content="My collection" />
      </Head>
      <If condition={mounted}>
        <If condition={ownedPokemons.length === 0}>
          <p>You have no Képomon yet!</p>
        </If>
        <If condition={ownedPokemons.length !== 0}>
          <PokemonList pokemons={ownedPokemons} />
        </If>
      </If>
    </>
  );
};

export default Collection;
