import React,{useState, useEffect} from "react";
import "./pages.css"
import CircularProgressBar from './Circle';
import axios from "axios"

function Results(){
    //axios.defaults.withCredentials = true;
    //const[login, setLogin] = useState("")
    const[cat1,setCat1] = useState(0)
    const[cat2,setCat2] = useState(0)
    const[cat3,setCat3] = useState(0)
    const[cat4,setCat4] = useState(0)
    const[overall, setOverall] = useState(0)
    var login = "BenCow" //TEMP
    const cats = ["dog", "cat", "rat", "squid"] //TEMP
    const getScores=async()=>{
        /* axios.get("http://localhost:4000/check_login").then((response)=>{
            setLogin(response.data.user[0].username)
        }) */
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
                <ul>
                    <h2>{cats[0]}: {getPerc(cat1)}%</h2>
                    <h6>Click to improve your score!</h6>
                </ul>
            </button>
            <button className='results-button' id='top-right'>
                <ul>
                    <h2>{cats[1]}: {getPerc(cat2)}%</h2>
                    <h6>Click to improve your score!</h6>
                </ul>
            </button>
            <button className='results-button' id='top-left'>
                <ul>
                    <h2>{cats[2]}: {getPerc(cat3)}%</h2>
                    <h6>Click to improve your score!</h6>
                </ul>
            </button>
            <button className='results-button' id='bottom-left'>
                <ul>
                    <h2>{cats[3]}: {getPerc(cat4)}%</h2>
                    <h6>Click to improve your score!</h6>
                </ul>
            </button>
        </div>
    )    
}

export default Results
