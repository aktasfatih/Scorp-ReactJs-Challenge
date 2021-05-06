import React, { useState } from 'react';
import './style.css';
import { selectLogState, setvis, loguserin } from '../../app/loginSlicer';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LangOption from '../lang-option';

export default function LoginModal() {
	const login = useSelector(selectLogState);
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { t } = useTranslation();

	const handleSubmission = () => {
		let errors = [];

		if (!email) {
			errors.push(t('alerts.MISSING_EMAIL'));
		}
		if (!name) {
			errors.push(t('alerts.MISSING_NAME'));
		}
		if (!password) {
			errors.push(t('alerts.MISSING_PASS'));
		}
		if (errors.length > 0) {
			errors.unshift(t('alerts.ERRORS_TEXT') + '\r\n');
			alert(errors.join(' \r\n'));
		} else {
			dispatch(loguserin({ name, email }));
			dispatch(setvis());
		}
	};

	return (
		<Modal
			open={login.visModal}
			onClose={() => dispatch(setvis())}
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
		>
			<div className="login-modal">
				<form onSubmit={handleSubmission}>
					<h2>{t('login.login')}</h2>

					<input
						type="text"
						minLength="5"
						placeholder={t('login.name')}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type="email"
						placeholder={t('login.email')}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						minLength="2"
						placeholder={t('login.password')}
					/>
					<br />
					<Button variant="contained" color="primary" type="submit">
						{t('login.login')}
					</Button>
					<Button
						variant="contained"
						color="secondary"
						onClick={() => dispatch(setvis())}
					>
						{t('login.close')}
					</Button>
				</form>
				<LangOption className="login" />
				<br />
			</div>
		</Modal>
	);
}
