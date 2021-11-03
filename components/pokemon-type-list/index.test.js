// External modules
import { render, screen } from '@testing-library/react';

// Internal modules
import PokemonTypeList from '@/components/pokemon-type-list';
import { AppProvider } from '@/state/context';

describe('Pokemon Type List', () => {
  const pokemonTypes = [
    {
      type: {
        name: 'fire',
      },
    },
    {
      type: {
        name: 'water',
      },
    },
  ];

  it('renders a list of type items', async () => {
    render(
      <AppProvider>
        <PokemonTypeList pokemonTypes={pokemonTypes} />
      </AppProvider>
    );

    const list = screen.getByTestId('list');
    expect(list).toBeInTheDocument();

    pokemonTypes.map((_, index) => {
      const item = screen.getAllByTestId('item')[index];
      expect(item).toBeInTheDocument();
    });
  });
});
