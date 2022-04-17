import React from 'react';
import { Box } from '@mui/material';
import { css, keyframes } from '@emotion/react';
import logo from '../logo.svg';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const applogospin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const styles = {
  title: css({
    color: 'white',
    fontSize: '2rem'
  }),
  appheader: css({
    backgroundColor: 'black',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }),
  applogo: css({
    height: '40vmin',
    PointerEvent: 'none',
    animation: `${applogospin} infinite 20s linear`
  }),
  applink: css({
    color: '#61dafb'
  })
};

function Main() {
  return (
    <Box css={styles.appheader}>
      <Box css={styles.title}>Hello World!!</Box>
      <img src={logo} css={styles.applogo} alt="logo" />
      <li>
        <Link to="/search">search</Link>
      </li>
      <li>
        <Link to="/settings">setting</Link>
      </li>
    </Box>
  );
}

export default Main;
