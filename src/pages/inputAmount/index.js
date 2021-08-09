import React, { useState } from 'react';
import Card from '../../components/base/card';
import Avatar from '../../assets/img/avatar/1.png';
import Style from './input.module.css';
import Edit from '../../assets/img/icons/edit.svg';
import { InputTextIcon, Button } from '../../components/base';
const InputAmount = () => {
  const [price, setprice] = useState('0');
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
    setprice(convertToAngka(e.target.value));
  };
  return (
    <>
      <div className="wrapperContent">
        <p className="text_18 bold c-grey">Transfer Money</p>
        <Card type="contact" image={Avatar} name="Samuel Suhi" phone="+62 813-8492-9994" />
        <p className="text_16 c-dark desciptionContentBox c-mt-6">
          Type the amount you want to transfer and then press continue to the next steps.
        </p>
        <input
          type="text"
          name="amount"
          id="amount"
          placeholder="0.00"
          value={convertToRupiah(price)}
          className={Style.input}
          onChange={handleChange}
        />
        <p className="text_16 c-grey text-center bold mt-3">Rp120.000 Available</p>
        <div className={Style.notes}>
          <InputTextIcon
            img={Edit}
            name="description"
            width="21px"
            height="21px"
            placeholder="Add some notes"
          ></InputTextIcon>
        </div>
        <div className={Style.buttonContinue}>
          <Button
            styling="bg__primary text-18 c-white"
            style={{ marginTop: '40px', marginBottom: '40px', marginRight: 'auto' }}
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default InputAmount;
