import { Routes, Route } from 'react-router-dom';
import App2 from './App2';
import Test from './components/Test';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App2 />} />
        <Route path="/posts" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
