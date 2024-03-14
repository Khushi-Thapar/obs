import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import img2 from './img2.jpg';
import './Login.css';
function Login() {
    return (
        <div className="App">
            <div className="login-box">
                <img src={img2} alt="Logo" className="avatar" />
                <h1>Login Here</h1>
                <form method="POST">
                    <p>Username</p>
                    <input type="email" name="email" placeholder="Enter username here" />
                    <p>Password</p>
                    <input type="password" name="password" placeholder="Enter Password here" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;