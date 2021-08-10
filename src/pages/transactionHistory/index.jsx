import React from 'react';
import CardContainer from '../../components/base/cardContainer';
import Card from '../../components/base/card';
import Avatar from '../../assets/img/avatar/1.png';
import { Link } from 'react-router-dom';
import './tfHistory.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUser } from '../../configs/actions/userAction';
import { buttonItemRender } from '../../components/base';
import Pagination from 'rc-pagination';
import locale from 'rc-pagination/es/locale/en_US';
import 'rc-pagination/assets/index.css';
function Index() {
  const [page, setPage] = React.useState(1);
  const { allUser, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    await dispatch(getAllUser(2, 'DESC', 'ALL_USER', page, '', 'user_id'));
  }, [dispatch, page]);

  return (
    <React.Fragment>
      <CardContainer className="bg__white">
        <p className="text-bold text-18">Transaction History</p>
        <div>
          <p className="text-16 c-greySLight">This Week</p>
          {allUser?.data.map((receiver, index) => (
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
          {allUser?.data.map((receiver, index) => (
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
        <div className="row">
          <div className="col-12">
            {allUser?.pagination && (
              <Pagination
                current={page > 0 ? page - 1 : page}
                total={allUser.pagination.countData}
                pageSize={allUser.pagination.limit}
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
