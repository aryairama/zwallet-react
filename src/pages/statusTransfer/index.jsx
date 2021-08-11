import React from 'react';
import CardContainer from '../../components/base/cardContainer';
import { success } from '../../assets';
import Card from '../../components/base/card';
import { useSelector } from 'react-redux';

import Avatar from '../../assets/img/avatar/1.png';

function Index() {
  React.useEffect(() => {
    document.title = 'Status Transfer';
  });

  const transaction = useSelector((state) => state.transaction.transaction);
  // const dispatch = useDispatch();

  const { user, user_receiver } = useSelector((state) => state.user);

  const date = new Date();
  console.log(transaction);
  return (
    <React.Fragment>
      <CardContainer className="bg__white">
        <div className="d-flex flex-column justify-content-center align-items-center">
          {/* <div> */}
          <img src={success} alt="success"></img>
          <p className="mt-4 text-22 text-bold">Transfer Succes</p>
          {/* </div> */}
          {/* <img src={failed} alt="success"></img> */}
        </div>

        <Card type="stuff" title="Amount" content={transaction.price} />
        <Card type="stuff" title="Balance Left" content={transaction.amountLeft} />
        <Card
          type="stuff"
          title="Date & Time"
          content={`${date.toLocaleString('default', {
            month: 'long',
          })} ${date.getDate()}, ${date.getFullYear()} -  ${date.getHours()}:${date.getMinutes()}`}
        />
        <Card type="stuff" title="Notes" content={transaction.description} />
        <p className="text_18 bold c-grey">Transfer to</p>
        <Card
          type="contact"
          image={user.image ? `${process.env.REACT_APP_API_URL}/${user.image}` : Avatar}
          name={user_receiver.fullname}
          phone={user_receiver.phone_number}
        />
      </CardContainer>
    </React.Fragment>
  );
}

export default Index;
