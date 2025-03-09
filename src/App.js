import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';  // Import the centralized routes file
import Navbar from './components/Navbar';    // Import reusable components
import './App.css';    // Import reusable components

const App = () => (
  <Router>
    <Navbar />  {/* Navbar for navigation */}
    <div className="container">
      <AppRoutes />  {/* Centralized routes */}
    </div>
  </Router>
);

export default App;
