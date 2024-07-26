import React from 'react';
import './LoginComp.css';
import LoginImg from '../assets/LoginImg.png';

const LoginComp = () => {
    return (
        <div className="login-main-container">
            <div className="login-left-container">
                <img src={LoginImg} alt="Login" />
            </div>
            <div className="login-right-container">
                <div className="login-upper-container">
                    <h2 className="LoginHead">Let's log you in!</h2>
                </div>
                <div className="login-lower-container">
                    <form>
                    <div className="login-form">
                        <label htmlFor="name">Username</label>
                        <input type="text" id="name" name="name" placeholder="Enter Username" />
                    </div>
                    <div className="login-form">
                        <label htmlFor="phone">Password</label>
                        <input type="text" id="phone" name="phone" placeholder="Enter Password" />
                    </div>
                    <button id = "con" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
        
    );
};
  
export default LoginComp;
  
