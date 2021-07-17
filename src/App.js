import React from 'react';
import './App.css';

import Home from './components/site/Home';
import Sidebar from './components/site/Sidebar';
import {
  BrowserRouter as Router
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="header">
      <h1>Something to start</h1>
      </header>
      <Router>
        <Sidebar />
      </Router>
      <Home />
    </div>
  );
};

export default App;
