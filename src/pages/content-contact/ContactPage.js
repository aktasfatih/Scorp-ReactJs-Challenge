import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLogState } from '../../app/loginSlicer';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { settitle } from '../../app/appSlicer';
import { useTranslation } from 'react-i18next';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

export default function ContactPage() {
	const login = useSelector(selectLogState);
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const [name, setname] = useState(null);
	const [email, setemail] = useState(null);
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
		console.log({
			name: login.username ? login.username : name,
			email: login.email ? login.email : email,
			phonenumber: phone,
			country_code: ct.id,
			text: text,
		});
	};

	return (
		<>
			<h2>{t('menu.contact')}</h2>
			<form onSubmit={handleSubmission}>
				<TextField
					required
					disabled={login.username ? true : false}
					{...(login.username ? { value: login.username } : null)}
					style={{ marginTop: 10 }}
					// id="standard-disabled"
					label={t('login.name')}
					defaultValue={login.username ? login.username : ''}
					onChange={(e) => setname(e.target.value)}
				/>
				<br />
				<TextField
					required
					disabled={login.email ? true : false}
					{...(login.email ? { value: login.email } : null)}
					style={{ marginTop: 10 }}
					// id="standard-disabled"
					label={t('login.email')}
					defaultValue={login.email ? login.email : ''}
					onChange={(e) => setemail(e.target.value)}
				/>
				<br />
				<TextField
					required
					style={{ marginTop: 10 }}
					id="standard-required"
					label={t('login.phone')}
					pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
					defaultValue=""
					placeholder="123-456-7891"
					name="phone"
					type="tel"
					onChange={(e) => setphone(e.target.value)}
				/>
				<br />
				<TextareaAutosize
					required
					onChange={(e) => settext(e.target.value)}
					cols="50"
					rows="4"
					rowsMax={4}
					aria-label="maximum height"
					placeholder=""
					style={{ marginTop: 10, marginBottom: 10 }}
				/>
				<Autocomplete
					required
					id="combo-box-demo"
					options={countryList}
					getOptionLabel={(option) => option.name}
					style={{ width: 300 }}
					onChange={(e, v) => setct(v)}
					renderInput={(params) => (
						<TextField
							{...params}
							label={t('login.country')}
							variant="outlined"
						/>
					)}
				/>
				<Button
					variant="contained"
					style={{ marginTop: 10 }}
					color="primary"
					type="submit"
				>
					{t('login.submit')}
				</Button>
			</form>
		</>
	);
}
