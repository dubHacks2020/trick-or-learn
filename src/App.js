import React from 'react';
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import CardManager from './Components/CardManager.js';
import Game from './Components/Game.js';
import Home from './Components/Home.js';
import Instructions from './Components/Instructions.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">TRICK</header>
        <body>
          <Switch>
            <div>
              <Route exact path={'/'}>
                <Home/>
              </Route>
              <Route exact path={'/Game'}>
                <Game/>
              </Route>
              <Route exact path={'/Card_Manager'}>
                <CardManager/>
              </Route>
              <Route exact path={'/Instructions'}>
                <Instructions/>
              </Route>
            </div>
          </Switch>
        </body>
      </Router>
    </div>
  );
}

export default App;
