import React from 'react'
import Style from './card.module.css'
import TestProfile from '../../../assets/img/avatar/1.png'

const ContactCard = () => {
    return (
        <div>
            <div className={Style.receiverCard}>
                <img src={TestProfile} alt="contact" className={Style.imgContact}/>
                <div className={Style.contactDesc}>
                    <p className="text-18 bold c-grey">Samuel Suhi</p>
                    <p className="text-16 c-grey">+62 813-8492-9994</p>
                </div>
            </div>
        </div>
    )
}

export default ContactCard
