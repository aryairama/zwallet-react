import { default as axios } from '../axiosConfig';
import swal from 'sweetalert';
export const transfer = (formData, history) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(
      '/main/transfer',
      {
        user_reciever: formData.user_reciever,
        amount: formData.amount,
        description: formData.description,
      },
      {
        headers: {
          Authorization: `Bearer ${getState().user.user.accessToken}`,
        },
      }
    );
    if (data.statusCode === 200) {
      dispatch({ type: 'LOGIN', payload: { ...getState().user.user, saldo: formData.amountLeft } });
      dispatch({ type: 'DELETE_TRANSACTION' });
      swal('Success', 'successful transfer', 'success');
      history.push('/transfer');
    }
  } catch (error) {
    swal('Error', error?.response?.data?.message, 'error');
  }
};
