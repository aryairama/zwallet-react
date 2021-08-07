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
    document.title = "Tambah Produk Untuk Dijual";
  });
  return (
    <>
      <LayoutAuth>
        <form>
          <div className="d-flex flex-column">
            <div className="c-mt-6 c-mb-8">
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
              styling="bg-primary text-18 c-white"
              style={{ marginTop: "90px", marginBottom: "40px" }}
            >
              Login
            </Button>
          </div>
        </form>
      </LayoutAuth>
    </>
  );
}

export default Index;
