import React from 'react';
import Style from './card.module.css';
import '../../../assets/css/color.css';
import cs from 'classnames';
import Trash from '../../../assets/img/icons/trash.svg';
import { Link } from 'react-router-dom';
const Card = ({ type, image, name, phone, number, title, content }) => {
  if (type === 'contact') {
    return (
      <div>
        <div className={Style.receiverCard}>
          <img src={image} alt="contact" className={Style.imgContact} />
          <div className={Style.contactDesc}>
            <p className="text-18 bold c-grey">{name}</p>
            <p className="text-16 c-dark">{phone}</p>
          </div>
        </div>
      </div>
    );
  } else if (type === 'topUp') {
    return (
      <div>
        <div className={Style.receiverCard}>
          <p className={`text-18 c-dark ${Style.marginZero}`}>
            <span className="c-primary c-mr-4">{number} </span>
            {content}
          </p>
        </div>
      </div>
    );
  } else if (type === 'stuff') {
    return (
      <div>
        <div className={cs(Style.receiverCard, Style.column)}>
          {title === 'Phone Number' ? (
            <div className={Style.phone}>
              <div>
                <p className={`text-16 c-dark ${Style.marginZero}`}>{title}</p>
                <p className={`text-18 bold c-grey ${Style.marginZero}`}>{content}</p>
              </div>
              <Link to="/manage-phone-number" className="c-primary text-16">
                Manage
              </Link>
            </div>
          ) : (
            <>
              <p className={`text-16 c-dark ${Style.marginZero}`}>{title}</p>
              <p className={`text-18 bold c-grey ${Style.marginZero}`}>{content}</p>
            </>
          )}
        </div>
      </div>
    );
  } else if (type === 'managePhone') {
    return (
      <>
        {content ? (
          <div className={Style.receiverCard}>
            <div className={Style.phone}>
              <div>
                <p className={`text-16 c-dark ${Style.marginZero}`}>{title}</p>
                <p className={`text-18 bold c-grey ${Style.marginZero}`}>{content}</p>
              </div>
              <Link to="/personal-info">
                <img src={Trash} alt="trash" />
              </Link>
            </div>
          </div>
        ) : (
          <div className={Style.receiverCard}>
            <Link to="/add-phone-number" className="text_18 c-blue">
              Add Phone Number
            </Link>
          </div>
        )}
      </>
    );
  }
};

export default Card;
