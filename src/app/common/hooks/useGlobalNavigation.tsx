import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useGlobalNavigation = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    switch (newValue) {
      case 0:
        navigate('/search');
        break;
      case 1:
        navigate('/for-you');
        break;
      case 2:
        navigate('/my');
        break;
      default:
        break;
    }
    setSelectedTab(newValue);
  };
  return { selectedTab, handleChange };
};

export default useGlobalNavigation;
