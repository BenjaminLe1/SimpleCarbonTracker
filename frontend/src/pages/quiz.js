import React, {useEffect, useState} from 'react';
import { Link, createRoutesFromElements } from 'react-router-dom';
import Question from './Question'
import Cover from './cover'
import axios from 'axios'

const Quiz = () => {
  const [quizReady, setQuizReady] = useState(false)
  function handleClick(e){
    console.log()
    if(quizReady == false){
      setQuizReady(true)
      postCurrq(e)
    }
  }
  
  

  
  //onClick you have to iterate to the next quiz Component using the map function. Also delete and store the current question
  //and response to the the question.

  //for the question components pass the questions props. The props passed will be from the sequal table of questions.
  //so I think we would pass a new question each time by iterating through the sequal table and this would allow us to get
  // the next question when they click their answer
  const [question, setQuestion] = useState("");
  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");
  const [ans3, setAns3] = useState("");
  const [ans4, setAns4] = useState("");
  const [currqState, setCurrqState] = useState(1)

    useEffect(() => {
      fetch('http://localhost:4000/Quiz')
          .then((response) => response.json())
          .then((data) => {
            setQuestion(data[0].Question_Text)
            setAns1(data[0].Answer_Text)
            setAns2(data[1].Answer_Text)
            setAns3(data[2].Answer_Text)
            setAns4(data[3].Answer_Text)
            console.log(data)
          })
          .catch((err) => {
            console.log(err.message);
          });
  }, []);
  //CALCULATEIONS !
  async function postCurrq(e) {
    e.preventDefault()
    setCurrqState(prevCurrq => {
      return prevCurrq + 1
    })
    console.log(currqState)
    try {
        await axios.post("http://localhost:4000/get_currq", {
          currqState
        })
    } catch(error) {
        console.error(error)
    }
  }
  
  //SELECT idAnswer From SimpleCarbonTracker.QuestionAnswer WHERE idQuestion = 193
  //SELECT Answer_Text FROM SimpleCarbonTracker.QuestionAnswer WHERE idAnswer = (?)
  
  return (
      <div classname="Signup">
          <form onSubmit={postCurrq}>
            {/* {quizReady ? <Question question_text={question} ans1={ans1} ans2={ans2} ans3={ans3} ans4={ans4} handleClick={handleClick}/> : <Cover handleClick={handleClick} currq={curr_q}/>} */}
            <Question question_text={question} ans1={ans1} ans2={ans2} ans3={ans3} ans4={ans4}/>
          </form>
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