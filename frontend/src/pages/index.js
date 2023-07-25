import React from 'react';
import './pages.css'

const Home = () => {
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

