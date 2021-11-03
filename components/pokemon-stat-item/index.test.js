// External modules
import { render, screen } from '@testing-library/react';

// Internal modules
import PokemonStatItem from '@/components/pokemon-stat-item';
import { AppProvider } from '@/state/context';

describe('Pokemon Stat Item', () => {
  const pokemonStat = {
    name: 'hp',
  };

  it('renders a stat item', async () => {
    render(
      <AppProvider>
        <PokemonStatItem pokemonStat={pokemonStat} />
      </AppProvider>
    );

    const item = screen.getByTestId('item');
    expect(item).toBeInTheDocument();

    const heading = screen.getByText(pokemonStat.name);
    expect(heading).toBeInTheDocument();
  });
});
