// External modules
import Head from 'next/head';
import { useRouter } from 'next/router';

// Internal modules
import If from '@/components/if';
import Loading from '@/components/loading';
import PokemonDetails from '@/components/pokemon-details';
import usePokemon from '@/hooks/usePokemon';

const Pokemon = () => {
  const router = useRouter();
  const { name } = router.query;
  const { loading, error, pokemon } = usePokemon(name);

  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Head>
        <title>{`${name}'s Profile`}</title>
        <meta
          name="description"
          content={`The complete information about ${name}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <If condition={loading}>
        <Loading />
      </If>
      <If condition={!loading}>
        <PokemonDetails pokemon={pokemon} />
      </If>
    </>
  );
};

export default Pokemon;
