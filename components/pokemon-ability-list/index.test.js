// External modules
import { render, screen } from '@testing-library/react';

// Internal modules
import PokemonAbilityList from '@/components/pokemon-ability-list';
import { AppProvider } from '@/state/context';

describe('Pokemon Ability List', () => {
  const pokemonAbilities = [
    {
      ability: {
        name: 'blaze',
      },
    },
    {
      ability: {
        name: 'solar-power',
      },
    },
  ];

  it('renders a list of ability items', async () => {
    render(
      <AppProvider>
        <PokemonAbilityList pokemonAbilities={pokemonAbilities} />
      </AppProvider>
    );

    const list = screen.getByTestId('list');
    expect(list).toBeInTheDocument();

    pokemonAbilities.map((_, index) => {
      const item = screen.getAllByTestId('item')[index];
      expect(item).toBeInTheDocument();

      const heading = screen.getAllByTestId('heading')[index];
      expect(heading).toBeInTheDocument();
    });
  });
});
