import { css } from '@emotion/react';
import axios from 'axios';
import { RootState } from '../modules';
import { setGoogle } from '../modules/google';
import { setNaver } from '../modules/naver';
import { setTwitter } from '../modules/twitter';
import { useRef } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';

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
  applink: css({
    color: '#61dafb'
  })
};

const credential = 'secret';

const Search = () => {
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
    <div css={styles.appheader}>
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
    </div>
  );
};

export default Search;
