import React from 'react';
import cs from 'classnames';
import style from './Footer.module.css';
const Footer = () => {
  return (
    <div className={cs(style.footer)}>
      <div className="container ">
        <div className="row">
          <div className="col-md-6 col-12">2020 Zwallet. All right reserved.</div>
          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-md-6 col-12 text-md-end">+62 5637 8882 9901</div>
              <div className="col-md-6 col-12 text-md-end">contact@zwallet.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
