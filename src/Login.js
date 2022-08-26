import React, { useState } from 'react'
import './Login.css';
import { Link,useNavigate } from "react-router-dom";
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn= e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        if(auth)
            {
                navigate('/');
            }
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        });
    }

  return (
    <div className="login">
        <Link to="/">
            <div className="login__msg">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
                <p className="login__in">.in</p>
            </div>
        </Link>

        <div className="login__container">
            <h1>Sign In</h1>
            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange = {e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange = {e => setPassword(e.target.value)} />

            <button type='submit' onClick={signIn} className="login__signInButton">Sign In</button>
            </form>
            <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <div className="login__partition">
                <hr />
                    <p>New to Amazon .?</p>
                <hr />
            </div>
            <Link to="/signup">
                <button className="login__registerButton">Create your Amazon Account</button>
            </Link>
                
        </div>
    </div>
  )
}

export default Login