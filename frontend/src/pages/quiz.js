import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './pages.css';
  
function Quiz() {
  axios.defaults.withCredentials = true;
  //onClick you have to iterate to the next quiz Component using the map function. Also delete and store the current question
  //and response to the the question.

  //for the question components pass the questions props. The props passed will be from the sequal table of questions.
  //so I think we would pass a new question each time by iterating through the sequal table and this would allow us to get
  // the next question when they click their answer
  const [currq, setCurrq] = useState(0)
  const [question, setQuestion] = useState("");
  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");
  const [ans3, setAns3] = useState("");
  const [ans4, setAns4] = useState("");
  const [displayCategoryNum, setDisplayCategoryNum] = useState(1)
  const [login, setLogin] = useState("")
  var ans = ""
  //GET REQUEST
  const getQ=async()=>{
    const response = await axios.get("http://localhost:4000/get_currq", {params : {currq: currq}});
    setQuestion(response.data[0].Question_Text);
    setAns1(response.data[0].Answer_Text);
    setAns2(response.data[1].Answer_Text);
    setAns3(response.data[2].Answer_Text);
    setAns4(response.data[3].Answer_Text);
    //console.log(question,ans1,ans2,ans3,ans4);
  }
  useEffect(() => {
    if (currq > 0 && currq < 13){
      getQ()
    }
    axios.get("http://localhost:4000/check_login").then((response)=>{
        if (response.data.loggedIn === true){
            setLogin(response.data.user[0].username)
        }
    })
  });
  
  function increaseCurrq(e) {
    if(currq === 0 && login){
      axios.post("http://localhost:4000/delete_prev", {
        username: login
      });
    }
    if(currq < 13){
      setDisplayCategoryNum(displayCategoryNum+1)
      if(displayCategoryNum === 3){
        setDisplayCategoryNum(1)
      }
      if(currq >= 12){
        setDisplayCategoryNum(3)
      }
      ans = e.target.value
      postQAS()
    }
    setCurrq(currq + 1)
    if (currq > 11){
      window.location.replace("http://localhost:3000/results")
    }
    //console.log(question,ans)
  }

  const postQAS = () => {
    axios.post("http://localhost:4000/post_QAS", {
            question: question,
            answer: ans,
            username: login
            //person: *cover page*
    });
  }

  if (currq === 0){
    return (
      <div classname="Cover">
                <div className='coverButton'>
                    <button className='button' onClick={increaseCurrq} >Calculate Footprint</button>
                </div>
      </div>
    );
  }
  else if (login){
    return (
        <div classname="Quiz">
          <div className='categoryCount'>
            <p>{displayCategoryNum}/3</p>
          </div>
          <h1>{question}</h1>
              <ol>
                  <div>
                      <button className='button' onClick={increaseCurrq} value={ans1}>{ans1}</button>
                  </div>
                  <div>
                      <button className='button' onClick={increaseCurrq} value={ans2}>{ans2}</button>
                  </div>
                  <div>
                      <button className='button' onClick={increaseCurrq} value={ans3}>{ans3}</button>
                  </div>
                  <div>
                      <button className='button' onClick={increaseCurrq} value={ans4}>{ans4}</button>
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
  else{
    return (
      <div className='nullSignin'>
        <a href="http://localhost:3000/account">Please Sign In to Take Quiz</a>
      </div>
    );
  }
}
export default Quiz;