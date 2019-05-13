import React from 'react';
import './App.css';
import Locations from './Components/Locations';
import Navigation from './Components/Navigation';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Locations />
    </div>
  );
}

export default App;
