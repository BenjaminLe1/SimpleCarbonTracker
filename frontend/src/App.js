import React from 'react';
//import {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Quiz from './pages/quiz';
import Signup from './pages/signup';
import Login from './pages/login';
import Results from './pages/results';
//import axios from "axios"


function App() {
    /* axios.defaults.withCredentials = true;

    useEffect(()=> [
        axios.get("http://localhost:4000/login")
    ], []) */
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/quiz' element={<Quiz/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/results' element={<Results />} />
            </Routes>
        </Router>
    );
}
 
export default App;