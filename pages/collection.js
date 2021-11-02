// External modules
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Internal modules
import Heading from '@/components/heading';
import If from '@/components/if';
import MessageBox from '@/components/message-box';
import PokemonList from '@/components/pokemon-list';
import useMounted from '@/hooks/useMounted';
import { useAppContext } from '@/state/context';
import { headingStyle, sectionStyle } from '@/styles/shared';

// Dynamic internal modules
const Dialog = dynamic(() => import('@/components/dialog'), { ssr: false });

const Collection = () => {
  const router = useRouter();

  const { ownedPokemons, dialogOpen, selectedPokemon, dispatch } =
    useAppContext();
  const { nickname, name, image } = selectedPokemon ?? {};
  const mounted = useMounted();

  // Handle close dialog
  const handleClose = async event => {
    event.preventDefault();

    const { toggleDialog } = await import('@/state/actions');
    dispatch(toggleDialog());
  };

  const handleRelease = async event => {
    event.preventDefault();

    const { releasePokemon, toggleDialog } = await import('@/state/actions');
    dispatch(releasePokemon(selectedPokemon));
    dispatch(toggleDialog());
  };

  // Go to pokemon list
  const handleHome = () => router.push('/');

  return (
    <>
      <Head>
        <title>Collection</title>
        <meta name="description" content="My collection" />
      </Head>
      {/* Ensure the nodes are rendered once mounted */}
      <If condition={mounted}>
        <If condition={ownedPokemons.length === 0}>
          <MessageBox
            message="You have no Képomon yet!"
            clickText="Catch one?"
            onClick={handleHome}
          />
        </If>
        <If condition={ownedPokemons.length !== 0}>
          <PokemonList pokemons={ownedPokemons} />
        </If>
        <If condition={selectedPokemon !== null}>
          <Dialog
            open={dialogOpen}
            onCancel={handleClose}
            cancelText="Keep"
            onConfirm={handleRelease}
            confirmText="Release"
          >
            <Heading level={1} css={headingStyle}>
              Are you sure to release this adorable Képomon?
            </Heading>
            <section css={sectionStyle}>
              <Image src={image} alt={name} width={100} height={100} />
              <Heading level={2}>
                {`${nickname ? nickname + ' The ' : ''} ${name}`}
              </Heading>
            </section>
          </Dialog>
        </If>
      </If>
    </>
  );
};

export default Collection;
