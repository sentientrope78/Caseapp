import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Assuming SignInButton is imported in Header
import Main from './components/Main';
import Footer from './components/Footer';
import Upload from "./components/Upload";
import Register from  "./components/Register"
import Results from "./components/Results";
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/FAQ' element={<FAQ />}></Route>
          <Route path='/Contact' element={<Contact />} />
          <Route path="/upload" element={<Upload />} />
          <Route path='/register' element={<Register />} />
          <Route path="/results" element={<Results />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
