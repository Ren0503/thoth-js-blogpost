import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthRoutes from 'routes/AuthRoutes';
import MainRoutes from 'routes/MainRoutes';
import 'styles/layout.css';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthRoutes />
        <MainRoutes />
      </Router>
    </div>
  );
}

export default App;
