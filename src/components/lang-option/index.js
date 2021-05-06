import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setlang } from '../../app/appSlicer';
import PropTypes from 'prop-types'; // ES6

LangOption.propTypes = {
	className: PropTypes.string,
};
export default function LangOption(props) {
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
			className={'local-picker ' + props.className}
		>
			<option value="en">English</option>
			<option value="tr">Türkçe</option>
		</select>
	);
}
