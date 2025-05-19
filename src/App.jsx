import React from 'react';
import './App.css';
import Navbar from './frontendcomponents/Navbar.jsx';
import Uploaded from './components/Uploaded.jsx';
import Content from './frontendcomponents/Content.jsx'
import Footer from './frontendcomponents/Footer.jsx'


function App() {
  return (
    <div className="app">
      <Navbar />
      <Content />
      <Uploaded />
      <Footer />
    </div>
  );
}

export default App;
