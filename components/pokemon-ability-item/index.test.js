// External modules
import { render, screen } from '@testing-library/react';

// Internal modules
import PokemonAbilityItem from '@/components/pokemon-ability-item';
import { AppProvider } from '@/state/context';

describe('Pokemon Ability Item', () => {
  const pokemonAbility = {
    name: 'blaze',
  };

  it('renders an ability item', async () => {
    render(
      <AppProvider>
        <PokemonAbilityItem pokemonAbility={pokemonAbility} />
      </AppProvider>
    );

    const item = screen.getByTestId('item');
    expect(item).toBeInTheDocument();

    const heading = screen.getByText(pokemonAbility.name);
    expect(heading).toBeInTheDocument();
  });
});
