import { BrowserRouter as Router } from 'react-router-dom';
import AuthRoutes from 'routes/AuthRoutes';
import MainRoutes from 'routes/MainRoutes';
import './App.css';
import MainLayout from './layouts/MainLayout';

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
