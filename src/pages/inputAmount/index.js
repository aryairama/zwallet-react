import React, { useState } from 'react';
import Card from '../../components/base/card';
import Avatar from '../../assets/img/avatar/1.png';
import Style from './input.module.css'
const InputAmount = () => {
  const [price, setprice] = useState('');
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
    return parseInt(rupiah.replace(/,.*|[^0-9]/g, ''), 10);
  }
  const handleChange = (e) => {
    setprice(e.target.value);
  };
  return (
    <>
      <div className="wrapperContent">
        <p className="text_18 bold c-grey">Transfer Money</p>
        <Card type="contact" image={Avatar} name="Samuel Suhi" phone="+62 813-8492-9994" />
        <p className="text_16 c-dark desciptionContentBox c-mt-6">
          Type the amount you want to transfer and then press continue to the next steps.
        </p>
        <div className={Style.inputBox}>
          <p>{convertToRupiah(price)}</p>
          <input type="text" name="amount" id="amount" onChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default InputAmount;
