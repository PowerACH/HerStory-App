import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Component/Layout/Main'
import LogIn from './Component/Login/LogIn'
import Register from './Component/Login/Register'
import SignedOut from './Component/Layout/SignedOut'
import Upload from './Component/Upload/Upload'
import UserProfile from './Component/User/UserProfile'
import NavBar from './Component/Layout/NavBar'

function App() {
  return (
    <BrowserRouter>
      <div className = "App">
        {/* <Upload /> */}
        <NavBar />
        <Switch>
          <Route exact path='/' component = {Main} />
          <Route path='/Login' component = {LogIn} />
          <Route path='/Register' component = {Register} />
          <Route path='/SignedOut' component = {SignedOut} />
          <Route path='/Upload' component = {Upload} />
          <Route path='/UserProfile' component = {UserProfile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
