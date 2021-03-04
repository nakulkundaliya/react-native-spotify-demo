import * as types from './types';
import { getPlayListsAPI } from '../../../utils/API';

export default (dispatch, appContext) => {
  const getPlayLists = async (offset) => {
    try {
      const response = await getPlayListsAPI(offset);
      dispatch({
        type: types.PLAYLISTS_REQUEST_SUCCESS,
        value: response,
      });
      return response;
    } catch (error) {
      dispatch({
        type: types.PLAYLISTS_REQUEST_FAILED,
      });
    }
  };
  return {
    getPlayLists,
  };
};
