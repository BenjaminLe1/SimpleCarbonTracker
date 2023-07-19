import React, {useEffect, useState} from 'react';
import axios from 'axios'
  
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
  }
  
  //SELECT idAnswer From SimpleCarbonTracker.QuestionAnswer WHERE idQuestion = 193
  //SELECT Answer_Text FROM SimpleCarbonTracker.QuestionAnswer WHERE idAnswer = (?)
  
  return (
      <div classname="Quiz">
          <p style={paraStyle}> Question:{question}......*Fyi* currq:{currq} </p>
            <ol style={listStyle}>
                <div style={answerStyle1}>
                    <button onClick={increaseCurrq}>{ans1}</button>
                </div>
                <div style={answerStyle2}>
                    <button onClick={increaseCurrq}>{ans2}</button>
                </div>
                <div style={answerStyle3}>
                    <button onClick={increaseCurrq}>{ans3}</button>
                </div>
                <div style={answerStyle4}>
                    <button onClick={increaseCurrq}>{ans4}</button>
                </div>
            </ol>
      </div>
  );
}
export default Quiz;



//CSS

const paraStyle = {
  display: "block",
  textAlign: "center"
}

const listStyle= {
  textAlign: "center"
}

const answerStyle1 ={
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "42%",
  backgroundColor: "#C1E1C1",
  width: "200px",
  height: "100px",
  marginTop: "20px"
}

const answerStyle2 ={
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "42%",
  backgroundColor: "#FFC300",
  width: "200px",
  height: "100px",
  marginTop: "20px"
}

const answerStyle3 ={
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "42%",
  backgroundColor: "navy",
  width: "200px",
  height: "100px",
  marginTop: "20px"
}

const answerStyle4 ={
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "42%",
  backgroundColor: "brown",
  width: "200px",
  height: "100px",
  marginTop: "20px"
}