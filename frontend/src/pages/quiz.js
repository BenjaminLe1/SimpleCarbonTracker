import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './pages.css';
  
function Quiz() {
  //onClick you have to iterate to the next quiz Component using the map function. Also delete and store the current question
  //and response to the the question.

  //for the question components pass the questions props. The props passed will be from the sequal table of questions.
  //so I think we would pass a new question each time by iterating through the sequal table and this would allow us to get
  // the next question when they click their answer
  const [currq, setCurrq] = useState(1)
  const [question, setQuestion] = useState("Blank");
  const [ans1, setAns1] = useState("Blank");
  const [ans2, setAns2] = useState("Blank");
  const [ans3, setAns3] = useState("Blank");
  const [ans4, setAns4] = useState("Blank");
  const [displayCategoryNum, setDisplayCategoryNum] = useState(1)
  
  //GET REQUEST
  const getQ=async()=>{
    const response = await axios.get("http://localhost:4000/get_currq", {params : {currq: currq}});
    setQuestion(response.data[0].Question_Text);
    setAns1(response.data[0].Answer_Text);
    setAns2(response.data[1].Answer_Text);
    setAns3(response.data[2].Answer_Text);
    setAns4(response.data[3].Answer_Text);
    console.log(question,ans1,ans2,ans3,ans4);
  }
  useEffect(() => {
    getQ()
  });
  function increaseCurrq() {
    setCurrq(currq + 1)
    //postQ()
    getQ()
    setDisplayCategoryNum(displayCategoryNum+1)
    if(displayCategoryNum === 3){
       setDisplayCategoryNum(1)
    }
    if(currq >= 12){
      setDisplayCategoryNum(3)
    }
  }
  
  return (
      <div classname="Quiz">
        <div className='categoryCount'>
          <p>category1 {displayCategoryNum}/3</p>
        </div>
        <h1>Question: {question}</h1>
            <ol>
                <div>
                    <button className='button' onClick={increaseCurrq}>{ans1}</button>
                </div>
                <div>
                    <button className='button' onClick={increaseCurrq}>{ans2}</button>
                </div>
                <div>
                    <button className='button' onClick={increaseCurrq}>{ans3}</button>
                </div>
                <div>
                    <button className='button' onClick={increaseCurrq}>{ans4}</button>
                </div>
            </ol>
        {/* <div className='categoryBox'>
          <p className='categoryNames'>Category1</p>
          <p className='categoryNames'>Category2</p>
          <p className='categoryNames'>Category3</p>
          <p className='categoryNames'>Category4</p>
        </div> */}
      </div>
  );
}
export default Quiz;