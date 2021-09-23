/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/wrapper.css';
import Search from '../../components/base/search';
import Card from '../../components/base/card';
import Avatar from '../../assets/img/avatar/default.png';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUser } from '../../configs/actions/userAction';
import { buttonItemRender } from '../../components/base';
import Pagination from 'rc-pagination';
import locale from 'rc-pagination/es/locale/en_US';
import 'rc-pagination/assets/index.css';
const SearchReceiver = (props) => {
  const [page, setPage] = React.useState(1);
  const [actionUser, setActionUser] = React.useState({
    search: '',
  });
  const { allUser, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  React.useEffect(async () => {
    await dispatch(getAllUser(5, 'DESC', 'ALL_USER', page, actionUser.search, 'user_id'));
  }, [page, actionUser.search]);
  const handleChange = (e) => {
    setActionUser((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
  return (
    <>
      <div className="wrapperContent">
        <p className="text-18 bold"> Search Receiver</p>
        <Search value={actionUser.search} name="search" onChange={handleChange} />
        {allUser?.data?.map((receiver, index) => (
          <Link key={index} to={`/input-amount/${receiver.user_id}`}>
            {user.user_id !== receiver.user_id && (
              <Card
                type="contact"
                imageVal={true}
                image={receiver.image ? `${process.env.REACT_APP_API_URL}/${receiver.image}` : Avatar}
                name={`${receiver.first_name} ${receiver.last_name}`}
                phone={receiver.phone_number}
              />
            )}
          </Link>
        ))}
        <div className="row">
          <div className="col-12">
            {allUser?.pagination && (
              <Pagination
                current={page}
                total={allUser.pagination.countData}
                pageSize={allUser.pagination.limit}
                itemRender={buttonItemRender}
                locale={locale}
                onChange={(current, pageSize) => setPage(current)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchReceiver;
