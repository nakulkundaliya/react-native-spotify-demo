import { authorize, refresh } from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CLIENT_ID, CLIENT_SECRET } from '@env';

const spotifyAuthConfig = {
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUrl: 'com.spotifyexample://oauthredirect',
  scopes: [
    'playlist-read-private',
    'playlist-modify-public',
    'playlist-modify-private',
    'user-library-read',
    'user-library-modify',
    'user-top-read',
  ],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};
const getToken = async () => {
  try {
    const result = await authorize(spotifyAuthConfig);
    AsyncStorage.setItem('@save_token', result.accessToken);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getRefreshToken = async (refreshToken) => {
  try {
    const result = await refresh(spotifyAuthConfig, {
      refreshToken: refreshToken,
    });
    return result;
  } catch (error) {}
};

export { getToken, getRefreshToken };
