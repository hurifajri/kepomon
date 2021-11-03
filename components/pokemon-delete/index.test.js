// External modules
import { render, screen } from '@testing-library/react';

// Internal modules
import PokemonDelete from '@/components/pokemon-delete';
import { AppProvider } from '@/state/context';

describe('Pokemon Delete', () => {
  const pokemon = {
    id: 4,
    name: 'charmander',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
  };

  it('renders a delete button', async () => {
    render(
      <AppProvider>
        <PokemonDelete pokemon={pokemon} />
      </AppProvider>
    );

    const button = screen.getByTestId('delete');
    expect(button).toBeInTheDocument();
  });
});
