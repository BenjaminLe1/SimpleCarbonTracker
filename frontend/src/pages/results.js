import React,{useState, useEffect} from "react";
import "./pages.css"
import CircularProgressBar from './Circle';

function Results(){
    const[cat1,setCat1] = useState(0)
    const[cat2,setCat2] = useState(0)
    const[cat3,setCat3] = useState(0)
    const[cat4,setCat4] = useState(0)
    const[overall, setOverall] = useState(0)

    const getScores=async()=>{
        //NEED TO REWORK PERSON TABLE TO HAVE JUST (4 category score columns) CATEGORY SCORE (instead of idQA)
        setCat1(12)
        setCat2(15)
        setCat3(6)
        setCat4(24)
        setOverall((cat1+cat2+cat3+cat4)/4)

        //actual code
        //send idPerson if needed
        /* const response = await axios.get("http://localhost:4000/get_scores");
        setCat1(response.data[0].Category1_Score);
        setCat2(response.data[1].Category2_Score);
        setCat3(response.data[2].Category3_Score);
        setCat4(response.data[3].Category4_Score);
        setOverall((cat1+cat2+cat3+cat4)/4) */
    }
    function getPerc(score){
        return (score / 30) * 100
    }
    useEffect(() => {
        getScores()
    });



    //format UL like this. Percentage in a <span> (make it big) --> category next to it with small icon
    // click here! or something under that
    return (
<div>
    <div className='circle'>
        <CircularProgressBar percentage={getPerc(overall)} />
    </div>

    <button className='results-button' id='bottom-right'>
         {/* <ul>
            <h2>Food: {getPerc(cat1)}%</h2>
            <h6>Click to improve your score!</h6>
        </ul> */}
    </button>
    <button className='results-button' id='top-right'>
        {/* <ul>
            <h2>Food: {getPerc(cat2)}%</h2>
            <h6>Click to improve your score!</h6>
        </ul> */}
    </button>
    <button className='results-button' id='top-left'>
        {/* <ul>
            <h2>Food: {getPerc(cat3)}%</h2>
            <h6>Click to improve your score!</h6>
        </ul> */}
    </button>
    <button className='results-button' id='bottom-left'>
        {/* <ul>
            <h2>Food: {getPerc(cat4)}%</h2>
            <h6>Click to improve your score!</h6>
        </ul> */}
    </button>
</div>

    )    
}

export default Results
