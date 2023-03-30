import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  useAddSuperHeroData,
  useSuperHeroesData,
} from '../hooks/useSuperHeroesData';

export default function RQSuperHeroesPage() {
  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');

  const onSuccess = (data) => {
    console.log('Perform side effect after data fetching', data);
  };

  const onError = (error) => {
    console.log('Perform side effect after data error', error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  // console.log({ isLoading, isFetching });
  const {
    mutate: addHero,
    isLoading: addIsLoading,
    isError: addIsError,
    error: addError,
  } = useAddSuperHeroData();

  if (isLoading || addIsLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  if (addIsError) {
    return <h2>{addError.message}</h2>;
  }

  const handleAddHeroClick = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };

  return (
    <>
      <h2>RQSuperHeroes Page</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      <button onClick={refetch}>Fetch heroes</button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.name}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </>
  );
}
