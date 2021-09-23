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
import { BarChart, Bar, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

  const data = [
    {
      name: 'Sat',
      income: 4000,
      expense: 2400,
    },
    {
      name: 'Sun',
      income: 3000,
      expense: 1398,
    },
    {
      name: 'Mon',
      income: 2000,
      expense: 9800,
    },
    {
      name: 'Tue',
      income: 2780,
      expense: 3908,
    },
    {
      name: 'Wed',
      income: 1890,
      expense: 4800,
    },
    {
      name: 'Thu',
      income: 2390,
      expense: 3800,
    },
    {
      name: 'Fri',
      income: 3490,
      expense: 4300,
    },
  ];

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
          <CardContainer className="left__side-home bg__white">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" stackId="a" fill="#6379F4" />
                <Bar dataKey="expense" stackId="a" fill="#9DA6B5" />
              </BarChart>
            </ResponsiveContainer>
          </CardContainer>
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
                      statusTransaction={transaction.status}
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
