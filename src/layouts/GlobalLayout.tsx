import { Outlet } from 'react-router-dom';
import GlobalNavigation from '@app/common/components/GlobalNavigation';

const GlobalLayout = () => {
  /**
   * TODO Global 하게 검색 등의 이동으로 패스가 변경되어도 계속 유지가 될 컴포넌트를 추가
   * UI 하단의 네비게이션 컴포넌트
   */
  return (
    <>
      <GlobalNavigation />
      <Outlet />
    </>
  );
};

export default GlobalLayout;
