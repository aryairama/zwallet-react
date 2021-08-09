import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../components/base';
import { failed, success } from '../../assets/';
import styled from './verified.module.css';
import { default as axios } from '../../configs/axiosConfig';

import LayoutAuth from '../../components/module/LayoutAuth';
function Index(props) {
  const [isVerified, setIsVerified] = useState('process');
  console.log(isVerified);
  const { token } = useParams();
  console.log(token, 'token');
  useEffect(() => {
    const response = axios
      .get(`/users/activation/${token}`)
      .then((res) => {
        console.log(response, 'res', res);
        if (res.data.statusCode === 200 || res.data.statusCode === 201) {
          setIsVerified('success');
        }
      })
      .catch((err) => {
        const ccc = err.response.data.statusCode;
        console.log(ccc, 'respone');
        if (err.response.data.statusCode === 500) {
          setIsVerified('failed');
        } else if (err.response.data.statusCode === 400) {
          props.history.push('/register');
        }
      });
  });
  return (
    <>
      <div className={styled.containerReset}>
        {isVerified === 'process' ? (
          <p>Sabar</p>
        ) : (
          <div>
            {isVerified === 'success' ? (
              <>
                <LayoutAuth>
                  <div>
                    <img
                      src={success}
                      className={styled.icon}
                      alt="Succes Verified"
                    ></img>
                    <div className="mt-5 mb-5">
                      <p className="text-24 text-bold">Verified Success!</p>
                      <p className="text-16 ">
                        Login and start access all the features in Zwallet.
                      </p>
                    </div>
                    <Link to="/login">
                      <Button styling="bg__primary mt-5 text-18 c-white myBtn">
                        Login
                      </Button>
                    </Link>
                  </div>
                </LayoutAuth>
              </>
            ) : (
              <>
                <LayoutAuth>
                  <img
                    src={failed}
                    className={styled.icon}
                    alt="Failed Verified"
                  ></img>
                  <div className="mt-5 mb-5">
                    <p className="text-24 text-bold">Recovery mail sent</p>
                    <p className="text-16 ">
                      Didn't receive the email? Please check the email address
                      you used to make sure it matches the address on your
                      account, look in your spam folder, or request another
                      email below.
                    </p>
                  </div>

                  <Button styling="bg__primary mt-5 text-18 c-white myBtn">
                    Send New Email
                  </Button>
                  <p className="text-16 text-center mt-4">Or</p>

                  <Link to="/register">
                    <Button styling="c-grey myBtn">Register</Button>
                  </Link>
                </LayoutAuth>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Index;
