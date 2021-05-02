import React from 'react';
import './style.css';
import { useSelector, 
	// useDispatch
} from 'react-redux';
import {selectLogState} from '../../app/loginSlicer'
import {
    Link
} from "react-router-dom";

function logoutAction(){
	alert("Hey");
}

function LoginButton() {
	const login = useSelector(selectLogState);
	console.log(login.status);
	if(login.status){
		return (
			<li>
				<a href="#" onClick={logoutAction}>Log out</a>
			</li>
		);
	}else{
		return (
			<li>
				<a href="#"  onClick={logoutAction}>Login</a>
			</li>
		);
	}
}

export default function NavigationBar() {
	return (
		<div className="navigation-bar">
			<img className="logo" src="./logo512.png" />
			<div className="current-page">
				Sample Page
			</div>
			<ul className="main-menu">
				<li>
					<Link to="home">Sample Page</Link>
				</li>
				<li>
					<Link to="link1">Link 1</Link>
				</li>
				<li>
					<Link to="link2">Link 2</Link>
				</li>
				<LoginButton />
			</ul>
		</div>
	);
}
