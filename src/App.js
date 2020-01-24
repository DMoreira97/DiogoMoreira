import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
