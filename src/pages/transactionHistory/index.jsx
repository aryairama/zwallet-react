/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import CardContainer from '../../components/base/cardContainer';
import Search from '../../components/base/search';
import Card from '../../components/base/card';
import Avatar from '../../assets/img/avatar/1.png';
import './tfHistory.css';
import { useSelector, useDispatch } from 'react-redux';
import { getTransaction } from '../../configs/actions/transactionAction';
import { buttonItemRender } from '../../components/base';
import Pagination from 'rc-pagination';
import { Link } from 'react-router-dom';
import locale from 'rc-pagination/es/locale/en_US';
import 'rc-pagination/assets/index.css';
function Index() {
  const [page, setPage] = React.useState(1);
  const [actionUser, setActionUser] = React.useState({
    search: '',
  });
  const [sort, setSort] = React.useState('DESC');
  const dispatch = useDispatch();
  React.useEffect(async () => {
    await dispatch(getTransaction(4, sort, page, actionUser.search, 'created_at'));
  }, [page, actionUser.search, sort]);
  const { transactionList } = useSelector((state) => state.transaction);
  const { user } = useSelector((state) => state.user);
  const handleChange = (e) => {
    setActionUser((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
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
  const handleSort = () => {
    if (sort === 'DESC') {
      setSort('ASC');
    } else if (sort === 'ASC') {
      setSort('DESC');
    }
  };
  return (
    <React.Fragment>
      <CardContainer className="bg__white">
        <p className="text-bold text-18">Transaction History</p>
        <Search value={actionUser.search} name="search" onChange={handleChange} />
        <div>
          {transactionList?.data? (
            transactionList?.data?.map((transaction, index) => (
              <Link to={`/status-transfer/${transaction.transaction_id}`} key={index}>
                <Card
                  type="transactionList"
                  image={
                    transaction.transaction_type === 'topup'
                      ? `${process.env.REACT_APP_API_URL}/${user.image}`
                      : transaction.image_reciever
                      ? `${process.env.REACT_APP_API_URL}/${transaction.image_reciever}`
                      : Avatar
                  }
                  name={
                    transaction.transaction_type === 'topup' ? `${transaction.fullname}` : `${transaction.recipient}`
                  }
                  transaction_type={transaction.transaction_type}
                  transactionVal={transaction.transaction_type === 'topup' ? true : false}
                  statusTransaction={transaction.status}
                  amount={convertToRupiah(convertToAngka(transaction.amount))}
                />
              </Link>
            ))
          ) : (
            <p className="text-18">You dont have any transaction</p>
          )}
        </div>
        <div className="row">
          <div className="col-6">
            {transactionList?.pagination && (
              <Pagination
                current={page}
                total={transactionList.pagination.countData}
                pageSize={transactionList.pagination.limit}
                itemRender={buttonItemRender}
                locale={locale}
                onChange={(current, pageSize) => setPage(current)}
              />
            )}
          </div>
          <div className="col-6 text-end">
            <button onClick={handleSort} className="paginationArrow">
              {sort === 'DESC' ? 'Oldest' : 'Latest'}
            </button>
          </div>
        </div>
      </CardContainer>
    </React.Fragment>
  );
}

export default Index;
