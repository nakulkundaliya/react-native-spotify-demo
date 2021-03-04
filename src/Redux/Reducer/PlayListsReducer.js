import React, { useReducer } from 'react';
import * as types from '../Action/types';
import { usePlayListsActions } from '../Action';

const PlayListContext = React.createContext();
const { Provider } = PlayListContext;
const initialState = {
  loading: false,
  playlists: [],
  offset: 0,
  next: null,
};
const LIMIT = 10;
const reducer = (state = initialState, action) => {
  const { type, value } = action;
  switch (type) {
    case types.PLAYLISTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.PLAYLISTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        playlists: [...state.playlists, ...value.data.playlists.items],
        offset: value.data.playlists.offset + LIMIT,
        next: value.data.playlists.next,
      };
    case types.PLAYLISTS_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        playlists: [],
      };
  }
  return state;
};

const PlayListProvider = ({ appContext, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = usePlayListsActions(dispatch, appContext);
  return <Provider value={{ state, actions }}>{children}</Provider>;
};

export { PlayListProvider, PlayListContext };
