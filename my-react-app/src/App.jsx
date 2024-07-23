import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './Pages/Landing';
import Footer from './Components/Footer';
import BookTrialClass from './Pages/BookTrialClass';
import Contactemp from './Pages/Contactemp';
import BookTrialConfirm from './Components/BookTrialConfirm';

function App() {

  return (
    <Router>
     <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/bookclass" element={<BookTrialClass />} />
        <Route path="/bookclassconfirm" element={<BookTrialConfirm />} />
        <Route path="/Contact" element={<Contactemp />} />
      </Routes>
      <Footer />
     </div>
    </Router>
  )
}

export default App
