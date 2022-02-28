import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} exact={true} />
      <Route path=":category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
