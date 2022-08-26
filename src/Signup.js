import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './signup.css'

function Signup() {

    const [email, setEmail] = useState('');
    const [name,setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate= useNavigate();

    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if(auth)
            {
                navigate('/');
            }
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message);
            // ..
            });
        }

  return (

    

    <div className="signup">
        <Link to="/">
            <div className="signup__msg">
                <img className="signup__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
                <p className="signup__in">.in</p>
            </div>
        </Link>
        <div className="signup__container">
        <h1>Sign Up</h1>
            <form action="">

                <h5>Name</h5>
                <input value={name} type="text" onChange = {e => setName(e.target.value)} />

                <h5>Mobile Number</h5>
                <input type="number" />

                <h5>E-mail</h5>
                <input type="text" value={email} onChange = {e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange = {e => setPassword(e.target.value)} />

            <button type='submit' onClick={register} className="signup__signUpButton">Sign Up</button>
            </form>
            <p>
                By signing-up you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <div className="signup__partition">
                <hr />
                    <p>Already a user.?</p>
                <hr />
            </div>
            <Link to="/login">
                <button className="signup__loginButton">Login to your Amazon Account</button>
            </Link>
        </div>
    </div>
  )
}

export default Signup