import React,{useState, useEffect} from "react";
import "./pages.css"
import CircularProgressBar from './Circle';
import axios from "axios"

function Results(){
    axios.defaults.withCredentials = true;
    const[login, setLogin] = useState("")
    const[cat1,setCat1] = useState(-999)
    const[cat2,setCat2] = useState(-999)
    const[cat3,setCat3] = useState(-999)
    const[cat4,setCat4] = useState(-999)
    const[overall, setOverall] = useState(-999)
    const cats = ["Transportation", "Home", "Food", "Spending"];
    function getPerc(score){
        return parseInt((score / 30) * 100)
    }
    const getScores=async()=>{
        axios.get("http://localhost:4000/get_scores", {params:{
            cat: cats[0],
            username: login
        }}).then((response)=>{
            setCat1(getPerc(response.data))
        })
        axios.get("http://localhost:4000/get_scores", {params:{
            cat: cats[1],
            username: login
        }}).then((response)=>{
            setCat2(getPerc(response.data))
        })
        axios.get("http://localhost:4000/get_scores", {params:{
            cat: cats[2],
            username: login
        }}).then((response)=>{
            setCat3(getPerc(response.data))
        })
        axios.get("http://localhost:4000/get_scores", {params:{
            cat: cats[3],
            username: login
        }}).then((response)=>{
            setCat4(getPerc(response.data))
        })
        setOverall(parseInt((cat1+cat2+cat3+cat4)/4))
        console.log(cat1,cat2,cat3,cat4, overall)
    }
    useEffect(() => {
        axios.get("http://localhost:4000/check_login").then((response)=>{
            if (response.data.loggedIn === true){
                setLogin(response.data.user[0].username)
            }
            //console.log(response.data.user[0].username)
            console.log("login",login)
        })
        if(login){
            getScores()
        }
    });

    //COLORING BOXES
    var background1 = ""
    var textColor1 = ""
    if(cat1 > 66) {
        background1 = '#D4E2D4';
        textColor1 = '#263A29';
      }
      if (cat1 > 33 && cat1 <= 66) {
        background1 = '#FFEBB4';
        textColor1 = '#C07F00';
      }
      if (cat1 <= 33) {
        background1 = '#F8C4B4';
        textColor1 = '#3D0000';
      }
      var background2 = ""
      var textColor2 = ""
      if(cat2 > 66) {
          background2 = '#D4E2D4';
          textColor2 = '#263A29';
        }
        if (cat2 > 33 && cat2 <= 66) {
          background2 = '#FFEBB4';
          textColor2 = '#C07F00';
        }
        if (cat2 <= 33) {
          background2 = '#F8C4B4';
          textColor2 = '#3D0000';
        }
    var background3 = ""
    var textColor3 = ""
    if(cat3 > 66) {
        background3 = '#D4E2D4';
        textColor3 = '#263A29';
    }
      if (cat3  > 33 && cat4 <= 66) {
        background3 = '#FFEBB4';
        textColor3 = '#C07F00';
      }
      if (cat3 <= 33) {
        background3 = '#F8C4B4';
        textColor3 = '#3D0000';
      }
      var background4 = ""
      var textColor4 = ""
      if(cat4 > 66) {
          background4 = '#D4E2D4';
          textColor4 = '#263A29';
        }
        if (cat4 > 33 && cat4 <= 66) {
          background4 = '#FFEBB4';
          textColor4 = '#C07F00';
        }
        if (cat4 <= 33) {
          background4 = '#F8C4B4';
          textColor4 = '#3D0000';
        }

    function send(e){
        var x = parseInt(e.target.value)
        if(x === 1){
            window.open("http://localhost:3000/improve_transportation", '_blank')
        }
        if(x === 2){
            window.open("http://localhost:3000/improve_home", '_blank')
        }
        if(x === 3){
            window.open("http://localhost:3000/improve_food", '_blank')
        }
        if(x === 4){
            window.open("http://localhost:3000/improve_spending", '_blank')
        }
    }

    //format UL like this. Percentage in a <span> (make it big) --> category next to it with small icon
    // click here! or something under that

    if(overall === -999){
        console.log("quiz not taken")
        return (
            <div>
                <a href="http://localhost:3000/quiz" style={{textAlign:'center'}}>Please Take Quiz</a>  
            </div>
        )
    }
    if(overall === 100){
        console.log("angel")
        return (
            <div>
                <div className='circle'>
                    <CircularProgressBar percentage={100} />
                </div>
                <button style={{backgroundColor: background1}} className='results-button' id='bottom-right'>
                    <ul>
                        <h2 style={{color: textColor1}}>{cats[0]}: {100}%</h2>
                    </ul>
                </button>
                <button style={{backgroundColor: background2}} className='results-button' id='top-right'>
                    <ul>
                        <h2 style={{color: textColor2}}>{cats[1]}: {100}%</h2>
                    </ul>
                </button>
                <button style={{backgroundColor: background3}} className='results-button' id='top-left'>
                    <ul>
                        <h2 style={{color: textColor3}}>{cats[2]}: {100}%</h2>
                    </ul>
                </button>
                <button style={{backgroundColor: background4}} className='results-button' id='bottom-left'>
                    <ul>
                        <h2 style={{color: textColor4}}>{cats[3]}: {100}%</h2>
                    </ul>
                </button>
                <div>
                    <a href="http://localhost:3000/youareanangel"><img className="angel" style={{width:'100px', height:'100px'}} src={require("../pages/images/angel.png")} alt="angel"></img></a>  
                </div>
            </div>
        )
    }
    else if (overall !== 0){
        console.log("normal")
        return (
            <div>
                <div className='circle'>
                    <CircularProgressBar percentage={overall} />
                </div>

                <button value={1} onClick={send} style={{backgroundColor: background1}} className='results-button' id='bottom-right'>
                    <ul>
                        <h2 style={{color: textColor1}}>{cats[0]}: {cat1}%</h2>
                        <h6 style={{color: textColor1}} className='clickImprove'> Click to improve your score!</h6>
                    </ul>
                </button>
                <button value={2} onClick={send} style={{backgroundColor: background2}} className='results-button' id='top-right'>
                    <ul>
                        <h2 style={{color: textColor2}}>{cats[1]}: {cat2}%</h2>
                        <h6 style={{color: textColor2}} className='clickImprove'>Click to improve your score!</h6>
                    </ul>
                </button>
                <button value={3} onClick={send} style={{backgroundColor: background3}} className='results-button' id='top-left'>
                    <ul>
                        <h2 style={{color: textColor3}}>{cats[2]}: {cat3}%</h2>
                        <h6 style={{color: textColor3}} className='clickImprove'>Click to improve your score!</h6>
                    </ul>
                </button>
                <button value={4} onClick={send} style={{backgroundColor: background4}} className='results-button' id='bottom-left'>
                    <ul>
                        <h2 style={{color: textColor4}}>{cats[3]}: {cat4}%</h2>
                        <h6 style={{color: textColor4}} className='clickImprove'>Click to improve your score!</h6>
                    </ul>
                </button>
            </div>
        )
    }
    else{
        console.log("monkey")
        return (
            <div>
                <div className='circle'>
                    <CircularProgressBar percentage={0} />
                </div>
                <div>
                    <img className="monkey" src={require("../pages/images/cry.png")} style={{width:'600px', height:'400px'}}alt="monkey"></img> 
                    <img className="textbox" src={require("../pages/images/bubble.png")} style={{width:'400px', height:'200px'}}alt="monkey"></img> 
                    <a className="banana" href="http://localhost:3000/youareamonkey"><img className="monkey" style={{width:'400px', height:'400px'}} src={require("../pages/images/banana.png")} alt="monkey"></img></a>  
                </div>
            </div>
        )
    }
}

export default Results
