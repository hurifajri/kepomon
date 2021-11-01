// External modules
import dynamic from 'next/dynamic';

// Internal modules
const Bug = dynamic(() => import('@/components/icons/types/bug'));
const Electric = dynamic(() => import('@/components/icons/types/electric'));
const Fighting = dynamic(() => import('@/components/icons/types/fighting'));
const Fire = dynamic(() => import('@/components/icons/types/fire'));
const Flying = dynamic(() => import('@/components/icons/types/flying'));
const Ghost = dynamic(() => import('@/components/icons/types/ghost'));
const Grass = dynamic(() => import('@/components/icons/types/grass'));
const Ground = dynamic(() => import('@/components/icons/types/ground'));
const Ice = dynamic(() => import('@/components/icons/types/ice'));
const Normal = dynamic(() => import('@/components/icons/types/normal'));
const Poison = dynamic(() => import('@/components/icons/types/poison'));
const Psychic = dynamic(() => import('@/components/icons/types/psychic'));
const Rock = dynamic(() => import('@/components/icons/types/rock'));
const Steel = dynamic(() => import('@/components/icons/types/steel'));
const Water = dynamic(() => import('@/components/icons/types/water'));

/**
 * Hook to generate/map pokemon type icon
 * @param {String} type The given key of object
 * @returns {Element} The selected icon
 */
const usePokemonTypesIcon = type => {
  const icons = {
    bug: <Bug size={1} />,
    electric: <Electric size={1} />,
    fighting: <Fighting size={1} />,
    fire: <Fire size={1} />,
    flying: <Flying size={1} />,
    ghost: <Ghost size={1} />,
    grass: <Grass size={1} />,
    ground: <Ground size={1} />,
    ice: <Ice size={1} />,
    normal: <Normal size={1} />,
    poison: <Poison size={1} />,
    psychic: <Psychic size={1} />,
    rock: <Rock size={1} />,
    steel: <Steel size={1} />,
    water: <Water size={1} />,
  };

  const typeIcon = icons[type] ?? <Normal size={1} />;

  return typeIcon;
};

export default usePokemonTypesIcon;
