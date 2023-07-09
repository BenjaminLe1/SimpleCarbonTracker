import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Quiz from './pages/quiz';
 
function App() {

    const [posts, setPosts] = useState([]);
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
    }, []);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/quiz' element={<Quiz />} />
            </Routes>
        </Router>
    );
}
 
export default App;