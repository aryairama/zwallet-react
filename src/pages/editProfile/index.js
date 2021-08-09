import React from 'react';
import Style from './edit.module.css'
import { InputTextIcon, Button } from '../../components/base'
import { person, mail } from "../../assets/index";
import Avatar from '../../assets/img/avatar/1.png'
const EditProfile = () => {
  return (
    <>
      <div className="wrapperContent">
        <p className="text_18 bold c-gray">Edit Profile</p>
        <div className={Style.passWrapper}>
          <div className={Style.changePhoto}>
            <img src={Avatar} alt="profile" />
            <input type="file" name="image" id="image" className="d-none"/>
            <label htmlFor="image" className="btn bg__primary text-18 c-white rounded-pill">Upload Foto</label>
          </div>
          <div className="mb-4">
            <InputTextIcon
              img={person}
              width="21px"
              height="21px"
              placeholder="First Name"
            ></InputTextIcon>
          </div>
          <div className="mb-4">
            <InputTextIcon
              img={person}
              width="21px"
              height="21px"
              placeholder="Last Name"
            ></InputTextIcon>
          </div>
          <div className="mb-4">
            <InputTextIcon
              img={mail}
              width="21px"
              height="21px"
              placeholder="Email"
            ></InputTextIcon>
          </div>
          <Button styling="bg__primary text-18 c-white" style={{ marginTop: '40px', marginBottom: '40px' }}>
            Change Profile
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
