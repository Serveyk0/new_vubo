import { useState } from 'react';
import { contacts } from './constants';
import ModalWindow from './modal_window';
import Head from 'next/head'

const path="../media/";

export const phone_1 = '093-963-11-81';
export const hours = '09:00-18:00';
export const email_1 = 'openbusinessedu@gmail.com';

export const city = 'contacts_address';
export const street = 'street';
export const prospect = 'contacts_prospect';
export const metro = 'contacts_metro';
export const hoursWord = 'contacts_hours';
export const phoneWord = 'contacts_phone';
export const mailWord = 'contacts_mail';

export const nameWord = 'contact_form_name';
export const surnameWord = 'contact_form_surname';
export const emailFormWord = 'email';
export const phoneFormWord = 'contact_form_phone';
export const textWord = 'contact_form_text';
export const send = 'contact_form_send';

export const registerStatus = 'contacts_register_status';
export const registerTrue = 'contacts_register_status_true';
export const closeButton = 'contacts_close_button';

export const Contacts = ({ t }) => {
        const [name, set_name] = useState(''); 
        const [surname, set_surname] = useState(''); 
        const [email, set_email] = useState(''); 
        const [phone, set_phone] = useState(''); 
        const [text, set_text] = useState(''); 
        const [regStatus, set_regStatus] = useState(false);
        const [show_modal, set_show_modal] = useState(false);

    const handleChange = (e, set) => {
        set(e.target.value);
    }

    const handleSubmit = async (e) => {
        let xhr = new XMLHttpRequest;
        xhr.addEventListener('load', () => {
            console.log(xhr.responseText);
        });

        // http://serveyko-portfolio.zzz.com.ua/api.portfolio.com/index.php?name=
        //http://www.vubo.org.ua/api.vubo.com/
        xhr.open('GET', 'http://www.vubo.org.ua/api.vubo.com/index.php?name=' + name
            + '&surname=' + surname
            + '&email=' + email
            + '&phone=' + phone
            + '&text=' + text);
        xhr.send();
        e.preventDefault();
        set_show_modal(1);
        set_name("");
        set_surname("");
        set_email("");
        set_phone("");
        set_text("");
    }
    return (
        <div className="contacts"> 
        <Head>
        <title>Контакти</title>
        <meta name="description" content={"Контакти" + " " +
        t(city) + " " +
        t(street) + " " +
        t(prospect) + " " +
        t(metro) + " " +
        t(hoursWord) + " " +
        t(phoneWord) + " " +
        t(mailWord) + " " +
        contacts.map((item) => t(item[0] + "_name") + " " + t(item[0] + "_profession") + " " + t(item[0] + "_email") )}
         />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        {show_modal ? <ModalWindow t={t} set_show_modal={set_show_modal} /> : ""}
        <div className='contactsName'>
				{contacts.map((item, index) => { return ( 
					<div key={index} className='contact'>
						<img className='adminImage' alt={item} src={path + item + ".png"} />
						<p className='name'>{t(item + "_name")}</p>
						<p className='profession'>{t(item + "_profession")}</p>
						<p className='contacts'>{t(item + "_email")}</p>
					</div>
				)})}
			</div>
            <div className='mapResponsive'>
            <iframe className='iframeMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1271.7033562401334!2d30.50713842735401!3d50.396257467201764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8ca2d86db39%3A0x356ede56fb4ae11c!2z0YPQuy4g0JLQsNGB0LjQu9GM0LrQvtCy0YHQutCw0Y8sIDEsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1604490126962!5m2!1sru!2sua" frameBorder='0' title='map' allowFullScreen></iframe>
        </div>
				<div className="addressFormBlock">
                <div className='address'>
                <h3>{t('contacts_address')}</h3>
                <div className='addressData'>
                    <p>{t(prospect)}</p>
                    <p>{t(metro)}</p>
                    <p>{t(street)}</p>
                    <p><span className='bold'>{t(hoursWord)} : </span>{hours}</p>
                    <p><span className='bold'>{t(phoneWord)} : </span>{phone_1}</p>
                    <p><span className='bold'>{t(mailWord)}</span></p>
                </div>
            </div>
            <div>
                { regStatus ?  <RegisterStatus t={t} closeRegisterStatus={closeRegisterStatus()} /> : null }
                <h1 className='contactsFormTitle'>{t('contacts_reverse_form')}</h1>
                <div id='telegramForm' className='feedback'>
                    <p className='formText'>{t(nameWord)+"*"}</p><input className='contactsInput' name='name' value={name} placeholder={name} onChange={(e) => handleChange(e, set_name)} />
                    <p className='formText'>{t(surnameWord)}</p><input className='contactsInput' name='surname' value={surname} placeholder={surname} onChange={(e) => handleChange(e, set_surname)} />
                    <p className='formText'>{emailFormWord+"*"}</p><input className='contactsInput' name='email' value={email} placeholder={email} onChange={(e) => handleChange(e, set_email)} />
                    <p className='formText'>{t(phoneFormWord)}</p><input className='contactsInput' name='phone' value={phone} placeholder={phone} onChange={(e) => handleChange(e, set_phone)} />
                    <p className='formText'>{t(textWord)}</p><textarea className='contactsInput textareaInput' value={text} name='mailText' placeholder={text} onChange={(e) => handleChange(e, set_text)} ></textarea>
                    <button className={"btn " + ((name !== "" && email !== "") ? "" : "disabled_btn" )} onClick={handleSubmit} disabled={ (name !== "" && email !== "") ? false : true}>{t(send)}</button>
                </div>
            </div>
				</div>  
        </div>
    )
}