import useGlobalNavigation from '@app/common/hooks/useGlobalNavigation';

const GlobalNavigation = () => {
  const { dummy } = useGlobalNavigation();
  return <div>{`GlobalNavigation ${dummy}`}</div>;
};

export default GlobalNavigation;
