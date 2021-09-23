import { default as axios } from '../axiosConfig';
import swal from 'sweetalert';
export const topupDirect = (formData, history) => async (dispatch, getState) => {
  try {
    const dataTopup = new FormData();
    dataTopup.append('amount', formData.amount);
    dataTopup.append('image_topup', formData.image_topup);
    await axios.post('/main/topup', dataTopup, {
      headers: {
        Authorization: `Bearer ${getState().user.user.accessToken}`,
      },
    });
    swal('Success', 'Check status topup on history', 'success');
    history.push('/dashboard');
  } catch (error) {
    swal('Error', error.response.data.message, 'error');
  }
  dispatch({ type: 'REQUEST' });
};
export const getTopUp =
  (limit, order, page = 1, search = '', fieldOrder = '') =>
  async (dispatch, getState) => {
    try {
      const { data, pagination } = await (
        await axios.get(
          `/main/gettopup?order=${order}&limit=${limit}&page=${page}&keyword=${search}&fieldOrder=${fieldOrder}`,
          {
            headers: {
              Authorization: `Bearer ${getState().user.user.accessToken}`,
            },
          }
        )
      ).data;
      dispatch({ type: 'GET_ALL_TOPUP', payload: { data, pagination } });
    } catch (error) {
      console.log(error);
    }
  };
export const getTopUpId = (id) => async (dispatch, getState) => {
  try {
    const { data } = await (
      await axios.get(`/main/showtransaction/${id}`, {
        headers: {
          Authorization: `Bearer ${getState().user.user.accessToken}`,
        },
      })
    ).data;
    dispatch({ type: 'GET_TOPUP_ID', payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const changeStatus = (status, transaction_id, user_id, amount) => async (dispatch, getState) => {
  try {
    const body = { status, transaction_id, user_id, amount };
    const { data } = await (
      await axios.post(`/main/updatetransaction`, body, {
        headers: {
          Authorization: `Bearer ${getState().user.user.accessToken}`,
        },
      })
    ).data;
    dispatch({ type: 'CHANGE_STATUS', payload: { data } });
  } catch (error) {
    console.log(error);
  }
};

export const topupPaymentGateway = (formData, history) => async (dispatch, getState) => {
  try {
    await axios.post('/main/topup-payment-gateway', formData, {
      headers: {
        Authorization: `Bearer ${getState().user.user.accessToken}`,
      },
    });
    swal('Success', 'Check status topup on history', 'success');
    history.push('/dashboard');
  } catch (error) {
    swal('Error', error?.response?.data?.message, 'error');
  }
  dispatch({ type: 'REQUEST' });
};
