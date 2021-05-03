import React from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';

export default function Footer() {
	const { t } = useTranslation();

	return <footer className="footer">{t('user.footer')}</footer>;
}
