import { default as axios } from '../axiosConfig';
export const transaction = (data) => (dispatch) => {
  dispatch({ type: 'TRANSACTION', payload: data });
};
export const transactionDone = () => (dispatch) => {
  dispatch({ type: 'DELETE_TRANSACTION' });
};
export const getTransaction = () => async (dispatch, getState) => {
  try {
    const { data, pagination } = await (
      await axios.get(`/main/gettransactions`, {
        headers: {
          Authorization: `Bearer ${getState().user.user.accessToken}`,
        },
      })
    ).data;
    dispatch({ type: 'GET_TRANSACTION', payload: { data, pagination } });
  } catch (error) {
    console.log(error);
  }
};
