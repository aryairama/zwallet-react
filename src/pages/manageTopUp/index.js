/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import CardContainer from '../../components/base/cardContainer';
import Search from '../../components/base/search';
import Card from '../../components/base/card';
import Avatar from '../../assets/img/avatar/default.png';
import { Link } from 'react-router-dom';
import './tuManage.css';
import { useSelector, useDispatch } from 'react-redux';
import { buttonItemRender } from '../../components/base';
import Pagination from 'rc-pagination';
import locale from 'rc-pagination/es/locale/en_US';
import 'rc-pagination/assets/index.css';
import { getTopUp } from '../../configs/actions/topupAction';
function ManageTopUp() {
  const [page, setPage] = React.useState(1);
  const [actionUser, setActionUser] = React.useState({
    search: '',
  });
  const [sort, setSort] = React.useState('DESC');
  const dispatch = useDispatch();
  React.useEffect(async () => {
    await dispatch(getTopUp(4, sort, page, actionUser.search, 'created_at'));
  }, [page, actionUser.search, sort]);
  const { topUp } = useSelector((state) => state.topUp);
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
        <p className="text-bold text-18">Top Up History</p>
        <Search value={actionUser.search} name="search" onChange={handleChange} />
        <div>
          {topUp?.data ? (
            topUp?.data?.map((item, index) => (
              <Link to={`/detail-topup/${item.transaction_id}`} key={index}>
                <Card
                  type="transactionList"
                  image={ item.user_image ? `${process.env.REACT_APP_API_URL}/${item.user_image}` : Avatar }
                  name={item.fullname}
                  transaction_type={item.status}
                  transactionVal={item.status === 'approve' ? true : false}
                  statusTransaction={item.status}
                  amount={convertToRupiah(convertToAngka(item.amount))}
                />
              </Link>
            ))
          ) : (
            <p className="text-18">You dont have any transaction</p>
          )}
        </div>
        <div className="row">
          <div className="col-6">
            {topUp?.pagination && (
              <Pagination
                current={page}
                total={topUp.pagination.countData}
                pageSize={topUp.pagination.limit}
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

export default ManageTopUp;
