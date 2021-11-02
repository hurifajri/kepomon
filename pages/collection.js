// External modules
import Head from 'next/head';
import Image from 'next/image';

// Internal modules
import Dialog from '@/components/dialog';
import Heading from '@/components/heading';
import If from '@/components/if';
import PokemonList from '@/components/pokemon-list';
import useMounted from '@/hooks/useMounted';
import { releasePokemon, toggleDialog } from '@/state/actions';
import { useAppContext } from '@/state/context';
import { headingStyle, sectionStyle } from '@/styles/shared';

const Collection = () => {
  const { ownedPokemons, dialogOpen, selectedPokemon, dispatch } =
    useAppContext();
  const { nickname, name, image } = selectedPokemon ?? {};
  const mounted = useMounted();

  // Handle close dialog
  const handleClose = event => {
    event.preventDefault();

    dispatch(toggleDialog());
  };

  const handleRelease = event => {
    event.preventDefault();

    dispatch(releasePokemon(selectedPokemon));
    dispatch(toggleDialog());
  };

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
