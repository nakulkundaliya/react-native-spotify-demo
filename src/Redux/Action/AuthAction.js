import { getToken } from '../../../utils/SpotifyAuth';
import * as types from './types';
export default (dispatch, appContext) => {
  const login = async (payload) => {
    try {
      const { navigation } = payload;
      const token = await getToken();
      navigation.navigate('HomeStack');
      dispatch({
        type: types.LOGIN_REQUEST_SUCCESS,
        value: token,
      });
      return token;
    } catch (error) {
      dispatch({
        type: types.LOGIN_REQUEST_FAILED,
      });
    }
  };
  return {
    login,
  };
};
