import React, {useEffect, useState} from 'react';
import { Link, createRoutesFromElements } from 'react-router-dom';
import Question from './Question'
import Cover from './cover'

const Quiz = () => {

  
  //onClick you have to iterate to the next quiz Component using the map function. Also delete and store the current question
  //and response to the the question.

  //for the question components pass the questions props. The props passed will be from the sequal table of questions.
  //so I think we would pass a new question each time by iterating through the sequal table and this would allow us to get
  // the next question when they click their answer
const [question, setQuestion] = useState("");
  useEffect(() => {
     fetch('http://localhost:4000/Quiz')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setQuestion(data[0].Question_Text)
        })
        .catch((err) => {
           console.log(err.message);
        });
}, []);
var ans1 = "k1"
var ans2 = "k2"
var ans3 = "k3"
var ans4 = "k4"
return (
    <div>
        <Question question_text={question} ans1={ans1} ans2={ans2} ans3={ans3} ans4={ans4}/>
        <Cover />
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