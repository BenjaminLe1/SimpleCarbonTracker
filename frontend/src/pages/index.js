import React from 'react';
import './pages.css'
//import axios from 'axios';
//import { useState,useEffect } from 'react';

const Home = () => {
    /* axios.defaults.withCredentials = true;
    useEffect(()=> [
        axios.get("http://localhost:4000/check_login")
    ], []) */
    //homepage refresh
    return (
        <div>
            <div>
                <h1>
                    HOMEPAGE
                </h1>
            </div>
            <div>
                <h1>
                    <img src={require("./images/VJ.png")}alt="VJ"></img>
                    <img src={require("./images/Pravin.png")} alt="Pravin" style={{width: '400px',height: '400px'}}></img>
                    <img src={require("./images/Justin.png")} alt="Justin" style={{width: '400px',height: '300px'}}></img>
                </h1>
            </div>
        </div>
    );
};
export default Home;

