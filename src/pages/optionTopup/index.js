import React from 'react';
import { Button } from '../../components/base';
import { Link } from 'react-router-dom';
const index = (props) => {
  return (
    <div className="wrapperContent">
      <p className="text-18 bold w-75">Option Topup</p>
      <div className="d-flex">
        <Link to="option-transfer" className="w-50 m-1">
          <Button styling="bg__primary text-18 c-white w-100">Transfer</Button>
        </Link>
        <Button styling="bg__primary text-18 c-white w-50 m-1" disabled>
          Payment Gateway
        </Button>
      </div>
    </div>
  );
};

export default index;
