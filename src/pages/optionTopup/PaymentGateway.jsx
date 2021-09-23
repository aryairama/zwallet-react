import React, { useState } from 'react';
import Style from './DirectTransfer.module.css';
import { Button, InputCheck } from '../../components/base';
import { topupPaymentGateway } from '../../configs/actions/topupAction';
import { useDispatch } from 'react-redux';
import IconBri from '../../assets/img/payment/bri.png';
import IconBca from '../../assets/img/payment/bca.svg';
import IconBni from '../../assets/img/payment/bni.png';
import IconMandiri from '../../assets/img/payment/mandiri.png';
import IconPermata from '../../assets/img/payment/permata.png';

const PaymentGateway = (props) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    amount: '0',
    payment_type: '',
    bank_transfer: '',
  });
  const [error, setError] = useState({
    amount: false,
    payment: false,
  });
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
  const handleChange = (e) => {
    setFormData((oldValue) => {
      return { ...oldValue, [e.target.name]: convertToAngka(e.target.value) };
    });
  };
  function convertToAngka(rupiah) {
    return parseInt(rupiah.replace(/,.*|[^0-9]/g, ''), 10) ? parseInt(rupiah.replace(/,.*|[^0-9]/g, ''), 10) : '';
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    if (parseInt(formData.amount) === 0 || formData.amount === '') {
      setError((oldValue) => {
        return { ...oldValue, amount: true };
      });
    } else if (formData.payment_type === '') {
      setError((oldValue) => {
        return { ...oldValue, payment: true };
      });
    } else {
      await dispatch(topupPaymentGateway(formData, props.history));
    }
  };
  return (
    <div className="wrapperContent">
      <div className="card card-body border-0 shadow-sm rounded">
        <p className="lh-1 text-18 bold c-grey">Payment Gateway</p>
      </div>
      <form onSubmit={submitHandler} className={`${Style.passWrapper} w-100`}>
        <input
          type="text"
          name="amount"
          id="amount"
          placeholder="0.00"
          value={convertToRupiah(formData.amount)}
          className={Style.input}
          onChange={handleChange}
        />
        <p
          style={{ marginBottom: '-20px' }}
          className={`${error.amount ? `text_16 c-error bold text-center` : `d-none`}`}
        >
          {formData.amount === '0' || formData.amount === '' ? 'input price correctly' : ''}
        </p>
        <div className="d-flex flex-row flex-wrap justify-content-between align-items-center mt-5 mx-md-5 mx-0">
          <InputCheck
            disabled={process.env.REACT_APP_MIDTRANS_BRI === 'false' ? true : false}
            type="radio"
            value="bank_transfer"
            name="payment_type"
            id="payment_bri"
            label={<img width="60px" height="50px" src={IconBri} alt="icon-bri" className="mx-1" />}
            onClick={(e) => {
              setFormData((oldVal) => ({ ...oldVal, payment_type: e.target.value, bank_transfer: 'bri' }));
            }}
          />
          <InputCheck
            disabled={process.env.REACT_APP_MIDTRANS_BCA === 'false' ? true : false}
            type="radio"
            value="bank_transfer"
            name="payment_type"
            id="payment_bca"
            label={<img width="60px" height="50px" src={IconBca} alt="icon-bca" className="mx-1" />}
            onClick={(e) => {
              setFormData((oldVal) => ({ ...oldVal, payment_type: e.target.value, bank_transfer: 'bca' }));
            }}
          />
          <InputCheck
            disabled={process.env.REACT_APP_MIDTRANS_BNI === 'false' ? true : false}
            type="radio"
            value="bank_transfer"
            name="payment_type"
            id="payment_bni"
            label={<img width="50px" height="30px" src={IconBni} alt="icon-bni" className="mx-1" />}
            onClick={(e) => {
              setFormData((oldVal) => ({ ...oldVal, payment_type: e.target.value, bank_transfer: 'bni' }));
            }}
          />
          <InputCheck
            disabled={process.env.REACT_APP_MIDTRANS_MANDIRI === 'false' ? true : false}
            type="radio"
            value="echannel"
            name="payment_type"
            id="payment_mandiri"
            label={<img width="50px" height="30px" src={IconMandiri} alt="icon-echannel" className="mx-1" />}
            onClick={(e) => {
              setFormData((oldVal) => ({ ...oldVal, payment_type: e.target.value, bank_transfer: '' }));
            }}
          />
          <InputCheck
            disabled={process.env.REACT_APP_MIDTRANS_PERMATA === 'false' ? true : false}
            type="radio"
            value="permata"
            name="payment_type"
            id="payment_permata"
            label={<img width="70px" height="60px" src={IconPermata} alt="icon-permata" className="mx-1" />}
            onClick={(e) => {
              setFormData((oldVal) => ({ ...oldVal, payment_type: e.target.value, bank_transfer: '' }));
            }}
          />
        </div>
        <p
          style={{ marginBottom: '-5px' }}
          className={`${error.payment ? `text_16 c-error bold text-center` : `d-none`}`}
        >
          {formData.payment_type === '' ? 'Bank transfer required' : ''}
        </p>
        <Button
          styling="bg__primary text-18 c-white align-self-center w-50"
          style={{ marginTop: '20px', width: '100%' }}
        >
          Topup
        </Button>
      </form>
    </div>
  );
};

export default PaymentGateway;
