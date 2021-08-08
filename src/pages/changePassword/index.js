import React from 'react'
import { InputPasswordIcon, Button } from '../../components/base'
import { lock, eyecrossed } from "../../assets/index";
import Style from './pass.module.css'
const ChangePassword = () => {
    return (
        <>
            <div className='wrapperContent'>
                <p className='text-18 bold'>Change Password</p>
                <p className='text-16 c-dark desciptionContentBox'>You must enter your current password and then type your new password twice.</p>
                <div className={Style.passWrapper}>
                    <div className='mb-4'>
                        <InputPasswordIcon
                            img={lock}
                            width="21px"
                            height="21px"
                            eyePassword={eyecrossed}
                            placeholder="Current Password"
                        ></InputPasswordIcon>
                    </div>
                    <div className='mb-4'>
                        <InputPasswordIcon
                            img={lock}
                            width="21px"
                            height="21px"
                            eyePassword={eyecrossed}
                            placeholder="New Password"
                        ></InputPasswordIcon>
                    </div>
                    <div className='mb-4'>
                        <InputPasswordIcon
                            img={lock}
                            width="21px"
                            height="21px"
                            eyePassword={eyecrossed}
                            placeholder="Repeat New Password"
                        ></InputPasswordIcon>
                    </div>
                    <Button
                        styling="bg__primary text-18 c-white"
                        style={{ marginTop: "40px", marginBottom: "40px" }}
                    >
                        Change Password
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ChangePassword
