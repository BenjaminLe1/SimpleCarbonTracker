import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Quiz from './pages/quiz';
import Registration from './pages/registration';
import Signout from './pages/signout';
import Monkey from './pages/monkey';
import Angel from './pages/angel';
//import axios from "axios"
//import {useEffect} from 'react';


function App() {
    /* axios.defaults.withCredentials = true;
    useEffect(()=> [
        axios.get("http://localhost:4000/check_login").then((response)=>{
            if (response.data.loggedIn === true){
                setLogin(response.data.user[0].username)
            }
        })
    ], []) */
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/quiz' element={<Quiz/>}/>
                <Route path='/account' element={<Registration/>}/>
                <Route path='/signout' element={<Signout />} />
                <Route path='/youareamonkey' element={<Monkey />} />
                <Route path='/youareanangel' element={<Angel />} />

            </Routes>
        </Router>
    );
}
 
export default App;