import React, { useRef } from 'react';
import { Box } from '@mui/material';
import { css, keyframes } from '@emotion/react';
import logo from '../logo.svg';

import { RootState } from '../modules/index';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import axios from 'axios';
import { setGoogle } from '../modules/google';
import { setNaver } from '../modules/naver';
import { setTwitter } from '../modules/twitter';

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

const credential = 'secret';

function Main() {
  const input = useRef<string>('');

  const dispatch = useDispatch();
  const { google, twitter, naver } = useSelector((state: RootState) => ({
    google: state.google.enabled,
    twitter: state.twitter.enabled,
    naver: state.naver.enabled
  }));

  const result = useQuery(
    ['search'],
    () => {
      return axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${credential}&q=${input.current}`
      );
    },
    { enabled: false, retry: false }
  );

  const { isLoading, data, refetch, error, isError } = result;

  return (
    <Box css={styles.appheader}>
      <Box css={styles.title}>Hello World!!</Box>
      <div css={styles.title}>
        <input
          type="checkbox"
          value="google"
          onChange={(e) => {
            dispatch(setGoogle(e.target.checked));
          }}
        />
        google
        <input
          type="checkbox"
          value="naver"
          onChange={(e) => {
            dispatch(setNaver(e.target.checked));
          }}
        />
        naver
        <input
          type="checkbox"
          value="twitter"
          onChange={(e) => {
            dispatch(setTwitter(e.target.checked));
          }}
        />
        twitter
      </div>
      <div css={styles.title}>
        {google ? 'google' : ''} {naver ? 'naver' : ''} {twitter ? 'twitter' : ''}
      </div>
      <img src={logo} css={styles.applogo} alt="logo" />
      {isLoading
        ? 'loading..'
        : isError
        ? (error as any).message
        : data?.data['items']?.map((item: any, index: number) => {
            console.log(item);
            return <li key={index}>{item.htmlTitle}</li>;
          })}
      <input
        onChange={(e) => {
          input.current = e.target.value;
        }}
      ></input>
      <button onClick={() => refetch()}>search</button>
    </Box>
  );
}

export default Main;
