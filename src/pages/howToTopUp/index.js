import React from 'react';
import Card from '../../components/base/card';
const HowToTopUp = () => {
  return (
    <>
      <div className="wrapperContent">
        <p className="text-18 bold">How To Top Up</p>
        <Card
          type="topUp"
          number="1"
          content="Go to the nearest ATM or you can use E-Banking."
        />
        <Card
          type="topUp"
          number="2"
          content="Type your security number on the ATM or E-Banking."
        />
        <Card
          type="topUp"
          number="3"
          content="Select “Transfer” in the menu."
        />
        <Card
          type="topUp"
          number="4"
          content="Type the virtual account number that we provide you at the top."
        />
        <Card
          type="topUp"
          number="5"
          content="Type the amount of the money you want to top up."
        />
        <Card type="topUp" number="6" content="Read the summary details" />
        <Card type="topUp" number="7" content="Press transfer / top up" />
        <Card
          type="topUp"
          number="9"
          content="You can see your money in Zwallet within 3 hours."
        />
      </div>
    </>
  );
};

export default HowToTopUp;
