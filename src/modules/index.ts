import { combineReducers } from 'redux';

import google from './google';
import naver from './naver';
import twitter from './twitter';

const rootReducer = combineReducers({
  google,
  naver,
  twitter
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
