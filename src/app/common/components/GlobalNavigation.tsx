import { Box, Tab, Tabs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import RecommendIcon from '@mui/icons-material/Recommend';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useGlobalNavigation from '../hooks/useGlobalNavigation';

const GlobalNavigation = () => {
  const { selectedTab, handleChange } = useGlobalNavigation();
  return (
    <Box
      sx={{
        position: 'relative',
        top: '100vh',
        width: '100%',
        mt: '-5em',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Tabs value={selectedTab} onChange={handleChange}>
        <Tab icon={<HomeIcon />} label="HOME" />
        <Tab icon={<RecommendIcon />} label="RECOMMEND" />
        <Tab icon={<FavoriteIcon />} label="MY" />
      </Tabs>
    </Box>
  );
};

export default GlobalNavigation;
