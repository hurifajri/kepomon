// External modules
import { render, screen } from '@testing-library/react';

// Internal modules
import PokemonTypeItem from '@/components/pokemon-type-item';
import { AppProvider } from '@/state/context';

describe('Pokemon Type Item', () => {
  const pokemonType = {
    name: 'fire',
  };

  it('renders a type item', async () => {
    render(
      <AppProvider>
        <PokemonTypeItem pokemonType={pokemonType} />
      </AppProvider>
    );

    const item = screen.getByTestId('item');
    expect(item).toBeInTheDocument();
  });
});
