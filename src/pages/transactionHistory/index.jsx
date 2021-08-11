import React from 'react';
import CardContainer from '../../components/base/cardContainer';
import Card from '../../components/base/card';
import Avatar from '../../assets/img/avatar/1.png';
import { Link } from 'react-router-dom';
import './tfHistory.css';
import { useSelector, useDispatch } from 'react-redux';
import { getTransaction } from '../../configs/actions/transactionAction';
import { buttonItemRender } from '../../components/base';
import Pagination from 'rc-pagination';
import locale from 'rc-pagination/es/locale/en_US';
import 'rc-pagination/assets/index.css';
function Index() {
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
<<<<<<< HEAD
    await dispatch(getTransaction());
  }, [dispatch]);
=======
    await dispatch(getTransaction(2, 'DESC', page, 'created_at'));
  }, [dispatch, page]);
>>>>>>> 89f905d31137db632395daa571b794b7c451bb31
  const { transactionList } = useSelector((state) => state.transaction);
  console.log(transactionList);
  return (
    <React.Fragment>
      <CardContainer className="bg__white">
        <p className="text-bold text-18">Transaction History</p>
        <div>
          {transactionList?.data.map((transaction, index) => (
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
