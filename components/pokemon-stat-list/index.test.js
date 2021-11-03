// External modules
import { render, screen } from '@testing-library/react';

// Internal modules
import PokemonStatList from '@/components/pokemon-stat-list';
import { AppProvider } from '@/state/context';

describe('Pokemon Stat List', () => {
  const pokemonStats = [
    {
      stat: {
        name: 'hp',
      },
    },
    {
      stat: {
        name: 'attack',
      },
    },
  ];

  it('renders a list of ability items', async () => {
    render(
      <AppProvider>
        <PokemonStatList pokemonStats={pokemonStats} />
      </AppProvider>
    );

    const list = screen.getByTestId('list');
    expect(list).toBeInTheDocument();

    pokemonStats.map((_, index) => {
      const item = screen.getAllByTestId('item')[index];
      expect(item).toBeInTheDocument();
    });
  });
});
