import React,{useState, useEffect} from "react";
import "./pages.css"
import CircularProgressBar from './Circle';

function Results(){
    const[cat1,setCat1] = useState(0)
    const[cat2,setCat2] = useState(0)
    const[cat3,setCat3] = useState(0)
    const[cat4,setCat4] = useState(0)
    const[overall, setOverall] = useState(0)

    function getScores(){
        setCat1(12)
        setCat2(15)
        setCat3(6)
        setCat4(24)
        setOverall((cat1+cat2+cat3+cat4)/4)
    }
    function getPerc(score){
        return (score / 30) * 100
    }
    useEffect(() => {
        getScores()
    });


    return (
<div className="container">
  <div className="left-column">
    <div className="centered-container">
      <CircularProgressBar percentage={getPerc(overall)} />
      <button>Share Score</button>
    </div>
  </div>
  <div className="right-column">
    <div className="box">
      <p>Food: {getPerc(cat1)}%</p>
      <button>Improve This Score</button>
    </div>
    <div className="box">
      <p>Home: {getPerc(cat2)}%</p>
      <button>Improve This Score</button>
    </div>
    <div className="box">
      <p>Travel: {getPerc(cat3)}%</p>
      <button>Improve This Score</button>
    </div>
    <div className="box">
      <p>Utilities: {getPerc(cat4)}%</p>
      <button>Improve This Score</button>
    </div>
  </div>
</div>

    )    
}

export default Results
