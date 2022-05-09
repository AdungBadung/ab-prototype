import { useAppSelector } from '@store/hooks';
import { Button } from '@mui/material';

const Search = () => {
  const data = useAppSelector((state) => {
    return state.app.dummy;
  });
  const handleToggle = () => {
    console.info(data);
  };
  return (
    <>
      <div>Search</div>
      <div>{`Store data : ${data}`}</div>
      <Button onClick={handleToggle}>Toggle Store Data</Button>
    </>
  );
};

export default Search;
