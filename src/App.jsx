import React from 'react';
import './App.css';
import Navbar from './frontendcomponents/Navbar.jsx';
import Uploaded from './components/Uploaded.jsx';
import Content from './frontendcomponents/Content.jsx'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Content />
      <Uploaded />
    </div>
  );
}

export default App;
