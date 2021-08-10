import React from 'react';
import Card from '../../components/base/card';
import Avatar from '../../assets/img/avatar/1.png';
import { useSelector } from 'react-redux';
import { Button } from '../../components/base';
const Confirmation = () => {
  const transaction = useSelector((state) => state.transaction.transaction);
  console.log(transaction);
  return (
    <>
      <div className="wrapperContent">
        <p className="text_18 bold c-grey">Transfer to</p>
        <Card type="contact" image={Avatar} name="Samuel Suhi" phone="+62 813-8492-9994" />
        <p className="text_16 bold c-grey">Transfer to</p>
        <Card type="stuff" title="Amount" content={transaction.price} />
        <Card type="stuff" title="Balance Left" content={transaction.amountLeft} />
        <Card type="stuff" title="Date & Time" content="May 11, 2020 - 12.20" />
        <Card type="stuff" title="Notes" content={transaction.description} />
        <div className="text-end">
          <Button
            styling="bg__primary text-18 c-white"
            style={{ marginTop: '40px', marginBottom: '40px', padding:'16px 48px' }}
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
