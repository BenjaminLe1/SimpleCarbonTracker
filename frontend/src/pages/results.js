import React,{useState, useEffect} from "react";
import "./pages.css"
import CircularProgressBar from './Circle';
import axios from "axios"

function Results(){
    axios.defaults.withCredentials = true;
    const[login, setLogin] = useState("")
    const[cat1,setCat1] = useState(0)
    const[cat2,setCat2] = useState(0)
    const[cat3,setCat3] = useState(0)
    const[cat4,setCat4] = useState(0)
    const[overall, setOverall] = useState(-1)
    const cats = ["Transportation", "Home", "Food", "Spending"];
    const getScores=async()=>{
        //Change below inefficient
        axios.get("http://localhost:4000/get_scores", {params:{
            cat: cats[0],
            username: login
        }}).then((response)=>{
            setCat1(response.data)
        })
        axios.get("http://localhost:4000/get_scores", {params:{
            cat: cats[1],
            username: login
        }}).then((response)=>{
            setCat2(response.data)
        })
        axios.get("http://localhost:4000/get_scores", {params:{
            cat: cats[2],
            username: login
        }}).then((response)=>{
            setCat3(response.data)
        })
        axios.get("http://localhost:4000/get_scores", {params:{
            cat: cats[3],
            username: login
        }}).then((response)=>{
            setCat4(response.data)
        })
        setOverall((cat1+cat2+cat3+cat4)/4)
        console.log(cat1,cat2,cat3,cat4)
    }
    function getPerc(score){
        console.log(score)
        return parseInt((score / 30) * 100)
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
    if(getPerc(cat1) > 66) {
        background1 = '#D4E2D4';
        textColor1 = '#263A29';
      }
      if (getPerc(cat1) > 33 && getPerc(cat1) <= 66) {
        background1 = '#FFEBB4';
        textColor1 = '#C07F00';
      }
      if (getPerc(cat1) <= 33) {
        background1 = '#F8C4B4';
        textColor1 = '#3D0000';
      }

      var background2 = ""
      var textColor2 = ""
      if(getPerc(cat2) > 66) {
          background2 = '#D4E2D4';
          textColor2 = '#263A29';
        }
        if (getPerc(cat2) > 33 && getPerc(cat2) <= 66) {
          background2 = '#FFEBB4';
          textColor2 = '#C07F00';
        }
        if (getPerc(cat2) <= 33) {
          background2 = '#F8C4B4';
          textColor2 = '#3D0000';
        }

        var background3 = ""
    var textColor3 = ""
    if(getPerc(cat3) > 66) {
        background3 = '#D4E2D4';
        textColor3 = '#263A29';
      }
      if (getPerc(cat3)  > 33 && getPerc(cat3) <= 66) {
        background3 = '#FFEBB4';
        textColor3 = '#C07F00';
      }
      if (getPerc(cat3) <= 33) {
        background3 = '#F8C4B4';
        textColor3 = '#3D0000';
      }
      var background4 = ""
      var textColor4 = ""
      if(getPerc(cat4) > 66) {
          background4 = '#D4E2D4';
          textColor4 = '#263A29';
        }
        if (getPerc(cat4) > 33 && getPerc(cat4) <= 66) {
          background4 = '#FFEBB4';
          textColor4 = '#C07F00';
        }
        if (getPerc(cat4) <= 33) {
          background4 = '#F8C4B4';
          textColor4 = '#3D0000';
        }

    //format UL like this. Percentage in a <span> (make it big) --> category next to it with small icon
    // click here! or something under that
    if(overall === 0){
        return (
            <div>
                <img src={require("../pages/images/cry.png")} style={{width:'600px', height:'400px'}}alt="monkey"></img> 
                <img src={require("../pages/images/bubble.png")} style={{width:'400px', height:'200px'}}alt="monkey"></img> 
                <a href="http://localhost:3000/youareamonkey"><img className="monkey" style={{width:'400px', height:'400px'}} src={require("../pages/images/banana.png")} alt="monkey"></img></a>  
            </div>
        )
    }
    else{
        return (
            <div>
                <div className='circle'>
                    <CircularProgressBar percentage={getPerc(overall)} />
                </div>

                <button style={{backgroundColor: background1}} className='results-button' id='bottom-right'>
                    <ul>
                        <h2 style={{color: textColor1}}>{cats[0]}: {getPerc(cat1)}%</h2>
                        <h6 style={{color: textColor1}} className='clickImprove'> Click to improve your score!</h6>
                    </ul>
                </button>
                <button style={{backgroundColor: background2}} className='results-button' id='top-right'>
                    <ul>
                        <h2 style={{color: textColor2}}>{cats[1]}: {getPerc(cat2)}%</h2>
                        <h6 style={{color: textColor2}} className='clickImprove'>Click to improve your score!</h6>
                    </ul>
                </button>
                <button style={{backgroundColor: background3}} className='results-button' id='top-left'>
                    <ul>
                        <h2 style={{color: textColor3}}>{cats[2]}: {getPerc(cat3)}%</h2>
                        <h6 style={{color: textColor3}} className='clickImprove'>Click to improve your score!</h6>
                    </ul>
                </button>
                <button style={{backgroundColor: background4}} className='results-button' id='bottom-left'>
                    <ul>
                        <h2 style={{color: textColor4}}>{cats[3]}: {getPerc(cat4)}%</h2>
                        <h6 style={{color: textColor4}} className='clickImprove'>Click to improve your score!</h6>
                    </ul>
                </button>
            </div>
        )
    }
}

export default Results
