import React, {useState} from 'react';
import "./style.css";
import {selectLogState, setvis, loguserin,} from '../../app/loginSlicer'
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';


export default function LoginModal(){
    const login = useSelector(selectLogState);
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
	const { t, i18n } = useTranslation();

    const handleSubmission = (e) => {
        dispatch(loguserin({name,email}))
        dispatch(setvis())
    }

    return (
        <div className={"login-modal " + (login.visModal ? "":"hidden")}>
            <h2>{t('login.login')}</h2>
            <input type="text" placeholder={t('login.name')} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder={t('login.email')} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder={t('login.password')}/><br />
            <button onClick={handleSubmission}>{t('login.login')}</button>
            <button onClick={() => dispatch(setvis())}>{t('login.close')}</button>
        </div>
    );
}
