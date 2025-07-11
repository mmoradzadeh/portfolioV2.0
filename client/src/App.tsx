import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useScrollToHash } from './hooks/useScrollToHash';

import Home from './Pages/Home/Home';
import Projects from './Pages/Project/Projects';

const RouterApp: React.FC = () => {
  useScrollToHash();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <RouterApp />
    </Router>
  );
};

export default App;