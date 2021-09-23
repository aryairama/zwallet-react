/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Button } from '../../components/base';
import CardContainer from '../../components/base/cardContainer';
import { plusIcon, UpIcon } from '../../assets/index';
import Card from '../../components/base/card';
import Avatar from '../../assets/img/avatar/default.png';
import './home.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTransaction } from '../../configs/actions/transactionAction';
function Index(props) {
  React.useEffect(() => {
    document.title = 'Dashboard';
  }, []);
  const dispatch = useDispatch();
  React.useEffect(async () => {
    await dispatch(getTransaction(4, 'DESC', 1, '', 'created_at'));
  }, [dispatch]);
  const { user } = useSelector((state) => state.user);
  const { transactionList } = useSelector((state) => state.transaction);
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
  return (
    <React.Fragment>
      <div className="wrapper__card-home">
        <CardContainer className="content__card-home">
          <div className="wrapper__card-text">
            <p className="c-greyLight text-18 my-0 ">Balance</p>
            <p className="text-40 c-white my-0 ">{convertToRupiah(user.saldo)}</p>
            <p className="text-18 c-greyLight my-0">{user.phone_number ? user.phone_number : ''}</p>
          </div>
        </CardContainer>
        <div className="wrapper__btn-home">
          <div className="btn__up-icon">
            <Button
              styling="myBtn text-18 text-bold d-flex btn__tf-tp"
              iconText
              img={UpIcon}
              width="28px"
              colorIcon="c-white"
              height="28px"
              onClick={() => props.history.push('/transfer')}
            >
              Transfer
            </Button>
          </div>
          <div className="btn__plus-icon">
            <Button
              iconText
              styling="myBtn text-bold text-18 d-flex btn__tf-tp"
              width="28px"
              height="28px"
              img={plusIcon}
              onClick={() => props.history.push('/topup')}
            >
              Top up
            </Button>
          </div>
        </div>
      </div>
      <div className="wrapper__card-hm"></div>
      <div className="row justify-content-between mt-4">
        <div className="col-xl-7">
          <CardContainer className="left__side-home bg__white"></CardContainer>
        </div>
        <div className="col-xl-5">
          <CardContainer className="right__side-home bg__white">
            <div className="transaction d-flex justify-content-between">
              <p className="text-18 c-dark">Transaction History</p>
              <Link to="/transaction-history">
                <p className="text-18 c-primary">See all</p>
              </Link>
            </div>
            <div>
              {transactionList?.data ? (
                transactionList?.data?.map((transaction, index) => (
                  <Link to={`/status-transfer/${transaction.transaction_id}`} key={index}>
                    <Card
                      type="tfHistory"
                      image={
                        transaction.transaction_type === 'topup'
                          ? transaction.image
                            ? `${process.env.REACT_APP_API_URL}/${transaction.image}`
                            : Avatar
                          : transaction.image_reciever
                          ? `${process.env.REACT_APP_API_URL}/${transaction.image_reciever}`
                          : Avatar
                      }
                      name={
                        transaction.transaction_type === 'topup'
                          ? `${transaction.fullname}`
                          : `${transaction.recipient}`
                      }
                      typeTransaction={transaction.transaction_type}
                      // statusTransaction="c-green"
                      transactionVal={transaction.transaction_type === 'topup' ? true : false}
                      totalTransaction={convertToRupiah(convertToAngka(transaction.amount))}
                    />
                  </Link>
                ))
              ) : (
                <p className="text-18">You dont have any transaction</p>
              )}
            </div>
          </CardContainer>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;
