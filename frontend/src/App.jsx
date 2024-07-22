import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Legal from './Pages/Legal';
import Diagnose from './Pages/Diagnose';
import Results from './Pages/Results';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/diagnose" element={<Diagnose />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
