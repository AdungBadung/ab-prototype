import { useAppSelector, useAppDispatch } from '@store/hooks';
import { Button } from '@mui/material';
import { actions } from '@store/app/slice';

const Search = () => {
  const data = useAppSelector((state) => {
    return state.app.dummy;
  });
  const dispatch = useAppDispatch();
  const handleToggle = () => {
    dispatch(actions.changeDummy(!data));
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
