import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectAppState, setlang } from '../../app/appSlicer';
import PropTypes from 'prop-types'; // ES6

LangOption.propTypes = {
	className: PropTypes.string,
};
export default function LangOption(props) {
	const dispatch = useDispatch();
	const { t, i18n } = useTranslation();
	const lang = useSelector(selectAppState).lang;

	var handleChange = (e) => {
		dispatch(setlang(e.target.value));
		i18n.changeLanguage(e.target.value);
	};

	return (
		<select
			value={lang}
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
