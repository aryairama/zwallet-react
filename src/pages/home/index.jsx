import React from 'react';
import { Button } from '../../components/base';
import CardContainer from '../../components/base/cardContainer';
import { plusIcon, UpIcon } from '../../assets/index';
import Card from '../../components/base/card';
import Avatar from '../../assets/img/avatar/1.png';
import './home.css';

function Index() {
  React.useEffect(() => {
    document.title = 'Dashboard';
  });
  return (
    <React.Fragment>
      <div className="wrapper__card-home">
        <CardContainer className="content__card-home">
          <div className="wrapper__card-text">
            <p className="c-greyLight text-18 my-0 ">Balance</p>
            <p className="text-40 c-white my-0 ">Rp. 1200000</p>
            <p className="text-18 c-greyLight my-0">+62 813-9387-7946</p>
          </div>
        </CardContainer>
        <div class="wrapper__btn-home">
          <di className="btn__up-icon">
            <Button
              styling="myBtn text-18 text-bold d-flex btn__tf-tp"
              iconText
              img={UpIcon}
              width="28px"
              colorIcon="c-white"
              height="28px"
            >
              Transfer
            </Button>
          </di>
          <div className="btn__plus-icon">
            <Button
              iconText
              styling="myBtn text-bold text-18 d-flex btn__tf-tp"
              width="28px"
              height="28px"
              img={plusIcon}
            >
              Top up
            </Button>
          </div>
        </div>
      </div>
      <div className="wrapper__card-hm"></div>
      <div className="row justify-content-between mt-4">
        <div className="col-xl-7">
          <CardContainer className="left__side-home bg__white"></CardContainer>
        </div>
        <div className="col-xl-5">
          <CardContainer className="right__side-home bg__white">
            <div className="transaction d-flex justify-content-between">
              <p className="text-18 c-dark">Transaction History</p>
              <p className="text-18 c-primary">See all</p>
            </div>
            <Card
              type="tfHistory"
              image={Avatar}
              name="Samuel Suhi"
              typeTransaction="Subcrition"
              statusTransaction="c-green"
              totalTransaction="12312312312"
            />
            <Card
              type="tfHistory"
              image={Avatar}
              name="Samuel Suhi"
              typeTransaction="Transfer"
              statusTransaction="c-green"
              totalTransaction="123"
            />
            <Card
              type="tfHistory"
              image={Avatar}
              name="Samuel Suhi"
              typeTransaction="Transfer"
              statusTransaction="c-error"
              totalTransaction="1222222"
            />
          </CardContainer>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;
