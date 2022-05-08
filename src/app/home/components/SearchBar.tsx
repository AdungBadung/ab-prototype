import useSearchBar from '@app/home/hooks/useSearchBar';

const SearchBar = () => {
  const { dummy } = useSearchBar();
  return <div>{`SearchBar ${dummy}`}</div>;
};

export default SearchBar;
