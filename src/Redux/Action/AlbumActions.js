import * as types from './types';
import { getAblumByTrackIdAPI } from '../../../utils/API';

export default (dispatch, appContext) => {
  const getAblumByTrackId = async (id) => {
    try {
      const response = await getAblumByTrackIdAPI(id);
      dispatch({
        type: types.ALBUM_REQUEST_SUCCESS,
        value: response.data.items,
      });
      return response;
    } catch (error) {
      dispatch({
        type: types.ALBUM_REQUEST_FAILED,
      });
    }
  };
  return {
    getAblumByTrackId,
  };
};
