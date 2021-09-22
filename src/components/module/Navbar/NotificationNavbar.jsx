/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Card from '../../base/card';
import CardContainer from '../../base/cardContainer';
// import cs from 'classnames';
import style from './NavbarAuth.module.css';
import Avatar from '../../../assets/img/avatar/default.png';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { getTransaction } from '../../../configs/actions/transactionAction';
function NotificationNavbar(props) {
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
  function convertToAngka(rupiah) {
    return parseInt(rupiah.replace(/,.*|[^0-9]/g, ''), 10) ? parseInt(rupiah.replace(/,.*|[^0-9]/g, ''), 10) : '';
  }
  return (
    <CardContainer className={`d-flex flex-column ${props.show ? style['notification-active'] : 'd-none'}`}>
      <div>
        {transactionList?.data ? (
          transactionList?.data?.map((transaction, index) => (
            <Link to={`/status-transfer/${transaction.transaction_id}`} key={index}>
              <Card
                type="tfHistory"
                image={
                  transaction.transaction_type === 'topup'
                    ? `${process.env.REACT_APP_API_URL}/${user.image}`
                    : transaction.image_reciever
                    ? `${process.env.REACT_APP_API_URL}/${transaction.image_reciever}`
                    : Avatar
                }
                name={transaction.transaction_type === 'topup' ? `${transaction.fullname}` : `${transaction.recipient}`}
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
  );
}

export default NotificationNavbar;
