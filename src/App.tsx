import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Projects from './Pages/Project/Projects';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;