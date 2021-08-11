import React from 'react';
import CardContainer from '../../components/base/cardContainer';
import Card from '../../components/base/card';
import Avatar from '../../assets/img/avatar/1.png';
import { Link } from 'react-router-dom';
import './tfHistory.css';
import { useSelector, useDispatch } from 'react-redux';
import { getTransaction, transaction } from '../../configs/actions/transactionAction';
import { buttonItemRender } from '../../components/base';
import Pagination from 'rc-pagination';
import locale from 'rc-pagination/es/locale/en_US';
import 'rc-pagination/assets/index.css';
function Index() {
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    await dispatch(getTransaction(5, 'DESC', 'ALL_USER', page, 'created_at'));
  }, [page]);
  const { transactionList } = useSelector((state) => state.transaction);
  const { user } = useSelector((state) => state.user)
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
      <CardContainer className="bg__white">
        <p className="text-bold text-18">Transaction History</p>
        <div>
        {transactionList?.data ? (
            transactionList?.data?.map((transaction, index) => (
            <Link to={`/status-transfer/${transaction.transaction_id}`}>
              <Card
                key={index}
                type="transactionList"
                image={
                  transaction.transaction_type === 'topup' ? `${process.env.REACT_APP_API_URL}/${user.image}` : transaction.image_reciever ? `${process.env.REACT_APP_API_URL}/${transaction.image_reciever}` : Avatar
                }
                name={transaction.transaction_type === 'topup' ? `${transaction.fullname}`:`${transaction.recipient}`}
                transaction_type={transaction.transaction_type}
                transactionVal={transaction.transaction_type === 'topup' ? true : false}
                amount={convertToRupiah(convertToAngka(transaction.amount))}
              />
            </Link>
          ))) : 
          (
            <p className="text-18">You dont have any transaction</p>
          )
          }
        </div>
        <div className="row">
          <div className="col-12">
            {transactionList?.pagination && (
              <Pagination
                current={page > 0 ? page - 1 : page}
                total={transactionList.pagination.countData}
                pageSize={transactionList.pagination.limit}
                itemRender={buttonItemRender}
                locale={locale}
                onChange={(current, pageSize) => setPage(current)}
              />
            )}
          </div>
        </div>
        {/* <div>
          <p className="text-16 c-greySLight">This Week</p>
          {transactionList?.data.map((receiver, index) => (
            <Link to={`/input-amount/${receiver.user_id}`}>
              {user.user_id !== receiver.user_id && (
                <Card
                  key={index}
                  type="tfHistory"
                  image={receiver.image ? `${process.env.REACT_APP_API_URL}/${receiver.image}` : Avatar}
                  name={`${receiver.first_name} ${receiver.last_name}`}
                  phone={receiver.phone_number}
                />
              )}
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-16 c-greySLight">This Month</p>
          {transactionList?.data.map((receiver, index) => (
            <Link to={`/input-amount/${receiver.user_id}`}>
              {user.user_id !== receiver.user_id && (
                <Card
                  key={index}
                  type="tfHistory"
                  image={receiver.image ? `${process.env.REACT_APP_API_URL}/${receiver.image}` : Avatar}
                  name={`${receiver.first_name} ${receiver.last_name}`}
                  phone={receiver.phone_number}
                />
              )}
            </Link>
          ))}
        </div>
         */}
      </CardContainer>
    </React.Fragment>
  );
}

export default Index;
