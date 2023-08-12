import React from 'react';
import './home.css'
import axios from 'axios';
import { useEffect } from 'react';

const Home = () => {
    axios.defaults.withCredentials = true;
    useEffect(()=> {
        axios.get("http://localhost:4000/check_login")
    })
    return (
        <div>
            <h1 className="xh1">
                Do you want to learn about your impact on the planet?
            </h1>
            <h3 className="xh3">
                Take a step towards environmental awareness and find out how much impact your daily choices have on the planet. Our interactive quiz will assess your carbon footprint by evaluating various aspects of your lifestyle, such as transportation, dietary and spending habits, and home energy consumption. Uncover your carbon footprint score and receive personalized tips on how to reduce your environmental impact. Start the quiz now and be part of the solution!
            </h3>
            <div className="buttons-container">
                <a href="https://main.d38ai00lc1thuw.amplifyapp.com/quiz" className="button button--pen">
                    <div className="button__wrapper">
                        <span className="button__text">Click Here</span>
                    </div>
                    <div className="characterBox">
                        <div className="character wakeup">
                            <div className="character__face"></div>
                            <div className="charactor__face2"></div>
                        </div>
                        <div className="character wakeup">
                            <div className="character__face"></div>
                            <div className="charactor__face2"></div>
                        </div>
                        <div className="character">
                            <div className="character__face"></div>
                            <div className="charactor__face2"></div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="picContainer">
                <img src={require("./images/Pravin.png")} className="homePic" alt="homePic"></img>
            </div>
        </div>
    );
};
export default Home;