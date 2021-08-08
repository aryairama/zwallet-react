import React from 'react'
import Card from '../../components/base/card'
import '../../assets/css/color.css'
import '../../assets/css/typography.css'
const PersonalInfo = () => {
    return (
        <div>
            <div className='wrapperContent'>
                <p className='text-18 bold'>Personal Information</p>
                <p className='text-16 c-dark desciptionContentBox'>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                <Card type='stuff' title='First Name' content='Robert'/>
                <Card type='stuff' title='Last Name' content='Chandler'/>
                <Card type='stuff' title='Verified E-mail' content='pewdiepie1@gmail.com'/>
                <Card type='stuff' title='Phone Number' content='+62 813-9387-7946'/>
            </div>
        </div>
    )
}

export default PersonalInfo
