import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Locations from './Components/Locations';
import LocationDetails from './Components/LocationDetails';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
        <Router>
          <Switch>
            <Route path="/" exact component={Locations}/>
            <Route path="/locations/" component={LocationDetails}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;