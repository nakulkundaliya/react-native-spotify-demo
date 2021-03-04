import * as types from './types';
import { getTrackByPlayListIdAPI } from '../../../utils/API';

export default (dispatch, appContext) => {
  const getTracksByPlaylistId = async (id) => {
    try {
      const response = await getTrackByPlayListIdAPI(id);
      dispatch({
        type: types.TRACKS_REQUEST_SUCCESS,
        value: response.data.items,
      });
      return response;
    } catch (error) {
      dispatch({
        type: types.TRACKS_REQUEST_FAILED,
      });
    }
  };
  return {
    getTracksByPlaylistId,
  };
};
