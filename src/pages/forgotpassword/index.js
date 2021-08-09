/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import LayoutAuth from '../../components/module/LayoutAuth';
import { InputTextIcon, Button } from '../../components/base';
import { mail } from '../../assets/index';
import SimpleReactValidator from 'simple-react-validator';
import { checkEmail } from '../../configs/actions/userAction';
function Index(props) {
  const [email, setEmail] = React.useState('');
  const validator = React.useRef(new SimpleReactValidator({ className: 'text-danger small' }));
  React.useEffect(() => {
    document.title = 'Forgot Password';
  });
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
            <div className="mt-5 mb-4">
              <InputTextIcon
                img={mail}
                width="21px"
                height="21px"
                placeholder="Enter your email"
                value={email}
                onFocus={() => validator.current.showMessageFor('email')}
                onChange={(e) => setEmail(e.target.value)}
                error={validator.current.message('email', email, 'required|email')}
              ></InputTextIcon>
              {validator.current.message('email', email, 'required|email')}
            </div>
            <Button
              disabled={validator.current.allValid() ? false : true}
              styling="bg__primary text-18 c-white"
              style={{ marginTop: '90px', marginBottom: '40px' }}
              onClick={() => checkEmail(email)}
            >
              Confirm
            </Button>
          </form>
        </div>
      </LayoutAuth>
    </React.Fragment>
  );
}

export default Index;
