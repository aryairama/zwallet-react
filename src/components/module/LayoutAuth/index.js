import React from "react";
import { phoneSplit } from "../../../assets/index";
import "../../../assets/";
import { Link } from "react-router-dom";

function Index(props) {
  React.useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <main className="d-flex">
      <section className="left__auth">
        <div className="img__auth">
          <div className="left__auth-content">
            <div>
              <img src={phoneSplit} alt="zwallet-preview"></img>
            </div>
            <div>
              <div className="mb-4">
                <p className="text-24 c-white">
                  App that Covering Banking Needs.
                </p>
              </div>
              <div>
                <p className="text-16 c-white" style={{ opacity: "80%" }}>
                  Zwallet is an application that focussing in banking needs for
                  all users in the world. Always updated and always following
                  world trends. 5000+ users registered in Zwallet everyday with
                  worldwide users coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="right__auth">
        <div className="s">
          <div className="right__auth-content">
            <div>
              <p className="text-24">
                Start Accessing Banking Needs With All Devices and All Platforms
                With 30.000+ Users
              </p>
              <div>
                <p className="text-16 c-grey" style={{ opacity: "60%" }}>
                  Transfering money is eassier than ever, you can access Zwallet
                  wherever you are. Desktop, laptop, mobile phone? we cover all
                  of that for you!
                </p>
              </div>
            </div>
            {props.children}

            <div>
              Don’t have an account? Let’s
              <Link className="c-primary" to="/register">
                <> Sign Up</>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Index;
