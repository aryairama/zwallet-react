/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Card from '../../components/base/card';
import Style from './detail.module.css';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getTopUpId, changeStatus } from '../../configs/actions/topupAction';
const DetailTopUp = () => {
  const { id } = useParams();
  const [reload, setReload] = React.useState(false);
  const dispatch = useDispatch();
  const detil = useSelector((state) => state.topUp.topUpDetail);
  React.useEffect(async () => {
    await dispatch(getTopUpId(id));
  }, [id, reload]);
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
  const handleClick = async (status) => {
    await dispatch(changeStatus(status, detil.transaction_id, detil.user_id, detil.amount));
    await dispatch(getTopUpId(id));
    setReload((oldVal) => !oldVal);
  };
  return (
    <>
      <div className="wrapperContent">
        <p className="text-bold text-18">Top Up Detail</p>
        <Card type="contact" imageVal={false} name={detil.fullname} phone={detil.transaction_type} />
        <p className={`text-bold text-18 text-center`}>
          Status:{' '}
          <span
            className={`${
              detil.status === 'approve'
                ? `${Style.greenText}`
                : detil.status === 'pending'
                ? `${Style.yellowText}`
                : `${Style.redText}`
            }`}
          >
            {detil.status}
          </span>
        </p>
        <div className="text-center">
          {detil && detil.amount && <p className={Style.amountText}>{convertToRupiah(convertToAngka(detil.amount))}</p>}
          <img
            src={`${process.env.REACT_APP_API_URL}/${detil.image_topup}`}
            alt="imageTopup"
            className={Style.imgTopUp}
          />
        </div>
        <div className={Style.buttonContainer}>
          <button
            className={Style.button}
            disabled={detil.status === 'pending' ? false : true}
            onClick={async () => await handleClick('approve')}
          >
            Approve
          </button>
          <button
            className={Style.button}
            disabled={detil.status === 'pending' ? false : true}
            onClick={async () => await handleClick('cancel')}
          >
            Reject
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailTopUp;
