import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }

export default function ContentBody(){
    return (
        <Switch>
            <Route path="/link2">
                <About />
            </Route>
            <Route path="/link1">
                <Users />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}
