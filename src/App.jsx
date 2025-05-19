// Imports
import React, { useState } from 'react';
import './App.css';
import Uploaded from './components/Uploaded.jsx'
import Navbar from './frontendcomponents/Navbar.jsx'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Uploaded />
    </div>
  );
}
export default(App);