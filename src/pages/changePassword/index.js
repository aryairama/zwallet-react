/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { InputPasswordIcon, Button } from '../../components/base';
import { lock, eyecrossed } from '../../assets/index';
import Style from './pass.module.css';
import SimpleReactValidator from 'simple-react-validator';
import { useDispatch } from 'react-redux';
import { updatePassword } from '../../configs/actions/userAction';
const ChangePassword = () => {
  const dispatch = useDispatch();
  const [forgotPassword, setForgotPasword] = React.useState({
    newpassword: '',
    verifnewpasword: '',
    currentPassword: '',
  });
  const matchPassword = () => {
    return forgotPassword.newpassword === forgotPassword.verifnewpasword;
  };
  const validatorPassword = React.useRef(new SimpleReactValidator({ className: 'text-danger small' }));
  const handleChange = (e) => {
    setForgotPasword((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
  React.useEffect(() => {
    document.title = 'Change Password';
    matchPassword();
  }, [forgotPassword.newpassword, forgotPassword.verifnewpasword]);
  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(updatePassword(forgotPassword));
  };
  return (
    <>
      <div className="wrapperContent">
        <p className="text-18 bold">Change Password</p>
        <p className="text-16 c-dark desciptionContentBox">
          You must enter your current password and then type your new password twice.
        </p>
        <form onSubmit={submitHandler} className={Style.passWrapper}>
          <div className="mb-4">
            <InputPasswordIcon
              img={lock}
              width="21px"
              height="21px"
              eyePassword={eyecrossed}
              placeholder="Current Password"
              name="currentPassword"
              value={forgotPassword.currentPassword}
              onFocus={() => validatorPassword.current.showMessageFor('currentPassword')}
              onChange={handleChange}
              error={validatorPassword.current.message(
                'currentPassword',
                forgotPassword.currentPassword,
                'required|min:4|max:15'
              )}
            ></InputPasswordIcon>
            {validatorPassword.current.message(
              'currentPassword',
              forgotPassword.currentPassword,
              'required|min:4|max:15'
            )}
          </div>
          <div className="mb-4">
            <InputPasswordIcon
              img={lock}
              width="21px"
              height="21px"
              eyePassword={eyecrossed}
              placeholder="New Password"
              name="newpassword"
              value={forgotPassword.newpassword}
              onFocus={() => validatorPassword.current.showMessageFor('newpassword')}
              onChange={handleChange}
              error={validatorPassword.current.message(
                'newpassword',
                forgotPassword.newpassword,
                'required|min:4|max:15'
              )}
            ></InputPasswordIcon>
            {validatorPassword.current.message('newpassword', forgotPassword.newpassword, 'required|min:4|max:15')}
          </div>
          <div className="mb-4">
            <InputPasswordIcon
              img={lock}
              width="21px"
              height="21px"
              eyePassword={eyecrossed}
              placeholder="Repeat Password"
              name="verifnewpasword"
              value={forgotPassword.verifnewpasword}
              onFocus={() => validatorPassword.current.showMessageFor('verifnewpasword')}
              onChange={handleChange}
              error={validatorPassword.current.message(
                'verifnewpasword',
                forgotPassword.verifnewpasword,
                'required|min:4|max:15'
              )}
            ></InputPasswordIcon>
            {validatorPassword.current.message(
              'verifnewpasword',
              forgotPassword.verifnewpasword,
              'required|min:4|max:15'
            )}
          </div>
          <Button
            disabled={validatorPassword.current.allValid() && matchPassword() ? false : true}
            styling="bg__primary text-18 c-white"
            style={{ marginTop: '40px', marginBottom: '40px' }}
          >
            Change Password
          </Button>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
