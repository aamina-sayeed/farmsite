import React from 'react';
import './components/css/App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact'
import Navbar from './components/inc/Navbar'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Footer from './components/inc/footer';

function App() {
  return (
  <Router>
   <div>
   <Navbar/>
   <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/about" element={<About/>}/>
     <Route exact path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
   </div> 
 </Router>
  );
}

export default App;
