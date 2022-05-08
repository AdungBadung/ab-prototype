import { Routes, Route, Navigate } from 'react-router-dom';
import HomeLayout from '@layouts/HomeLayout';
import Search from './Search';
import Detail from './Detail';

const Home = () => {
  return (
    <Routes>
      <Route path={'*'} element={<HomeLayout />}>
        <Route index element={<Search />} />
        <Route path={'detail'} element={<Detail />} />
        <Route path={'*'} element={<Navigate to="/search" replace={true} />} />
      </Route>
    </Routes>
  );
};

export default Home;
