/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import LayoutAuth from '../../components/module/LayoutAuth';
import { Button, InputPasswordIcon } from '../../components/base';
import { lock, eyecrossed } from '../../assets/index';
import SimpleReactValidator from 'simple-react-validator';
import { checkTokenResetPassword, resetPassword } from '../../configs/actions/userAction';
import { useParams } from 'react-router-dom';
function Index(props) {
  const { token } = useParams();
  const [idUser, setIdUser] = React.useState('');
  const [forgotPassword, setForgotPasword] = React.useState({
    newpassword: '',
    verifnewpasword: '',
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
    document.title = 'Forgot Password';
    matchPassword();
  }, [forgotPassword.newpassword, forgotPassword.verifnewpasword]);
  React.useEffect(async () => {
    try {
      const { id_user } = await checkTokenResetPassword(token, props.history);
      setIdUser((old) => id_user);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <React.Fragment>
      <LayoutAuth>
        <div>
          <p className="text-24">
            Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.
          </p>
          <div>
            <p className="text-16 c-grey" style={{ opacity: '60%' }}>
              To reset your password, you must type your e-mail and we will send a link to your email and you will be
              directed to the reset password screens.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="d-flex flex-column">
            <div className="mt-3 mb-4">
              <InputPasswordIcon
                img={lock}
                width="21px"
                height="21px"
                eyePassword={eyecrossed}
                placeholder="Create new password"
                name="newpassword"
                value={forgotPassword.newpassword}
                onFocus={() => validatorPassword.current.showMessageFor('newpassword')}
                onChange={handleChange}
              ></InputPasswordIcon>
              {validatorPassword.current.message('newpassword', forgotPassword.newpassword, 'required|min:4|max:15')}
            </div>
            <div className="mt-3">
              <InputPasswordIcon
                img={lock}
                width="21px"
                height="21px"
                eyePassword={eyecrossed}
                placeholder="Create new password"
                name="verifnewpasword"
                onChange={handleChange}
                value={forgotPassword.verifnewpasword}
                onFocus={() => validatorPassword.current.showMessageFor('verifnewpasword')}
              ></InputPasswordIcon>
              {validatorPassword.current.message(
                'verifnewpasword',
                forgotPassword.verifnewpasword,
                'required|min:4|max:15'
              )}
            </div>
            {matchPassword() === false && (
              <p className="text-center small text-danger mt-3">Passwords are not the same</p>
            )}
            <Button
              onClick={() => resetPassword(forgotPassword, idUser, props.history)}
              disabled={validatorPassword.current.allValid() === true && matchPassword() === true ? false : true}
              styling="bg__primary text-18 c-white"
              style={{ marginTop: '40px', marginBottom: '40px' }}
            >
              Reset Password
            </Button>
          </form>
        </div>
      </LayoutAuth>
    </React.Fragment>
  );
}

export default Index;
