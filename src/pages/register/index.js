/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LayoutAuth from "../../components/module/LayoutAuth";
import { mail, lock, eyecrossed, person } from "../../assets/index";
import { register as registerUser } from "../../configs/actions/userAction";
import {
  InputPasswordIcon,
  InputTextIcon,
  Button,
} from "../../components/base";
import { useDispatch } from "react-redux";

function Index(props) {
  const dispatch = useDispatch();
  const intialFormData = {
    username: "",
    email: "",
    password: "",
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
    console.log(e);
    e.preventDefault();
    console.log(formData, "tes");
    dispatch(registerUser(formData, props.history));
  };
  useEffect(() => {
    document.title = "Register";
  });
  return (
    <>
      <LayoutAuth>
        <div>
          <p className="text-24">
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </p>
          <div>
            <p className="text-16 c-grey" style={{ opacity: "60%" }}>
              Transfering money is eassier than ever, you can access Zwallet
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </p>
          </div>
        </div>
        <form onSubmit={submitHandler}>
          <div className="d-flex flex-column" style={{ height: "100%" }}>
            <div className="mt-3">
              <InputTextIcon
                img={person}
                name="username"
                width="21px"
                value={formData.username}
                onChange={changeInputHandler}
                height="21px"
                placeholder="Enter your username"
              ></InputTextIcon>
            </div>
            <div className="mt-4 mb-4">
              <InputTextIcon
                name="email"
                img={mail}
                width="21px"
                height="21px"
                value={formData.email}
                onChange={changeInputHandler}
                placeholder="Enter your email"
              ></InputTextIcon>
            </div>
            <div>
              <InputPasswordIcon
                img={lock}
                name="password"
                width="21px"
                value={formData.password}
                height="21px"
                onChange={changeInputHandler}
                eyePassword={eyecrossed}
                placeholder="Enter your password"
              ></InputPasswordIcon>
            </div>
            <Link
              className="c-grey text-16 align-self-end"
              style={{ marginTop: "20px" }}
              to="/forgot-password"
            >
              Forgot password?
            </Link>
            <Button
              // disabled
              type="submit"
              styling="bg__primary text-18 c-white"
              style={{ marginTop: "40px", marginBottom: "40px" }}
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
