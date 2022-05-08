import { Outlet } from 'react-router-dom';
import SearchBar from '@app/home/components/SearchBar';

const HomeLayout = () => {
  /**
   * TODO Home (search page) 에서 검색 등의 이동으로 패스가 변경되어도 계속 유지가 될 컴포넌트를 추가
   * UI 상단의 검색 창 및 검색 엔진 부분
   */
  return (
    <>
      <SearchBar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
