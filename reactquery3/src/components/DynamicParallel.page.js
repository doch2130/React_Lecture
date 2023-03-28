import { useQueries } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export default function DynamicParallelPage({ heroIds }) {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHeroes(id),
      };
    })
  );
  console.log({ queryResults });
  return <h2>DynamicParallel Page</h2>;
}
