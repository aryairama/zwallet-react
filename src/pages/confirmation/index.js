/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Card from '../../components/base/card';
import Avatar from '../../assets/img/avatar/1.png';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Button } from '../../components/base';
import { transactionDone } from '../../configs/actions/transactionAction';
import { getUserById } from '../../configs/actions/userAction';
import { useHistory } from 'react-router';
const Confirmation = (props) => {
  const transaction = useSelector((state) => state.transaction.transaction);
  const history = useHistory()
  const { user_id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(async () => { 
    await dispatch(getUserById(user_id, props.history)); 
  }, [user_id]);
  const {user, user_receiver} = useSelector((state) => state.user);
  React.useEffect(() => {
    if (parseInt(user.user_id) === parseInt(user_id)) {
      history.push('/transfer')
    }
  }, [user_id]);
  const handleSubmit = () => {
    dispatch(transactionDone());
  };
  const date = new Date()
  return (
    <>
      <div className="wrapperContent">
        <p className="text_18 bold c-grey">Transfer to</p>
        <Card type="contact" image={user_receiver.image ? `${process.env.REACT_APP_API_URL}/${user_receiver.image}` : Avatar} name={user_receiver.fullname} phone={user_receiver.phone_number} />
        <p className="text_16 bold c-grey">Transfer to</p>
        <Card type="stuff" title="Amount" content={transaction.price} />
        <Card type="stuff" title="Balance Left" content={transaction.amountLeft} />
        <Card type="stuff" title="Date & Time" content={`${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()} -  ${date.getHours()}:${date.getMinutes()}`} />
        <Card type="stuff" title="Notes" content={transaction.description} />
        <form onSubmit={handleSubmit} className="text-end">
          <Button
            styling="bg__primary text-18 c-white"
            style={{ marginTop: '40px', marginBottom: '40px', padding: '16px 48px' }}
          >
            Continue
          </Button>
        </form>
      </div>
    </>
  );
};

export default Confirmation;
