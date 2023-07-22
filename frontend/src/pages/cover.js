import React from 'react';
import Signup from './signup'
import Login from './login'

const Cover = (props) => {
const quizReady = false
const userName = ""



    return (
        <div>
            <p>Sign in to take quiz!</p>
            <Login />
            <a href="/signup">Create Account</a>
        </div>
    );
}
export default Cover;