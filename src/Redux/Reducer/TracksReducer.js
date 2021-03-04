import React, { useReducer } from 'react';
import * as types from '../Action/types';
import { useTracksActions } from '../Action';

const TracksContext = React.createContext();
const { Provider } = TracksContext;
const initialState = {
  loading: false,
  tracks: [],
};

const reducer = (state = initialState, action) => {
  const { type, value } = action;
  switch (type) {
    case types.TRACKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.TRACKS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        tracks: value,
      };
    case types.TRACKS_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        tracks: [],
      };
  }
  return state;
};

const TracksProvider = ({ appContext, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useTracksActions(dispatch, appContext);
  return <Provider value={{ state, actions }}>{children}</Provider>;
};

export { TracksProvider, TracksContext };
