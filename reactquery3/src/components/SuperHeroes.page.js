import axios from 'axios';
import { useState, useEffect } from 'react';

export default function SuperHeroesPage() {
  const [isLaoding, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4000/superheroes')
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLaoding) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h2>SuperHeroes Page</h2>
      {data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
}
