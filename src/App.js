import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Feedback from './Pages/Feedback';
import Game from './Pages/Game';
import Login from './Pages/Login';
import Ranking from './Pages/Ranking';
import Settings from './Pages/Settings';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/project-trivia-game/" component={ Login } />
        <Route exact path="/project-trivia-game/feedback" component={ Feedback } />
        <Route exact path="/project-trivia-game/ranking" component={ Ranking } />
        <Route path="/project-trivia-game/game" component={ Game } />
        <Route path="/project-trivia-game/settings" component={ Settings } />
      </Switch>
    </div>
  );
}
