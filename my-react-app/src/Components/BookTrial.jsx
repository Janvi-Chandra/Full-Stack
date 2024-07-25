import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './BookTrial.css';
import ClassRoomGif from '../assets/ClassRoomGif.gif';

const BookTrial = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  const [emailSent, setEmailSent] = useState(null);
  const form = useRef();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3rjqtj9', 'template_tdh21cc', form.current, '04P1mMHHhJrbVkdCC')
      .then(
        () => {

          setEmailSent(true);
          navigate('/bookclassconfirm',{state:{formData,emailSent:true}});
        },
        (error) => {
          console.log('FAILED...', error.text);
          setEmailSent(false);
          navigate('/bookclassconfirm',{state:{formData,emailSent:false}});
        }
      );
  };

  return (
    <div className="trialContainer">
      <div className="leftTrial">
        <h2>Book Trial Class</h2>
        <p>Join us for a free trial class and experience our unique <br /> approach to teaching math.</p>
        <img src={ClassRoomGif} alt="Trial Class" />
      </div>
      <div className="rightTrial">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter Name'
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              placeholder='Enter Phone No.'
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date" 
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time" 
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookTrial;
