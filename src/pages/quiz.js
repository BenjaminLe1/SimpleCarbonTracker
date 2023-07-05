import React from 'react';
import { Link } from 'react-router-dom';
import Question from './Question'

const Quiz = () => {
 
return (
    <div>
        <Question />
        <Link to='./Question2'>Next Question</Link>
    </div>
);

}


export default Quiz;