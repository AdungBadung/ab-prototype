import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GlobalLayout from '@layouts/GlobalLayout';
import ForYou from './ForYou';
import Home from './Home';
import My from './My';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={'*'} element={<GlobalLayout />}>
          <Route path={'search/*'} element={<Home />} />
          <Route path={'for-you/*'} element={<ForYou />} />
          <Route path={'my/*'} element={<My />} />
          <Route path={'*'} element={<Navigate to="/search" replace={true} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
