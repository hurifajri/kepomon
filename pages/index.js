// External modules
import Head from 'next/head';
import Image from 'next/image';

// Internal modules
import PokemonList from '@/components/pokemon-list';
import client from '@/graphql/client';
import { OPTIONS } from '@/graphql/constants';
import { GET_POKEMONS } from '@/graphql/query';
import logo from '@/public/logo.png';

const Home = ({ pokemons }) => (
  <div>
    <Head>
      <title>Kepomon</title>
      <meta name="description" content="Let's catch a kepo monster" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <header>
        <Image src={logo} alt="Kepomon logo" />
      </header>
      <main>
        <PokemonList pokemons={pokemons} />
      </main>
    </div>
  </div>
);

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_POKEMONS,
    variables: OPTIONS,
  });

  return {
    props: {
      pokemons: data.pokemons.results,
    },
  };
};

export default Home;
