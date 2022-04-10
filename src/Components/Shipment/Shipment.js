import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const Shipment = () => {
    const [user] = useAuthState(auth)
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  //   const navigate = useNavigate();

  //   if(user){
  //     navigate('/')
  //   }
  const handleNameOnBlur=(e)=>{
      setName(e.target.value)
  }
  const handleAddressOnBlur = (e) => {
    setAddress(e.target.value);
  };
  const handlePhoneOnBlur = (e) => {
    setPhone(e.target.value);
  };

  const createUsers = (e) => {
    e.preventDefault();
    const shipping = {name, address, phone}
    console.log(shipping);
  };

  return (
    <div className="auth-form-container ">
      <div className="auth-form">
        <h1>Shipment Information</h1>
        <form onSubmit={createUsers}>
          <div className="input-field">
            <label htmlFor="Name">Your Name *</label>
            <div className="input-wrapper">
              <input
                onBlur={handleNameOnBlur}
                type="text"
                name="email"
                id="email"
                required
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email *</label>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                id="email"
                readOnly
                value={user?.email}
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="Address">Address *</label>
            <div className="input-wrapper">
              <input
                onBlur={handleAddressOnBlur}
                type="text"
                name="text"
                id="text"
                required
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="Phone">Phone Number *</label>
            <div className="input-wrapper">
              <input
                onBlur={handlePhoneOnBlur}
                type="text"
                name="text"
                id="text"
                required
              />
            </div>
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <button type="submit" className="auth-form-submit">
            Manage Shipment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shipment;
