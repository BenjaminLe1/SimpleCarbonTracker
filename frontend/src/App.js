import React from 'react';
//import {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Quiz from './pages/quiz';
import Registration from './pages/registration';
import Results from './pages/results';
import Signout from './pages/signout';
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
                <Route path='/quiz' element={<Quiz/>}/>
                <Route path='/account' element={<Registration/>}/>
                <Route path='/results' element={<Results />} />
                <Route path='/signout' element={<Signout />} />
            </Routes>
        </Router>
    );
}
 
export default App;