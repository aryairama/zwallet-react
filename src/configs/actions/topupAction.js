import { default as axios } from '../axiosConfig';
import swal from 'sweetalert';
export const topupDirect = (formData,history) => async (dispatch, getState) => {
  try {
    const dataTopup = new FormData();
    dataTopup.append('amount', formData.amount);
    dataTopup.append('image_topup', formData.image_topup);
    axios.post('/main/topup', dataTopup, {
      headers: {
        Authorization: `Bearer ${getState().user.user.accessToken}`,
      },
    });
    swal('Success', 'Check status topup on history', 'success');
    history.push('/dashboard')
  } catch (error) {
    swal('Error', error.response.data.message, 'error');
  }
  dispatch({ type: 'REQUEST' });
};
