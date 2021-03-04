import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const BASE_URL = 'https://api.spotify.com/v1/';

export default apiRequest = async ({ method, url, data = {} }) => {
  const token = await AsyncStorage.getItem('@save_token');
  return axios({
    method,
    url: BASE_URL + url,
    data,
    headers: { Authorization: `Bearer ${token}` },
  }).then(
    (res) => {
      return res;
    },
    (error) => {
      alert(error);
      return error;
    }
  );
};
