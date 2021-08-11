/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import CardContainer from '../../components/base/cardContainer';
import { success, failed } from '../../assets';
import Card from '../../components/base/card';
import { useSelector } from 'react-redux';
import { getTransactionById } from '../../configs/actions/transactionAction';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/base';
import downloadIcon from '../../assets/img/icons/download.png';
import shareIcon from '../../assets/img/icons/share.svg';
import style from './statusTransfer.module.css';
import pendingIcon from '../../assets/img/icons/pending.svg';

function Index(props) {
  const { transaction_id } = useParams();
  const dispatch = useDispatch();

  const { amount, description, image_reciever, recipient, status, phone_reciever, transaction_type, image_topup } =
    useSelector((state) => state.transaction.transactionId);
  const { saldo } = useSelector((state) => state.user.user);

  React.useEffect(() => {
    document.title = 'Status Transfer';
    dispatch(getTransactionById(transaction_id));
  }, [transaction_id]);

  const date = new Date();
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
  return (
    <React.Fragment>
      <CardContainer className="bg__white">
        <div className="d-flex flex-column justify-content-center align-items-center">
          {status === 'approve' && (
            <>
              <img src={success} alt="success"></img>
              <p className="mt-4 text-22 text-bold">Transfer Succes</p>
            </>
          )}
          {status === 'cancel' && (
            <>
              <img src={failed} alt="success"></img>
              <p className="mt-4 text-22 text-bold">Transfer Failed</p>
              <p className="mt-4 text-16">
                We can’t transfer your money at the moment, we recommend you to check your internet connection and try
                again.
              </p>
            </>
          )}
          {status === 'pending' && (
            <>
              <img src={pendingIcon} alt="pending"></img>
              <p className="mt-4 text-22 text-bold">Transfer Pending</p>
              <p className="mt-4 text-16">Waiting admin to approve your transfer</p>
            </>
          )}
        </div>
        <div className="mt-3">
          {transaction_type === 'topup' && (
            <>
              <Card type="stuff" title="Total Topup" content={convertToRupiah(amount)} />
              <Card type="stuff" title="Proof of payment">
                <img
                  className="mt-4 ms-auto me-auto"
                  src={`${process.env.REACT_APP_API_URL}/${image_topup}`}
                  style={{
                    maxWidth: '350px',
                    maxHeight: '350px',
                    objectFit: 'contain',
                  }}
                  alt="Bukti topup"
                ></img>
              </Card>
            </>
          )}
          {transaction_type === 'transfer' && (
            <>
              <Card type="stuff" title="Amount" content={convertToRupiah(amount)} />
              <Card type="stuff" title="Balance Left" content={convertToRupiah(saldo)} />
              <Card
                type="stuff"
                title="Date & Time"
                content={`${date.toLocaleString('default', {
                  month: 'long',
                })} ${date.getDate()}, ${date.getFullYear()} -  ${date.getHours()}:${date.getMinutes()}`}
              />
              <Card type="stuff" title="Notes" content={description} />
              <p className="text_18 bold c-grey">Transfer to</p>
              <Card
                imageVal={true}
                type="contact"
                image={`${process.env.REACT_APP_API_URL}/${image_reciever}`}
                name={recipient}
                phone={phone_reciever}
              />
            </>
          )}
          {transaction_type === 'transfer_in' && (
            <>
              <Card type="stuff" title="Amount" content={convertToRupiah(amount)} />
              <Card type="stuff" title="Balance Left" content={convertToRupiah(saldo)} />
              <Card
                type="stuff"
                title="Date & Time"
                content={`${date.toLocaleString('default', {
                  month: 'long',
                })} ${date.getDate()}, ${date.getFullYear()} -  ${date.getHours()}:${date.getMinutes()}`}
              />
              <Card type="stuff" title="Notes" content={description} />
              <p className="text_18 bold c-grey">Transfer to</p>
              <Card
                imageVal={true}
                type="contact"
                image={`${process.env.REACT_APP_API_URL}/${image_reciever}`}
                name={recipient}
                phone={phone_reciever}
              />
            </>
          )}
          <div className="mt-5">
            <div className={`${style.btnStatusTF}`}>
              {status === 'approve' && (
                <>
                  <div className={`${style.btnShareDwl}`}>
                    <Button icon img={shareIcon} styling="btnDownload"></Button>
                    <Button iconText img={downloadIcon} styling={`${style.btnDwnl} text-18 btnDownload c-primary`}>
                      Download PDF
                    </Button>
                  </div>
                  <div>
                    <Button
                      styling={`bg__primary text-18 ps-5 pe-5 c-white ${style.btnToHome}`}
                      onClik={() => props.history('/dashboard')}
                    >
                      Back to Home
                    </Button>
                  </div>
                </>
              )}
              {status === 'cancel' && (
                <>
                  <div>
                    <Button
                      styling={`bg__primary text-18 ps-5 pe-5 c-white ${style.btnToHome}`}
                      onClik={() => props.history('/dashboard')}
                    >
                      Try Again
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </CardContainer>
    </React.Fragment>
  );
}

export default Index;
