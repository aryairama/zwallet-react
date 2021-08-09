import axios from 'axios';
import { store } from '../configs/redux/store';
import { refreshToken } from './actions/userAction';
const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    const { message, statusCode } = error.response.data;
    if (statusCode === 401 && message === 'token expired' && !originalRequest._retry) {
      try {
        originalRequest._retry = true;
        const data = await (
          await axios.post(`${process.env.REACT_APP_API_URL}users/refreshtoken`, {
            refreshToken: store.getState().user.user.refreshToken,
          })
        ).data;
        error.config.headers['Authorization'] = 'Bearer ' + data.data.accessToken;
        store.dispatch(refreshToken(data.data));
        return axiosConfig(originalRequest);
      } catch (error) {
        store.dispatch({ type: 'LOGOUT', payload: {} });
      }
    }
    return Promise.reject(error);
  }
);

export default axiosConfig;
