import React from 'react'
import Style from './card.module.css'
import '../../../assets/css/color.css'
const Card = ({type, image, name, phone, number, title, content}) => {
    if (type === 'contact') {
        return (
            <div>
                <div className={Style.receiverCard}>
                    <img src={image} alt="contact" className={Style.imgContact}/>
                    <div className={Style.contactDesc}>
                        <p className="text-18 bold c-grey">{name}</p>
                        <p className="text-16 c-grey">{phone}</p>
                    </div>
                </div>
            </div>
        )
    } else if (type === 'topUp') {
        return (
            <div>
                <div className={Style.receiverCard}>
                    <p className='text-18 c-grey'><span className='c-primary c-mr-4'>{number}          </span>{content}</p>
                </div>
            </div>
        )
    } else if (type === 'stuff') {
        return (
            <div>
                <div className={Style.receiverCard}>
                    <p className="text-16 c-grey">{title}</p>
                    <p className="text-18 bold">{content}</p>
                </div>
            </div>
        )
    }
}

export default Card
