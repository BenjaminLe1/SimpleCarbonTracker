import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Quiz from './pages/quiz';

import Login from './pages/login'; 
import Signup from './pages/signup';

import Signout from './pages/signout';
import Result from './pages/results';
import Monkey from './pages/monkey';
import Angel from './pages/angel';
import Transportation from './pages/transportation';
import House from './pages/house';
import Food from './pages/food';
import Spending from './pages/spending';
import axios from "axios"
import {useState, useEffect} from 'react';

function App() {
    axios.defaults.withCredentials = true;
    const[login, setLogin] = useState("")
    useEffect(()=> {
        axios.get("http://localhost:4000/check_login").then((response)=>{
            if (response.data.loggedIn === true){
                setLogin(response.data.user[0].username)
            }
        })
    })
    if(login){
        return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/quiz' element={<Quiz/>}/>

                    <Route path='/signout' element={<Signout />} />
                    
                    <Route path='/results' element={<Result />} />
                    <Route path='/youareamonkey' element={<Monkey />} />
                    <Route path='/youareanangel' element={<Angel />} />
                    <Route path='/improve_transportation' element={<Transportation />} />
                    <Route path='/improve_food' element={<Food />} />
                    <Route path='/improve_home' element={<House />} />
                    <Route path='/improve_spending' element={<Spending />} />
                </Routes>
            </Router>
        );
    }
    else{
        return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/quiz' element={<Quiz/>}/>

                    <Route path='/login' element={<Login />}/>
                    <Route path='/signup' element={<Signup/>}/>
                </Routes>
            </Router>
        );
    }
}
 
export default App;