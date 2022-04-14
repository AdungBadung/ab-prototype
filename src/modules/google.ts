const SET_ENABLE = 'google/SET_ENABLE';

export const setGoogle = (enable: boolean) => ({
  type: SET_ENABLE,
  enable
});

type engineState = {
  enabled: boolean;
};

const initialState: engineState = {
  enabled: false
};

const searchEngine = (state = initialState, action: { type: any; enable: any }) => {
  switch (action.type) {
    case SET_ENABLE:
      return {
        enabled: action.enable
      };
    default:
      return state;
  }
};

export default searchEngine;
