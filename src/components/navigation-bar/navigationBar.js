import React from 'react';
import './style.css';
import { useSelector, 
	// useDispatch
} from 'react-redux';
import {selectLogState} from '../../app/loginSlicer'

function LoginButton() {
	const login = useSelector(selectLogState);
	console.log(login.status);
	if(login.status){
		return (
			<li>
				<a href="#">Log out</a>
			</li>
		);
	}else{
		return (
			<li>
				<a href="#">Login</a>
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
					<a href="#">Sample Page</a>
				</li>
				<li>
					<a href="#">Link 1</a>
				</li>
				<li>
					<a href="#">Link 2</a>
				</li>
				<LoginButton />
			</ul>
		</div>
	);
}
