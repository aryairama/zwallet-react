import React, { useState } from 'react';
import Style from './DirectTransfer.module.css';
import { Button } from '../../components/base';
import { topupDirect } from '../../configs/actions/topupAction';
import { useDispatch } from 'react-redux';
const DirectTransfer = (props) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    amount: '0',
    image_topup: '',
  });
  const [error, setError] = useState({
    amount: false,
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
    if (parseInt(formData.amount) === 0) {
      setError((oldValue) => {
        return { ...oldValue, amount: true };
      });
    } else if (formData.image_topup === '') {
      setError((oldValue) => {
        return { ...oldValue, image_topup: true };
      });
    } else {
      await dispatch(topupDirect(formData, props.history));
    }
  };
  return (
    <div className="wrapperContent">
      <div className="card card-body border-0 shadow-sm rounded">
        <p className="lh-1 text-18 bold c-grey">BANK BRI : 3883-01-000640-50-6 </p>
        <p className="lh-1 text-18 bold c-grey">BANK BCA : 8170683367 </p>
      </div>
      <form onSubmit={submitHandler} className={Style.passWrapper}>
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
          {formData.amount === '0' ? 'input price correctly' : ''}
        </p>
        <div className={Style['border-preview']}>
          {formData.image_topup ? (
            <img className={Style.imgPreview} src={URL.createObjectURL(formData.image_topup)} alt="img-topup" />
          ) : (
            <p className={Style.textImgTransfer}>Image Transfer</p>
          )}
        </div>
        <input
          accept="image/jpeg, image/png"
          className="d-none"
          type="file"
          id="image_topup"
          name="image_topup"
          onChange={(e) =>
            setFormData((oldValue) => {
              return { ...oldValue, [e.target.name]: e.target.files[0] };
            })
          }
        />
        <p
          style={{ marginBottom: '-10px' }}
          className={`${error.image_topup ? `text_16 c-error bold text-center` : `d-none`}`}
        >
          Image transfer required
        </p>
        <label htmlFor="image_topup" className={Style.buttonUploud}>
          Uploud
        </label>
        <Button styling="bg__primary text-18 c-white" style={{ marginTop: '20px', width: '100%' }}>
          Topup
        </Button>
      </form>
    </div>
  );
};

export default DirectTransfer;
