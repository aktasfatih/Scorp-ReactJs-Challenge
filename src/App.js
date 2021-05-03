import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import NavigationBar from './components/navigation-bar/navigationBar.js'
import ContentBody from './components/content-body'
import Footer from './components/footer'
import LoginModal from './components/login-modal'
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
          <LoginModal />
        <Router>
          <NavigationBar />
          <main className="Site-content">
            <div className="Site-content">
              <ContentBody />
            </div>
          </main>
          <Footer />
        </Router>
      {/* </header> */}
    </div>
  );
}

export default App;
