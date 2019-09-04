import React from 'react';
import Container from "./Container";
import ProfilePage from "./ProfilePage";
import { Switch, Route } from 'react-router-dom';
import CSS from './App.css';

function App() {
  return (
    <div style={CSS}>
      <Switch>
        <Route exact path='/' component={Container} />
        <Route path='/profile' component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
