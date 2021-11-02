// External modules
import Image from 'next/image';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

// Internal modules
import Dialog from '@/components/dialog';
import Heading from '@/components/heading';
import If from '@/components/if';
import List from '@/components/list';
import PokemonItem from '@/components/pokemon-item';
import {
  headingStyle,
  listStyle,
  sectionStyle,
} from '@/components/pokemon-list/style';
import { releasePokemon, toggleDialog } from '@/state/actions';
import { useAppContext } from '@/state/context';

const PokemonList = ({ pokemons }) => {
  const router = useRouter();
  const isCollectionPage = router?.pathname === '/collection';

  const { dialogOpen, selectedPokemon, dispatch } = useAppContext();
  const { nickname, name, image } = selectedPokemon ?? {};

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
    <If condition={pokemons?.length > 0}>
      <List css={listStyle}>
        {
          // Iterate each pokemon from pokemons
          pokemons?.map(pokemon => (
            <PokemonItem
              pokemon={pokemon}
              key={pokemon.nickname ?? pokemon.id}
            />
          ))
        }
      </List>
      <If condition={isCollectionPage && selectedPokemon !== null}>
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
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.array,
  ]).isRequired,
};

export default PokemonList;
