import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LayoutAuth from "../../components/module/LayoutAuth";
function Index() {
  useEffect(() => {
    document.title = "Tambah Produk Untuk Dijual";
  });
  return (
    <>
      <LayoutAuth>
        <form>
          <div className="d-flex flex-column">
            <input></input>
            <input></input>
            <Link className="c-grey align-self-end" to="/forgot-password">
              Forgot password?
            </Link>
            <button>Login</button>
          </div>
        </form>
      </LayoutAuth>
    </>
  );
}

export default Index;
