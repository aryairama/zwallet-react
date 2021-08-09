/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import LayoutAuth from '../../components/module/LayoutAuth';
import { mail, lock, eyecrossed, person } from '../../assets/index';
import { register as registerUser } from '../../configs/actions/userAction';
import { InputPasswordIcon, InputTextIcon, Button } from '../../components/base';
import { useDispatch } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';

function Index(props) {
  const validator = useRef(new SimpleReactValidator({ className: 'text-danger small' }));
  const dispatch = useDispatch();
  const intialFormData = {
    first_name:'',
    last_name: '',
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(intialFormData);
  const changeInputHandler = (e) => {
    setFormData(() => {
      return {
        ...formData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData, props.history));
  };
  useEffect(() => {
    document.title = 'Register';
  });
  return (
    <>
      <LayoutAuth>
        <div>
          <p className="text-24">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</p>
          <div>
            <p className="text-16 c-grey" style={{ opacity: '60%' }}>
              Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile
              phone? we cover all of that for you!
            </p>
          </div>
        </div>
        <form onSubmit={submitHandler}>
          <div className="d-flex flex-column" style={{ height: '100%' }}>
            <div className="mt-3 mb-5">
              <InputTextIcon
                img={person}
                name="first_name"
                width="21px"
                value={formData.first_name}
                onChange={changeInputHandler}
                onFocus={() => validator.current.showMessageFor('first_name')}
                height="21px"
                placeholder="Enter your first name"
                error={validator.current.message('first_name', formData.first_name, 'required|min:3|max:100')}
              ></InputTextIcon>
              {validator.current.message('first_name', formData.first_name, 'required|min:3|max:100')}
            </div>
            <div className="mb-5">
              <InputTextIcon
                img={person}
                name="last_name"
                width="21px"
                value={formData.last_name}
                onChange={changeInputHandler}
                onFocus={() => validator.current.showMessageFor('last_name')}
                height="21px"
                placeholder="Enter your last name"
                error={validator.current.message('last_name', formData.last_name, 'required|min:3|max:100')}
              ></InputTextIcon>
              {validator.current.message('last_name', formData.last_name, 'required|min:3|max:100')}
            </div>
            <div className="mb-5">
              <InputTextIcon
                name="email"
                img={mail}
                width="21px"
                height="21px"
                value={formData.email}
                onChange={changeInputHandler}
                onFocus={() => validator.current.showMessageFor('email')}
                error={validator.current.message('email', formData.email, 'required|email')}
                placeholder="Enter your email"
              ></InputTextIcon>
              {validator.current.message('email', formData.email, 'required|email')}
            </div>
            <div>
              <InputPasswordIcon
                img={lock}
                name="password"
                width="21px"
                value={formData.password}
                height="21px"
                onChange={changeInputHandler}
                onFocus={() => validator.current.showMessageFor('password')}
                error={validator.current.message('password', formData.password, 'required|min:4|max:15')}
                eyePassword={eyecrossed}
                placeholder="Enter your password"
              ></InputPasswordIcon>
              {validator.current.message('password', formData.password, 'required|min:4|max:15')}
            </div>
            <Link className="c-grey text-16 align-self-end" style={{ marginTop: '20px' }} to="/forgot-password">
              Forgot password?
            </Link>
            <Button
              disabled={validator.current.allValid() ? false : true}
              type="submit"
              styling="bg__primary text-18 c-white"
              style={{ marginTop: '40px', marginBottom: '40px' }}
            >
              Register
            </Button>
          </div>
        </form>
        <div className="text-16 text-center">
          Already have an account? Let’s
          <Link className="c-primary text-16" to="/login">
            <> Login</>
          </Link>
        </div>
      </LayoutAuth>
    </>
  );
}

export default Index;
