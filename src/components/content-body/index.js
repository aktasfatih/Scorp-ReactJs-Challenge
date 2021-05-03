import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { settitle } from '../../app/appSlicer';
import { selectLogState } from '../../app/loginSlicer';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
function Link3() {
	const login = useSelector(selectLogState);
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const [phone, setphone] = useState(null);
	const [text, settext] = useState(null);
	const [ct, setct] = useState(null);

	useEffect(() => {
		dispatch(settitle(t('menu.contact')));
	});

	const countryList = [
		{ id: 'TR', name: 'Turkey' },
		{ id: 'US', name: 'United States of America' },
		{ id: 'GB', name: 'United Kingdom' },
		{ id: 'DE', name: 'Germany' },
		{ id: 'SE', name: 'Sweden' },
		{ id: 'KE', name: 'Kenya' },
		{ id: 'BR', name: 'Brazil' },
		{ id: 'ZW', name: 'Zimbabwe' },
	];

	const handleSubmission = (e) => {
		e.preventDefault();
		// if(login.username & login.email){
		console.log({
			name: login.username,
			email: login.email,
			phonenumber: phone,
			country_code: ct.id,
			text: text,
		});
		// }
	};

	return (
		<>
			<h2>{t('menu.contact')}</h2>
			<form onSubmit={handleSubmission}>
				Email: <br />
				{login.email ? login.email : '-'}
				<br />
				Username: <br />
				{login.username ? login.username : '-'}
				<br />
				Phone:
				<br />
				<input
					onChange={(e) => setphone(e.target.value)}
					type="tel"
					id="phone"
					name="phone"
					placeholder="123-45-678"
					pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
					required
				/>
				<br />
				<textarea
					onChange={(e) => settext(e.target.value)}
					id="w3review"
					name="w3review"
					rows="4"
					cols="50"
				></textarea>
				<Autocomplete
					id="combo-box-demo"
					options={countryList}
					getOptionLabel={(option) => option.name}
					style={{ width: 300 }}
					onChange={(e, v) => setct(v)}
					renderInput={(params) => (
						<TextField
							{...params}
							label="Country"
							variant="outlined"
						/>
					)}
				/>
				<input type="submit" />
			</form>
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
				<Link3 />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	);
}
