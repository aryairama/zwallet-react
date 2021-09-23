import {default as axios} from '../axiosConfig';
import swal from 'sweetalert';

export const register = (data, history) => async (dispatch) => {
  try {
    await axios.post('/users', {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
    });
    swal('Success', 'Register successful, check your email to activation', 'success');
    history.push('/login');
  } catch (error) {
    if (error?.response?.data?.statusCode === 422) {
      swal('Failed', error?.response?.data?.error[0]?.msg || 'Back end mati', 'error');
    } else {
      swal('Failed', error?.response?.data?.message || 'Back end mati', 'error');
    }
  }
  dispatch({type: 'REQUEST'});
};

export const checkEmail = async (email) => {
  try {
    await axios.post('/users/forgotPassword', {email});
    swal('Success', 'Check your email to continue changing password', 'success');
  } catch (error) {
    swal('Error', 'Email not found', 'error');
  }
};

export const login = (formData, history) => async (dispatch) => {
  try {
    const {data} = await (await axios.post('/users/login', formData)).data;
    dispatch({type: 'LOGIN', payload: data});
    swal('Success', 'Login success', 'success');
    history.push('/dashboard');
  } catch (error) {
    if (error.response.data.statusCode === 400) {
      return {status: 'error', error: error.response.data};
    } else if (error.response.data.statusCode === 422) {
      return {status: 'error', error: error.response.data};
    } else {
      swal('error', 'failed', 'error');
    }
  }
};

export const logout = (history) => async (dispatch, getState) => {
  try {
    await axios.delete('/users/logout', {
      headers: {
        Authorization: `Bearer ${getState().user.user.accessToken}`,
      },
    });
    dispatch({type: 'LOGOUT', payload: {}});
    dispatch({ type: 'DELETE_ALL_TRANSACTION' });
    dispatch({ type: 'DELETE_ALL_TOPUP' });
    history.push('/login');
  } catch (error) {
    swal('Error', 'Logout failed', 'error');
  }
};

export const refreshToken = (data) => (dispatch, getState) => {
  const {user: oldDataUser} = getState().user;
  const user = {...oldDataUser, ...data};
  dispatch({type: 'REFRESHTOKEN', payload: user});
};

export const checkTokenResetPassword = async (token, history) => {
  try {
    const {data} = await (await axios.get(`/users/forgotpassword/${token}`)).data;
    return data;
  } catch (error) {
    swal('Error', 'Your session is invalid', 'error').then((res) => {
      if (res === true) {
        history.push('/login');
      }
    });
  }
};

export const resetPassword = async (formData, id, history) => {
  try {
    axios.post('/users/changepassword', {
      password: formData.newpassword,
      password2: formData.verifnewpasword,
      id: id,
    });
    swal('Success', 'Password has been changed successfully, please login.', 'success').then((res) => {
      if (res) {
        history.push('/login');
      }
    });
  } catch (error) {
    swal('Error', 'Password failed to change', 'error');
  }
};

export const createPin = (pin, history) => async (dispatch, getState) => {
  try {
    const PIN = `${pin.pin1}${pin.pin2}${pin.pin3}${pin.pin4}${pin.pin5}${pin.pin6}`;
    await axios.post(
      '/users/createpin',
      {
        PIN,
      },
      {
        headers: {
          Authorization: `Bearer ${getState().user.user.accessToken}`,
        },
      }
    );
    dispatch({type: 'LOGIN', payload: {...getState().user.user, PIN}});
    history.push('/pin-success');
  } catch (error) {
    swal('Error', 'Failed created user PIN', 'error');
  }
  dispatch({type: 'REQUEST'});
};

export const updateProfile = (formData) => async (dispatch, getState) => {
  const updateProfile = new FormData();
  updateProfile.append('first_name', formData.first_name);
  updateProfile.append('last_name', formData.last_name);
  updateProfile.append('image', formData.image);
  updateProfile.append('email', formData.email);
  const data = await axios.put('/users', updateProfile, {
    headers: {
      Authorization: `Bearer ${getState().user.user.accessToken}`,
    },
  });
  dispatch({type: 'REQUEST'});
  return data;
};

