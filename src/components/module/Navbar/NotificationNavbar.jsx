/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Card from '../../base/card';
import CardContainer from '../../base/cardContainer';
// import cs from 'classnames';
import style from './NavbarAuth.module.css';
import greenArrowDown from '../../../assets/img/icons/greenArrowDown.svg';

import redArrowUp from '../../../assets/img/icons/redArrowUp.svg';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { getTransaction } from '../../../configs/actions/transactionAction';
function NotificationNavbar(props) {
  const dispatch = useDispatch();
  React.useEffect(async () => {
    await dispatch(getTransaction(4, 'DESC', 1, '', 'created_at'));
  }, [dispatch]);

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
                type="historyNavbar"
                typeTransaction={transaction.transaction_type}
                image={
                  transaction.transaction_type === 'transfer'
                    ? redArrowUp
                    : transaction.transaction_type === 'transfer_in'
                    ? greenArrowDown
                    : greenArrowDown
                }
                // title={
                //   transaction.transaction_type === 'topup' ? `${transaction.fullname}` : `${transaction.recipient}`
                // }
                // statusTransaction="c-green"
                // transactionVal={transaction.transaction_type === 'topup' ? true : false}
                content={convertToRupiah(convertToAngka(transaction.amount))}
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
