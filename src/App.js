import React from 'react';
import Container from "./Container";
import ProfilePage from "./ProfilePage";
import { Switch, Route } from 'react-router-dom';
import CSS from './App.css';
import NavBar from "./NavBar";
import Error404 from './Error404';

function App() {
  return (
    <div style={CSS}>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Container} />
        <Route path='/profile' component={ProfilePage} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
