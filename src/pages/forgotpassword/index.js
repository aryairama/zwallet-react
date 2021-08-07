import React from "react";
import LayoutAuth from "../../components/module/LayoutAuth";
import {
  InputTextIcon,
  Button,
  InputPasswordIcon,
} from "../../components/base";
import { mail, lock, eyecrossed } from "../../assets/index";
function Index() {
  const [resetPassword, setResetPassword] = React.useState(false);
  React.useEffect(() => {
    document.title = "Forgot Password";
  }, []);
  return (
    <React.Fragment>
      <LayoutAuth>
        <div>
          <p className="text-24">
            Did You Forgot Your Password? Don’t Worry, You Can Reset Your
            Password In a Minutes.
          </p>
          <div>
            <p className="text-16 c-grey" style={{ opacity: "60%" }}>
              To reset your password, you must type your e-mail and we will send
              a link to your email and you will be directed to the reset
              password screens.
            </p>
          </div>
          <form>
            {resetPassword ? (
              <div className="d-flex flex-column">
                <div className="mt-5 mb-4">
                  <InputPasswordIcon
                    img={lock}
                    width="21px"
                    height="21px"
                    eyePassword={eyecrossed}
                    placeholder="Create new password"
                  ></InputPasswordIcon>
                </div>
                <div>
                  <InputPasswordIcon
                    img={lock}
                    width="21px"
                    height="21px"
                    eyePassword={eyecrossed}
                    placeholder="Create new password"
                  ></InputPasswordIcon>
                </div>

                <Button
                  // disabled={resetPassword}
                  styling="bg__disabled text-18 c-dark"
                  style={{ marginTop: "90px", marginBottom: "40px" }}
                  onClick={() => setResetPassword(!resetPassword)}
                >
                  Reset Password
                </Button>
              </div>
            ) : (
              <div className="d-flex flex-column">
                <div className="mt-5 mb-4">
                  <InputTextIcon
                    img={mail}
                    width="21px"
                    height="21px"
                    placeholder="Enter your email"
                  ></InputTextIcon>
                </div>
                <Button
                  styling="bg__primary text-18 c-white"
                  style={{ marginTop: "90px", marginBottom: "40px" }}
                  onClick={() => setResetPassword(!resetPassword)}
                >
                  Confirm
                </Button>
              </div>
            )}
          </form>
        </div>
      </LayoutAuth>
    </React.Fragment>
  );
}

export default Index;
