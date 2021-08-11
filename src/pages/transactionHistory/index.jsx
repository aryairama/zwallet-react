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
import locale from 'rc-pagination/es/locale/en_US';
import 'rc-pagination/assets/index.css';
function Index() {
  const [page, setPage] = React.useState(1);
  const [actionUser, setActionUser] = React.useState({
    search: '',
  });
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    await dispatch(getTransaction(4, 'DESC', page, actionUser.search, 'created_at'));
  }, [dispatch, page, actionUser.search]);
  const { transactionList } = useSelector((state) => state.transaction);
  const { user } = useSelector((state) => state.user);
  const handleChange = (e) => {
    setActionUser((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
  console.log(actionUser);
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
        <Search value={actionUser.search} name="search" onChange={handleChange} />
        <div>
          {transactionList?.data?.map((transaction, index) => (
            <Card
              key={index}
              type="tfHistory"
              image={
                transaction.image_reciever ? `${process.env.REACT_APP_API_URL}/${transaction.image_reciever}` : Avatar
              }
              name={`${transaction.recipient}`}
            />
          ))}
        </div>
        <div className="row">
          <div className="col-12">
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
        </div>
      </CardContainer>
    </React.Fragment>
  );
}

export default Index;
