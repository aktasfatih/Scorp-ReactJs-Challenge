import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLogState } from '../../app/loginSlicer';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { settitle } from '../../app/appSlicer';
import { useTranslation } from 'react-i18next';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

const emailRegex = RegExp(
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const phoneRegex = RegExp('^[0-9]{3}-?[0-9]{3}-?[0-9]{4}$');

export default function ContactPage() {
	const login = useSelector(selectLogState);
	const dispatch = useDispatch();
	const { t } = useTranslation();

	const [formErrors, setFormErrors] = useState({
		name: '',
		email: '',
		password: '',
		phone: '',
		message: '',
	});

	const [name, setname] = useState('');
	const [email, setemail] = useState('');
	const [phone, setphone] = useState('');
	const [text, settext] = useState('');
	const [ct, setct] = useState('');

	useEffect(() => {
		dispatch(settitle(t('menu.contact')));
	});

	const formValid = ({ formErrors, ...rest }) => {
		console.log({ formErrors, rest });
		let valid = true;
		//form was filled
		Object.values(rest).forEach((val) => {
			val === null && (valid = false);
		});
		// empty
		Object.values(formErrors).forEach((val) => {
			val.length > 0 && (valid = false);
		});
		Object.values(rest).forEach((val) => {
			val.length == 0 && (valid = false);
		});
		return valid;
	};

	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		let tmpFormErrors = formErrors;
		switch (name) {
			case 'email':
				setemail(value);
				tmpFormErrors.email = emailRegex.test(value)
					? ''
					: t('alerts.BADEMAIL');
				break;
			case 'phone':
				setphone(value);
				tmpFormErrors.phone = phoneRegex.test(value)
					? ''
					: t('alerts.BADPHONE');
				break;
			case 'name':
				setname(value);
				tmpFormErrors.name =
					value.length < 3 ? t('alerts.BADNAME') : '';
				break;
			case 'message':
				settext(value);
				tmpFormErrors.message =
					value.length < 1 ? t('alerts.BADMESSAGE') : '';
				break;
			default:
				break;
		}
		setFormErrors(tmpFormErrors);
	};

	var handleSubmission = (e) => {
		e.preventDefault();
		var tempname = login.username ? login.username : name;
		var tempemail = login.email ? login.email : email;
		if (formValid({ formErrors, tempname, tempemail, phone, text, ct })) {
			console.log({
				name: tempname,
				email,
				phone: phone,
				country_code: ct.id,
				text: text,
			});
		} else {
			let tmpFormErrors = '';
			// eslint-disable-next-line no-unused-vars
			for (const [key, value] of Object.entries(formErrors)) {
				if (value) {
					tmpFormErrors += value + '\r\n';
				}
			}
			if (tmpFormErrors == '') {
				alert(t('alerts.BADFORM'));
			} else {
				alert(tmpFormErrors);
				console.log("'" + tmpFormErrors + "'");
			}
		}
	};

	return (
		<>
			<h2>{t('menu.contact')}</h2>
			<form onSubmit={handleSubmission}>
				<TextField
					disabled={login.username ? true : false}
					value={login.username ? login.username : name}
					style={{
						marginTop: 10,
					}}
					error={formErrors.name.length > 0 ? true : false}
					name="name"
					label={login.email ? '' : t('login.name')}
					onChange={handleChange}
				/>
				<br />
				<TextField
					name="email"
					disabled={login.email ? true : false}
					value={login.email ? login.email : email}
					error={formErrors.email.length > 0 ? true : false}
					style={{ marginTop: 10 }}
					label={login.email ? '' : t('login.email')}
					type="text"
					onChange={handleChange}
				/>
				<br />
				<TextField
					style={{ marginTop: 10 }}
					id="standard-required"
					label={t('login.phone')}
					error={formErrors.phone.length > 0 ? true : false}
					defaultValue=""
					placeholder="123-456-7891"
					name="phone"
					type="tel"
					onChange={handleChange}
				/>
				<br />
				<TextareaAutosize
					onChange={handleChange}
					cols="50"
					rows="4"
					name="message"
					rowsMax={4}
					aria-label="maximum height"
					placeholder=""
					style={{ marginTop: 10, marginBottom: 10 }}
				/>
				<Autocomplete
					required
					id="combo-box-demo"
					options={t('countries')}
					getOptionLabel={(option) => option.name}
					getOptionSelected={(option, value) =>
						option.name === value.name
					}
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
