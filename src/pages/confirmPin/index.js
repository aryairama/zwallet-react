import React from 'react'
// import Style from './pin.module.css'
import LayoutAuth from '../../components/module/LayoutAuth'
import { Button } from '../../components/base'
import Success from '../../assets/img/icons/success.svg'
const PinSuccess = () => {
    // const [pin, setPin] = useState('')
    // const handleChange = (e) => {
    //     setPin
    // }
    return (
        <div>
            <LayoutAuth>
                <img src={Success} alt="success" style={{marginBottom: '50px', marginTop: '60px'}}/>
                <p className="text-24">
                    Your PIN Was Successfully Created
                </p>
                <div>
                    <p className="text-16 c-grey" style={{ opacity: "60%" }}>
                    Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!
                    </p>
                </div>
                <Button
                    disabled
                    styling="bg__primary text-18 c-white"
                    style={{ marginTop: "90px", width: '100%' }}
                >
                    Login Now
                </Button>
            </LayoutAuth>
        </div>
    )
}

export default PinSuccess