export const getAllUser =
  (limit, order, dispatchType, page = 1, search = '', fieldOrder = '') =>
  async (dispatch, getState) => {
    try {
      const {data, pagination} = await (
        await axios.get(`/users?order=${order}&limit=${limit}&page=${page}&search=${search}&fieldOrder=${fieldOrder}`, {
          headers: {
            Authorization: `Bearer ${getState().user.user.accessToken}`,
          },
        })
      ).data;
      dispatch({type: dispatchType, payload: {data, pagination}});
    } catch (error) {
      console.log(error);
    }
  };

export const getUserById = (id, history) => async (dispatch, getState) => {
  try {
    const user = await (
      await axios.get(`/users/show/${id}`, {
        headers: {
          Authorization: `Bearer ${getState().user.user.accessToken}`,
        },
      })
    ).data.data;
    if (Object.keys(user).length > 0) {
      dispatch({type: 'GET_USER_BY_ID', payload: user});
    }
  } catch (error) {
    history.push('/transfer');
  }
};

export const profile = () => async (dispatch, getState) => {
  try {
    const user = await (
      await axios.get(`/users/show/${getState().user.user.user_id}`, {
        headers: {
          Authorization: `Bearer ${getState().user.user.accessToken}`,
        },
      })
    ).data.data;
    if (Object.keys(user).length > 0) {
      dispatch({ type: 'LOGIN', payload: {...getState().user.user, ...user} });
    } else {
      dispatch({ type: 'LOGOUT', payload: {} });
    }
  } catch (error) {
    dispatch({ type: 'LOGOUT', payload: {} });
  }
}; 

export const updatePassword = (formData) => async (dispatch, getState) => {
  try {
    await axios.post(
      '/users/updatepassword',
      {
        new_password: formData.newpassword,
        old_password: formData.currentPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${getState().user.user.accessToken}`,
        },
      }
    );
    swal('Success', 'Password update success', 'success');
  } catch (error) {
    swal('Error', error.response.data.message, 'error');
  }
  dispatch({type: 'REQUEST'});
};

export const checkPin = (pin) => async (dispatch, getState) => {
  const PIN = `${pin.pin1}${pin.pin2}${pin.pin3}${pin.pin4}${pin.pin5}${pin.pin6}`;
  const verifPin = await axios.post(
    '/main/cekpin',
    {PIN},
    {
      headers: {
        Authorization: `Bearer ${getState().user.user.accessToken}`,
      },
    }
  );
  dispatch({type: 'REQUEST'});
  return verifPin;
};

export const updatePin = (pin, history) => async (dispatch, getState) => {
  try {
    const PIN = `${pin.pin1}${pin.pin2}${pin.pin3}${pin.pin4}${pin.pin5}${pin.pin6}`;
    const {data} = await (
      await axios.post(
        '/users/updatepin',
        {PIN},
        {
          headers: {
            Authorization: `Bearer ${getState().user.user.accessToken}`,
          },
        }
      )
    ).data;
    dispatch({type: 'LOGIN', payload: {...getState().user.user, ...data}});
    history.push('/profile');
    swal('Success', 'Pin update success', 'success');
  } catch (error) {
    swal('Error', error.response.data.message, 'error');
  }
};

export const updatePhoneNumber = (phoneNumber) => async (dispatch, getState) => {
  const phone_number = await axios.post(
    '/users/addphonenumber',
    {
      phoneNumber: `+62${phoneNumber}`,
    },
    {
      headers: {
        Authorization: `Bearer ${getState().user.user.accessToken}`,
      },
    }
  );
  dispatch({type: 'REQUEST'});
  return phone_number;
};

export const deletePhoneNumber = (history) => async (dispatch, getState) => {
  try{
    await axios.post(
      '/users/deletephonenumber',{},
      {
        headers: {
          Authorization: `Bearer ${getState().user.user.accessToken}`,
        },
      }
    );
    dispatch({type: 'LOGIN', payload: {...getState().user.user, phone_number: ''}});
    swal('Success', 'Successfuly delete phone number', 'success')
    history.push('/profile')
  }catch(err){
    swal('Error', 'Failed delete phone numer', 'error')
  }
}
