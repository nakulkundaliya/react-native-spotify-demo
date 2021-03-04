import React, { useReducer } from 'react';
import * as types from '../Action/types';
import { useAlbumActions } from '../Action';

const AlbumContext = React.createContext();
const { Provider } = AlbumContext;
const initialState = {
  loading: false,
  album: [],
};

const reducer = (state = initialState, action) => {
  const { type, value } = action;
  switch (type) {
    case types.ALBUM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.ALBUM_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        album: value,
      };
    case types.ALBUM_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        album: [],
      };
  }
  return state;
};

const AlbumProvider = ({ appContext, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useAlbumActions(dispatch, appContext);
  return <Provider value={{ state, actions }}>{children}</Provider>;
};

export { AlbumProvider, AlbumContext };
