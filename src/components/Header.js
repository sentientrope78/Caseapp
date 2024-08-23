import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
      <div className="header">
      <a href="/FAQ" id="FAQ">FAQ</a>
      <a href="/" id="title">Treatify</a>
      <a href="/Contact" id="Contact">Contact Us</a>
      <br></br> <br></br> <br></br>
    </div>
  );
}

export default Header;
