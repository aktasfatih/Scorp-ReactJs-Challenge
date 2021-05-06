import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setlang } from '../../app/appSlicer';

export default function LangOption() {
	const dispatch = useDispatch();
	const { t, i18n } = useTranslation();

	var handleChange = (e) => {
		dispatch(setlang(e.target.value));
		i18n.changeLanguage(e.target.value);
	};

	return (
		<select
			onChange={handleChange}
			name="lang"
			id="lang"
			className="local-picker"
		>
			<option value="en">English</option>
			<option value="tr">Türkçe</option>
		</select>
	);
}
