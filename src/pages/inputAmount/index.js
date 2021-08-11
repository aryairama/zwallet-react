/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import Card from '../../components/base/card';
import Avatar from '../../assets/img/avatar/1.png';
import Style from './input.module.css';
import Edit from '../../assets/img/icons/edit.svg';
import { InputTextIcon, Button } from '../../components/base';
import { useDispatch } from 'react-redux';
import { transaction } from '../../configs/actions/transactionAction';
import { useHistory, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getUserById } from '../../configs/actions/userAction';
const InputAmount = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user_id } = useParams();
  const [price, setPrice] = useState('0');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);
  React.useEffect(async () => {
    await dispatch(getUserById(user_id, props.history)); 
  }, [user_id]);
  const {user, user_receiver} = useSelector((state) => state.user);
  console.log(user_receiver)
  function convertToRupiah(angka) {
    var rupiah = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.';
    return (
      'Rp. ' +
      rupiah
        .split('', rupiah.length - 1)
        .reverse()
        .join('')
    );
  }
  /**
   * Usage example:
   * alert(convertToRupiah(10000000)); -> "Rp. 10.000.000"
   */

  function convertToAngka(rupiah) {
    return parseInt(rupiah.replace(/,.*|[^0-9]/g, ''), 10) ? parseInt(rupiah.replace(/,.*|[^0-9]/g, ''), 10) : '';
  }
  const handleChange = (e) => {
    setPrice(convertToAngka(e.target.value));
  };
  const handleDesc = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    if (price > user.saldo) {
      e.preventDefault();
      setError(true);
    } else if (parseInt(price) === 0) {
      e.preventDefault();
      setError(true);
    } else {
      const amountLeft = user.saldo - price;
      const data = { price, amountLeft, description };
      dispatch(transaction(data));
      history.push(`/confirmation-transfer/${user_id}`);
    }
  };
  return (
    <>
      <div className="wrapperContent">
        <p className="text_18 bold c-grey">Transfer Money</p>
        <Card type="contact" image={user_receiver.image ? `${process.env.REACT_APP_API_URL}/${user_receiver.image}` : Avatar} name={user_receiver.fullname} phone={user_receiver.phone_number} />
        <p className="text_16 c-dark desciptionContentBox c-mt-6">
          Type the amount you want to transfer and then press continue to the next steps.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="amount"
            id="amount"
            placeholder="0.00"
            value={convertToRupiah(price)}
            className={Style.input}
            onChange={handleChange}
          />
          <p className="text_16 c-grey text-center bold mt-3">{convertToRupiah(user.saldo)} Available</p>
          <p className={`${error ? `text_16 c-error bold text-center` : `d-none`}`}>
            {price === '0' ? 'input price correctly' : 'Insufficient balance'}
          </p>
          <div className={Style.notes}>
            <InputTextIcon
              img={Edit}
              name="description"
              onChange={handleDesc}
              width="21px"
              height="21px"
              placeholder="Add some notes"
            ></InputTextIcon>
          </div>
          <div className={Style.buttonContinue}>
            <Button
              styling="bg__primary text-18 c-white"
              style={{ marginTop: '40px', marginBottom: '40px', padding: '16px 48px' }}
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default InputAmount;
