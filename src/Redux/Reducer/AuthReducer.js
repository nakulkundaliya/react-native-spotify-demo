import React, { useReducer } from 'react';
import * as types from '../Action/types';
import { useAuthActions } from '../Action';
const AuthContext = React.createContext();
const { Provider } = AuthContext;
const initialState = {
  loading: false,
  token: null,
};

const reducer = (state = initialState, action) => {
  const { type, value } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        token: value,
      };
    case types.LOGIN_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        token: null,
      };
  }
  return state;
};

const AuthProvider = ({ appContext, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useAuthActions(dispatch, appContext);
  return <Provider value={{ state, actions }}>{children}</Provider>;
};

export { AuthProvider, AuthContext };
