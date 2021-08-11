import React from 'react';
import Card from '../../base/card';
import CardContainer from '../../base/cardContainer';
// import cs from 'classnames';
import style from './NavbarAuth.module.css';
import Avatar from '../../../assets/img/avatar/1.png';
function NotificationNavbar(props) {
  return (
    <CardContainer className={`d-flex flex-column ${props.show ? style['notification-active'] : 'd-none'}`}>
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
        typeTransaction="Subcrition"
        statusTransaction="c-green"
        totalTransaction="12312312312"
      />
    </CardContainer>
  );
}

export default NotificationNavbar;
