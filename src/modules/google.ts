const SET = 'google/SET';

export const setGoogle = (enabled: boolean) => ({ type: SET, enabled });

const initialState = {
  enabled: false
};

const engine = (state = initialState, action: any) => {
  switch (action.type) {
    case SET:
      return {
        enabled: action.enabled
      };
    default:
      return state;
  }
};

export default engine;
