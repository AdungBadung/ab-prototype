import React, { useRef } from 'react';

import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { setGoogle } from './modules/google';
import { setNaver } from './modules/naver';
import { setTwitter } from './modules/twitter';
import { RootState } from 'modules';

const credential = 'AIzaSyC6WLU4aiWMvJEcxR3vO7g7n2OTw7dKCDU&cx=4709dc10703c90e51';

function App() {
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
    <div className="App">
      <header className="App-header">
        <div>
          <input
            type="checkbox"
            value="google"
            onChange={(e) => {
              dispatch(setGoogle(e.target.checked));
            }}
          />
          Google
          <input
            type="checkbox"
            value="naver"
            onChange={(e) => {
              dispatch(setNaver(e.target.checked));
            }}
          />
          Naver
          <input
            type="checkbox"
            value="twitter"
            onChange={(e) => {
              dispatch(setTwitter(e.target.checked));
            }}
          />
          Twitter
        </div>

        <div>
          {google ? 'google' : ''} {naver ? 'naver' : ''} {twitter ? 'twitter' : ''}
        </div>

        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
