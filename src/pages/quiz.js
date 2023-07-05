import React from 'react';
import { Link, createRoutesFromElements } from 'react-router-dom';
import Question from './Question'

const Quiz = () => {

  //onClick you have to iterate to the next quiz Component using the map function. Also delete and store the current question
  //and response to the the question.

  //for the question components pass the questions props. The props passed will be from the sequal table of questions.
  //so I think we would pass a new question each time by iterating through the sequal table and this would allow us to get
  // the next question when they click their answer

return (
    <div>
        <Question />
        <Link to='./Question2'>Next Question</Link>
    </div>
);

}


export default Quiz;


/*
  
  import React, { useState } from 'react';

  const Quiz = () => {
    const [questions, setQuestions] = useState([
      { id: 1, text: 'Question 1' },
      { id: 2, text: 'Question 2' },
      { id: 3, text: 'Question 3' },
      // ...more questions
    ]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
    // Function to handle answer selection
    const handleAnswerSelection = () => {
      // Logic to handle the answer selection
  
      // Move to the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    };
  
    return (
      <div>
        {// Render the current question }
        <Question question={questions[currentQuestionIndex]} />
  
        {// Render the answer options and handle the click event }
        <button onClick={handleAnswerSelection}>Select Answer</button>
      </div>
    );
  };

*/