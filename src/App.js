import React from 'react';
import {Link, Route} from 'react-router-dom'
import './App.css';
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

function App() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">홈</Link>
            </li>
            <li>
                <Link to="/about">소개</Link>
            </li>
            <li>
                <Link to="/profile/velopert">velopert 프로필</Link>
            </li>
            <li>
                <Link to="/profile/gildong">gildong 프로필</Link>
            </li>
        </ul>
        <hr/>
      <Route path="/" component={Home} exact={true}/>
      <Route path={['/about','/info']} component={About}/>
      <Route path="/profile/:username" component={Profile}/>
    </div>
  );
}

export default App;
