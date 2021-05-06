import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { settitle } from '../../app/appSlicer';
import { useTranslation } from 'react-i18next';
import ContactPage from '../../pages/content-contact/ContactPage';

function Home() {
	const dispatch = useDispatch();
	const { t } = useTranslation();

	useEffect(() => {
		dispatch(settitle(t('menu.home')));
	});
	return (
		<>
			<h2>{t('menu.home')}</h2>
			{t('pages.home')}
		</>
	);
}

function Link1() {
	const dispatch = useDispatch();
	const { t } = useTranslation();

	useEffect(() => {
		dispatch(settitle(t('menu.about')));
	});
	return (
		<>
			<h2>{t('menu.about')}</h2>
			{t('pages.about')}
		</>
	);
}

function Link2() {
	const dispatch = useDispatch();
	const { t } = useTranslation();

	useEffect(() => {
		dispatch(settitle(t('menu.mission')));
	});
	return (
		<>
			<h2>{t('menu.mission')}</h2>
			{t('pages.mission')}
		</>
	);
}

export default function ContentBody() {
	return (
		<Switch>
			<Route path="/link2">
				<Link2 />
			</Route>
			<Route path="/link1">
				<Link1 />
			</Route>
			<Route path="/link3">
				<ContactPage />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	);
}
