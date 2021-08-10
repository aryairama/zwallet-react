/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Style from './edit.module.css';
import { InputTextIcon, Button } from '../../components/base';
import { person, mail } from '../../assets/index';
import Avatar from '../../assets/img/avatar/8.png';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../../configs/actions/userAction';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';

const EditProfile = (props) => {
  const dispatch = useDispatch();
  const validator = React.useRef(new SimpleReactValidator({ className: 'small text-danger' }));
  const { user } = useSelector((state) => state.user);
  const [backendError, setBackendError] = React.useState({});
  const [updateUser, setUpdateUser] = React.useState({
    first_name: '',
    last_name: '',
    image: '',
    email: '',
  });
  React.useEffect(() => {
    if (Object.keys(user).length > 0) {
      setUpdateUser((oldValue) => {
        return { ...oldValue, ...user, image: '', email: '' };
      });
    }
  }, [user]);
  const onChangeInput = (e) => {
    setUpdateUser((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const {
        data: { data },
      } = await dispatch(updateProfile(updateUser));
      dispatch({ type: 'LOGIN', payload: { ...user, ...data } });
      swal('Success', 'Data update successfully', 'success');
      setBackendError({})
    } catch (error) {
      swal('Error', 'Failed to update profile', 'error');
      if (error.response.data.statusCode === 422) {
        document.querySelector('body').scrollTo(0, 0);
        setBackendError({
          avatar: '',
          email: '',
        });
        setBackendError((oldValue) => {
          const inputError = {};
          error.response.data.error.forEach((error) => {
            inputError[error.param] = error.msg;
          });
          return { ...oldValue, ...inputError };
        });
      }
    }
  };
  return (
    <>
      <div className="wrapperContent">
        <p className="text_18 bold c-gray">Edit Profile</p>
        <form onSubmit={submitHandler} className={Style.passWrapper}>
          <div className={Style.changePhoto}>
            {user.image && user.image.length > 10 && !updateUser.image && (
              <img
                className="rounded-circle"
                src={`${process.env.REACT_APP_API_URL}/${user.image}`}
                width="110px"
                height="110px"
                alt="current-profile"
              />
            )}
            {updateUser.image && !user.image && (
              <img
                className="rounded-circle"
                src={URL.createObjectURL(updateUser.image)}
                width="110px"
                height="110px"
                alt="current-profile"
              />
            )}
            {!updateUser.image && !user.image && (
              <img className=" rounded-circle" src={Avatar} width="110px" height="110px" alt="current-profile" />
            )}
            {updateUser.image && user.image && (
              <img
                className="rounded-circle"
                src={URL.createObjectURL(updateUser.image)}
                width="110px"
                height="110px"
                alt="current-profile"
              />
            )}
            <input
              type="file"
              name="image"
              id="image"
              accept="image/jpeg, image/png"
              className="d-none"
              onChange={(e) =>
                setUpdateUser((oldValue) => {
                  return { ...oldValue, image: e.target.files[0] };
                })
              }
            />
            <label htmlFor="image" className="btn bg__primary text-18 c-white rounded-pill">
              Upload Foto
            </label>
            {backendError.image && <div className="small text-danger">{backendError.image}</div>}
          </div>
          <div className="mb-4">
            <InputTextIcon
              img={person}
              width="21px"
              height="21px"
              placeholder="First Name"
              name="first_name"
              value={updateUser.first_name}
              onChange={onChangeInput}
              onFocus={() => validator.current.showMessageFor('first_name')}
              error={validator.current.message('first_name', updateUser.first_name, 'required|min:3|max:100')}
            ></InputTextIcon>
            {validator.current.message('first_name', updateUser.first_name, 'required|min:3|max:100')}
          </div>
          <div className="mb-4">
            <InputTextIcon
              img={person}
              width="21px"
              height="21px"
              placeholder="Last Name"
              name="last_name"
              value={updateUser.last_name}
              onChange={onChangeInput}
              onFocus={() => validator.current.showMessageFor('last_name')}
              error={validator.current.message('last_name', updateUser.last_name, 'required|min:3|max:100')}
            ></InputTextIcon>
            {validator.current.message('last_name', updateUser.last_name, 'required|min:3|max:100')}
          </div>
          <div className="mb-4">
            <InputTextIcon
              name="email"
              img={mail}
              width="21px"
              height="21px"
              value={updateUser.email}
              onChange={onChangeInput}
              onFocus={() => validator.current.showMessageFor('email')}
              error={validator.current.message('email', updateUser.email, 'email')}
              placeholder={user.email}
            ></InputTextIcon>
            {validator.current.message('email', updateUser.email, 'email')}
            {backendError.email && <div className="small text-danger">{backendError.email}</div>}
          </div>
          <Button
            disabled={validator.current.allValid() ? false : true}
            styling="bg__primary text-18 c-white"
            style={{ marginTop: '40px', marginBottom: '40px' }}
          >
            Change Profile
          </Button>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
