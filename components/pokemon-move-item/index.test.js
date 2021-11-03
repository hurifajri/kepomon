// External modules
import { render, screen } from '@testing-library/react';

// Internal modules
import PokemonMoveItem from '@/components/pokemon-move-item';
import { AppProvider } from '@/state/context';

describe('Pokemon Move Item', () => {
  const pokemonMove = {
    name: 'mega-punch',
  };

  it('renders an ability item', async () => {
    render(
      <AppProvider>
        <PokemonMoveItem pokemonMove={pokemonMove} />
      </AppProvider>
    );

    const item = screen.getByTestId('item');
    expect(item).toBeInTheDocument();

    const heading = screen.getByText(pokemonMove.name);
    expect(heading).toBeInTheDocument();
  });
});
