import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import {selectLogState, loguserin, loguserout } from '../../app/loginSlicer'
import { Link } from "react-router-dom";
import {selectAppState} from '../../app/appSlicer'


function LoginButton() {
	const dispatch = useDispatch();
	const login = useSelector(selectLogState);
	console.log(login);
	if(login.status){
		return (
			<li>
				<a href="#" onClick={() => 	dispatch(loguserout())}>Log out</a>
			</li>
		);
	}else{
		return (
			<li>
				<a href="#"  onClick={() => dispatch(loguserin())}>Login</a>
			</li>
		);
	}
}

function UserNameButton(){
	const login = useSelector(selectLogState);
	if (login.status){
		return (
			<li>
				<a>Hello, {login.username}</a> 
			</li>
		)
	}else{
		return null;
	}
}

export default function NavigationBar() {
	const app = useSelector(selectAppState);

	return (
		<div className="navigation-bar">
			<img className="logo" src="./logo512.png" />
			<div className="current-page">
				{app.title}
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
				<UserNameButton />
				<LoginButton />
				<select name="lang" id="lang" className="local-picker">
					<option value="tr">TR</option>
					<option value="eng">ENG</option>
				</select>
			</ul>
			
		</div>
	);
}
