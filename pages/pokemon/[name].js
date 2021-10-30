import { useRouter } from 'next/router';

const Pokemon = () => {
  const router = useRouter();
  const { name } = router.query;
  console.log(router);

  return <p>Pokemon: {name}</p>;
};

export default Pokemon;
