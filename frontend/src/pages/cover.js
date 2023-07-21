import React from 'react';
import Signup from './signup'
import Login from './login'

const Cover = (props) => {
const quizReady = false
const userName = ""



    return (
        <div>
            <p>Sign in here</p>
            <Login />
            <p>Or Create an Account</p>
            <button>Create Account</button>
        </div>
    );
}
export default Cover;