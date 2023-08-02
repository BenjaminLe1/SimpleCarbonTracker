import React from 'react';
import './home.css'
//import axios from 'axios';
//import { useState,useEffect } from 'react';

const Home = () => {
    /* axios.defaults.withCredentials = true;
    useEffect(()=> [
        axios.get("http://localhost:4000/check_login")
    ], []) */
    //homepage refresh
    //<a href="http://localhost:3000/quiz">Take the first step!</a>
    return (
        <div>
            <h1 className="xh1">
                Do you want to learn about your impact on the planet?
            </h1>
            <h3 className="xh3">
                Take a step towards environmental awareness and find out how much impact your daily choices have on the planet. Our interactive quiz will assess your carbon footprint by evaluating various aspects of your lifestyle, such as transportation, dietary and spending habits, and home energy consumption. Uncover your carbon footprint score and receive personalized tips on how to reduce your environmental impact. Start the quiz now and be part of the solution!
            </h3>
            <div className="buttons-container">
                <a href="http://localhost:3000/quiz" class="button button--pen">
                    <div class="button__wrapper">
                        <span class="button__text">Click Here</span>
                    </div>
                    <div class="characterBox">
                        <div class="character wakeup">
                            <div class="character__face"></div>
                            <div class="charactor__face2"></div>
                        </div>
                        <div class="character wakeup">
                            <div class="character__face"></div>
                            <div class="charactor__face2"></div>
                        </div>
                        <div class="character">
                            <div class="character__face"></div>
                            <div class="charactor__face2"></div>
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