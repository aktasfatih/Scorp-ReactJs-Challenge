import React, { useState } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectLogState, loguserout, setvis } from '../../app/loginSlicer';
import { Link } from 'react-router-dom';
import { selectAppState, setlang } from '../../app/appSlicer';
import { useTranslation } from 'react-i18next';
import LangOption from '../lang-option';

function LoginButton() {
	const dispatch = useDispatch();
	const login = useSelector(selectLogState);
	const { t } = useTranslation();

	if (login.status) {
		return null;
	} else {
		return (
			<li>
				<a href="#" onClick={() => dispatch(setvis())}>
					{t('menu.login')}
				</a>
			</li>
		);
	}
}

function UserNameButton() {
	const login = useSelector(selectLogState);
	const dispatch = useDispatch();
	const { t } = useTranslation();

	if (login.status) {
		return (
			<li>
				<div className="greet-hover">
					<a className="user-button">
						{t('user.greet')}
						{login.username}
					</a>
					<div className="dropdowncontent">
						<div className="dropdown-item">{login.email}</div>
						<div className="">
							<a href="#" onClick={() => dispatch(loguserout())}>
								{t('menu.logout')}
							</a>
						</div>
					</div>
				</div>
			</li>
		);
	} else {
		return null;
	}
}

export default function NavigationBar() {
	const app = useSelector(selectAppState);
	const [visibleMenu, setVisibleMenu] = useState(true);

	const { t } = useTranslation();

	function handleClick(e) {
		e.preventDefault();
		console.log('The link was clicked.');
		setVisibleMenu(!visibleMenu);
	}

	return (
		<div className="navigation-bar">
			<div className="first-floater">
				<img className="logo" src="./logo512.png" />
				<div className="current-page">{app.title}</div>
				<a href="#" className="hamburger" onClick={handleClick}>
					<i
						className={
							'fa ' + (visibleMenu ? 'fa-sort-asc' : 'fa-bars')
						}
					></i>
				</a>
			</div>
			<ul className={'main-menu ' + (visibleMenu ? '' : 'disp')}>
				<li>
					<Link to="home">{t('menu.home')}</Link>
				</li>
				<li>
					<Link to="link1">{t('menu.about')}</Link>
				</li>
				<li>
					<Link to="link2">{t('menu.mission')}</Link>
				</li>
				<li>
					<Link to="link3">{t('menu.contact')}</Link>
				</li>
				<UserNameButton />
				<LoginButton />
				<LangOption className="nav" />
			</ul>
		</div>
	);
}
