import React from 'react';
//import {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Quiz from './pages/quiz';
import Signup from './pages/signup';
import Login from './pages/login';
import Cover from './pages/cover';

 
function App() {


   
    // const [signInState, setSignInState] = React.useState(false)

    // function findLinkState(curr){
    //     setSignInState(curr)
    // }

    // function findLink(){
    //     if(signInState == true){
    //         correctLink = quiz
    //     }
    //     if(signInState == false){
    //         correctLink = Cover
    //     }
    // }
    /* const [posts, setPosts] = useState([]);
    useEffect(() => {
       fetch('http://localhost:3000/Person')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []); */
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/cover' element={<Cover/>} />
                <Route path='/quiz' element={<Quiz/>}/>
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
    );
}
 
export default App;