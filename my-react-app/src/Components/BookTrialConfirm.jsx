import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookTrialConfirm.css';
import ClassRoomGif from '../assets/ClassRoomGif.gif';

const BookTrialConfirm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { formData, emailSent } = location.state || {};

  const handleEdit = () => {
    navigate('/bookclass'); 
  };

  return (
    <div className="trialContainer">
      <div className="leftTrial">
        <h2>Booking Confirmation</h2>
        <p>Join us for a free trial class and experience our unique <br /> approach to teaching math.</p>
        <img src={ClassRoomGif} alt="Trial Class" />
      </div>
      <div className="rightTrial">
        <div className="confirmationMessage">
        <h3>{emailSent ? 'Request Sent' : 'Error Occurred'}</h3>
        <p className={emailSent ? 'success' : 'error'}>
            {emailSent ? 'Your trial class request has been successfully sent to Mrs Preeti and she will contact you at the earliest' : 'Failed to send the email. Please try again later.'}
        </p>
        </div>
        <div className="classDetails">
          <p className='confirm-head'>Class Details</p>
          <p>Name: {formData.name}</p>
          <p>Phone Number: {formData.phone}</p>
          <p>Date: {formData.date}</p>
          <p>Time: {formData.time}</p>
          <button onClick={handleEdit} className="edit-btn">Edit Booking</button>
        </div>
      </div>
    </div>
  );
};

export default BookTrialConfirm;
