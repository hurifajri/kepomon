// External modules
import { render, screen } from '@testing-library/react';

// Internal modules
import PokemonMoveList from '@/components/pokemon-move-list';
import { AppProvider } from '@/state/context';

describe('Pokemon Move List', () => {
  const pokemonMoves = [
    {
      move: {
        name: 'fire-punch',
      },
    },
    {
      move: {
        name: 'mega-punch',
      },
    },
  ];

  it('renders a list of move items', async () => {
    render(
      <AppProvider>
        <PokemonMoveList pokemonMoves={pokemonMoves} />
      </AppProvider>
    );

    const list = screen.getByTestId('list');
    expect(list).toBeInTheDocument();

    pokemonMoves.map((_, index) => {
      const item = screen.getAllByTestId('item')[index];
      expect(item).toBeInTheDocument();
    });
  });
});
