import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Quiz from './pages/quiz';
import Signup from './pages/signup';
import Login from './pages/login';
import Cover from './pages/cover';
import Results from './pages/results';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/cover' element={<Cover/>} />
                <Route path='/quiz' element={<Quiz/>}/>
                <Route path='/results' element={<Results />} />
            </Routes>
        </Router>
    );
}
 
export default App;