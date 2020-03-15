import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Users from './components/Users/Users';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="app-wrapper">
        <Users></Users>
      </div>
    </div>
  );
}
export default App;
