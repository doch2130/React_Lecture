import { useState } from 'react';
import PostsList1 from './PostsList1';
import PostsList2 from './PostsList2';

export default function App2() {
  const [currentPage, setCurrentPage] = useState(<PostsList1 />);
  return (
    <div>
      <button onClick={() => setCurrentPage(<PostsList1 />)}>
        Posts List1
      </button>
      <button onClick={() => setCurrentPage(<PostsList2 />)}>
        Posts List2
      </button>
      <br />
      {currentPage}
    </div>
  );
}
