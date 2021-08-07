import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LayoutAuth from "../../components/module/LayoutAuth";
import { mail, lock, eyecrossed } from "../../assets/index";
import {
  InputPasswordIcon,
  InputTextIcon,
  Button,
} from "../../components/base/";
function Index() {
  useEffect(() => {
    document.title = "Register";
  });
  return (
    <>
      <LayoutAuth>
        <form>
          <div className="d-flex flex-column" style={{ height: "100%" }}>
            <div className="mt-5">
              <InputTextIcon
                img={mail}
                width="21px"
                height="21px"
                placeholder="Enter your username"
              ></InputTextIcon>
            </div>
            <div className="mt-4 mb-4">
              <InputTextIcon
                img={mail}
                width="21px"
                height="21px"
                placeholder="Enter your email"
              ></InputTextIcon>
            </div>

            <div>
              <InputPasswordIcon
                img={lock}
                width="21px"
                height="21px"
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
              disabled
              styling="bg-primary text-18 c-white"
              style={{ marginTop: "90px", marginBottom: "40px" }}
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
