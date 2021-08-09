import { default as axios } from '../axiosConfig';

import swal from 'sweetalert';

export const register = (data, history) => async (dispatch) => {
  try {
    await axios.post('/users', {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
    });
    swal(
      'Success',
      'Register successful, check your email to activation',
      'success'
    );
    history.push('/login');
  } catch (error) {
    if (error?.response?.data?.statusCode === 422) {
      swal(
        'Failed',
        error?.response?.data?.error[0]?.msg || 'Back end mati',
        'error'
      );
    } else {
      swal(
        'Failed',
        error?.response?.data?.message || 'Back end mati',
        'error'
      );
    }
  }
  dispatch({ type: 'REQUEST' });
};

export const checkEmail = (data, history) => async (dispatch) => {
  try {
    await axios.post('/users/forgotPassword', {
      email: data.email,
    });
    swal('Success', 'check email to create a new password', 'success');
  } catch (error) {
    swal(
      'Failed',
      error?.response?.data?.message || 'Internal Server Error',
      'error'
    );
  }
  dispatch({ type: 'REQUEST' });
};

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await (await axios.post('users/login', formData)).data;
    dispatch({ type: 'LOGIN', payload: data });
    swal('Success', 'Login success', 'success');
    history.push('/dashboard');
  } catch (error) {
    if (error.response.data.statusCode === 400) {
      return { status: 'error', error: error.response.data };
    } else if (error.response.data.statusCode === 422) {
      return { status: 'error', error: error.response.data };
    } else {
      swal('error', 'failed', 'error');
    }
  }
};

export const logout = (history) => async (dispatch, getState) => {
  try {
    await axios.delete('users/logout', {
      headers: {
        Authorization: `Bearer ${getState().user.user.accessToken}`,
      },
    });
    dispatch({ type: 'LOGOUT', payload: {} });
    history.push('/login');
  } catch (error) {
    swal('Error', 'Logout failed', 'error');
  }
};

export const refreshToken = (data) => (dispatch, getState) => {
  const { user: oldDataUser } = getState().user;
  const user = { ...oldDataUser, ...data };
  dispatch({ type: 'REFRESHTOKEN', payload: user });
};
