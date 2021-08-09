import React from 'react';
import Pin from '../../components/base/Pin';
import LayoutAuth from '../../components/module/LayoutAuth';
import { Button } from '../../components/base';
const CreatePin = () => {
  // const [pin, setPin] = useState('')
  // const handleChange = (e) => {
  //     setPin
  // }
  return (
    <>
      <LayoutAuth>
        <p className="text-24">
          Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That
          You Created Yourself.
        </p>
        <div>
          <p className="text-16 c-grey" style={{ opacity: '60%' }}>
            Create 6 digits pin to secure all your money and your data in
            Zwallet app. Keep it secret and don’t tell anyone about your Zwallet
            account password and the PIN.
          </p>
        </div>
        <Pin/>
        <Button
          disabled
          styling="bg__primary text-18 c-white"
          style={{ marginTop: '90px', width: '100%' }}
        >
          Confirm
        </Button>
      </LayoutAuth>
    </>
  );
};

export default CreatePin;
