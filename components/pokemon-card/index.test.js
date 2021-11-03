// External modules
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useRouter } from 'next/router';
import mockRouter from 'next-router-mock';

// Internal modules
import PokemonCard from '@/components/pokemon-card';
import { AppProvider } from '@/state/context';

// eslint-disable-next-line @next/next/no-img-element
jest.mock('next/image', () => ({ src, alt }) => <img src={src} alt={alt} />);
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

describe('Pokemon Card', () => {
  beforeEach(() => mockRouter.setCurrentUrl('/pokemon/charmander'));

  const pokemon = {
    id: 4,
    name: 'charmander',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
  };

  it('renders a card of pokemon', () => {
    render(
      <AppProvider>
        <PokemonCard pokemon={pokemon} />
      </AppProvider>
    );

    const card = screen.getAllByTestId('card')[0];
    expect(card).toBeInTheDocument();

    const pokemonIdText = `#${String(pokemon.id).padStart(3, '0')}`;
    const pokemonId = screen.getByText(pokemonIdText);
    expect(pokemonId).toBeInTheDocument();

    const pokemonName = screen.getByText(pokemon.name);
    expect(pokemonName).toBeInTheDocument();

    const pokemonImage = screen.getByRole('img');
    expect(pokemonImage).toBeInTheDocument();
    expect(pokemonImage).toHaveAttribute('src', pokemon.image);
    expect(pokemonImage).toHaveAttribute('alt', pokemon.name);
  });

  it('directs to pokemon detail page once card is clicked', async () => {
    render(
      <AppProvider>
        <PokemonCard pokemon={pokemon} />
      </AppProvider>
    );

    const { result } = renderHook(() => useRouter());

    const link = screen.getByTestId('link');
    expect(link).toBeInTheDocument();

    fireEvent.click(link);
    await waitFor(() => {
      expect(result.current).toMatchObject({
        pathname: `/pokemon/${pokemon.name}`,
      });
    });
  });
});
