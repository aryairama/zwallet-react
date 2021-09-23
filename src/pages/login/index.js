import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import LayoutAuth from '../../components/module/LayoutAuth';
import { mail, lock, eyecrossed } from '../../assets/index';
import {
  InputPasswordIcon,
  InputTextIcon,
  Button,
} from '../../components/base';
import { login } from '../../configs/actions/userAction';
import { useDispatch } from 'react-redux';
function Index(props) {
  useEffect(() => {
    document.title = 'Login';
  },[]);
  const validator = useRef(
    new SimpleReactValidator({ className: 'small text-danger' })
  );
  const [processLogin, setProcessLogin] = useState({
    status: '',
    error: '',
  });
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = 'Login';
  },[]);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const changeHandler = (e) => {
    setFormData((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(formData, props.history));
    if (data?.error.statusCode === 400 || data?.error.statusCode === 422) {
      setProcessLogin((oldValue) => {
        return { ...oldValue, status: data.status, error: data.error };
      });
    }
  };
  return (
    <>
      <LayoutAuth>
        <div>
          <p className="text-24">
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </p>
          <div>
            <p className="text-16 c-grey" style={{ opacity: '60%' }}>
              Transfering money is eassier than ever, you can access Zwallet
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column">
            <div className="mt-3 mb-5">
              <InputTextIcon
                img={mail}
                name="email"
                value={formData.email}
                onChange={changeHandler}
                onFocus={() => validator.current.showMessageFor('email')}
                width="21px"
                height="21px"
                placeholder="Enter your email"
                error={validator.current.message(
                  'email',
                  formData.email,
                  'required|email'
                )}
              ></InputTextIcon>
              {validator.current.message(
                'email',
                formData.email,
                'required|email'
              )}
            </div>
            <div>
              <InputPasswordIcon
                name="password"
                value={formData.password}
                onChange={changeHandler}
                onFocus={() => validator.current.showMessageFor('password')}
                img={lock}
                width="21px"
                height="21px"
                eyePassword={eyecrossed}
                error={validator.current.message(
                  'password',
                  formData.password,
                  'required|min:4|max:15'
                )}
                placeholder="Enter your password"
              ></InputPasswordIcon>
              {validator.current.message(
                'password',
                formData.password,
                'required|min:4|max:15'
              )}
            </div>
            <Link
              className="c-grey text-16 align-self-end"
              style={{ marginTop: '20px' }}
              to="/forgot-password"
            >
              Forgot password?
            </Link>
            {processLogin && processLogin.status === 'error' && (
              <>
                {processLogin.error.statusCode === 400 && (
                  <p className="text-center text-danger small mt-2">
                    {processLogin.error.message}
                  </p>
                )}
                {processLogin.error.statusCode === 422 && (
                  <p className="text-center text-danger small mt-2">
                    {processLogin.error.error[0].msg}
                  </p>
                )}
              </>
            )}
            <Button
              disabled={validator.current.allValid() ? false : true}
              styling="bg__primary text-18 c-white"
              style={{ marginTop: '20px', marginBottom: '40px' }}
            >
              Login
            </Button>
          </div>
        </form>
        <div className="text-16 text-center">
          Don’t have an account? Let’s
          <Link className="c-primary text-16" to="/register">
            <> Sign Up</>
          </Link>
        </div>
      </LayoutAuth>
    </>
  );
}

export default Index;
