import React from 'react';
import '../../assets/css/wrapper.css';
import Search from '../../components/base/search';
import Card from '../../components/base/card';
import Avatar from '../../assets/img/avatar/1.png';
const SearchReceiver = () => {
  return (
    <>
      <div className="wrapperContent">
        <p className="text-18 bold"> Search Receiver</p>
        <Search />
        <Card
          type="contact"
          image={Avatar}
          name="Samuel Suhi"
          phone="+62 813-8492-9994"
        />
      </div>
    </>
  );
};

export default SearchReceiver;
