import React from 'react';
import NavigationBar from './components/navigation-bar/navigationBar.js';
import ContentBody from './components/content-body';
import Footer from './components/footer';
import LoginModal from './components/login-modal';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<div className="App">
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
		</div>
	);
}

export default App;
