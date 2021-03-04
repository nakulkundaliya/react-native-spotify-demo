import apiRequest from './request';
const LIMIT = 10;
const getPlayListsAPI = async (offset) => {
  const response = await apiRequest({
    method: 'GET',
    url: `browse/featured-playlists?limit=${LIMIT}&offset=${offset}`,
  });
  console.log('=====response', response);
  return response;
};

const getTrackByPlayListIdAPI = async (id) => {
  const response = await apiRequest({
    method: 'GET',
    url: `playlists/${id}/tracks`,
  });
  return response;
};

const getAblumByTrackIdAPI = async (id) => {
  const response = await apiRequest({
    method: 'GET',
    url: `albums/${id}/tracks`,
  });
  return response;
};

export { getPlayListsAPI, getTrackByPlayListIdAPI, getAblumByTrackIdAPI };
