import { default as axios } from '../axiosConfig';
export const transaction = (data) => (dispatch) => {
  dispatch({ type: 'TRANSACTION', payload: data });
};
export const transactionDone = () => (dispatch) => {
  dispatch({ type: 'DELETE_TRANSACTION' });
};
export const getTransaction =
  (limit, order, page = 1, search = '', fieldOrder = '') =>
  async (dispatch, getState) => {
    try {
      const { data, pagination } = await (
        await axios.get(`/main/gettransactions?order=${order}&limit=${limit}&page=${page}&fieldOrder=${fieldOrder}`, {
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

export const getTransactionById = (transaction_id, history) => async (dispatch, getState) => {
  try {
    const { data } = await (
      await axios.get(`main/showtransaction/${transaction_id}`, {
        headers: {
          Authorization: `Bearer ${getState().user.user.accessToken}`,
        },
      })
    ).data;
    console.log(transaction_id);
    console.log('lorem', data);
    dispatch({ type: 'GET_TRANSACTION_BY_ID', payload: data });
  } catch (error) {
    console.log(error.response);
  }
};
