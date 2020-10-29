import { useState } from 'react';
import { contacts } from './constants';


export const phone = '093-963-11-81';
export const hours = '09:00-18:00';
export const email = 'openbusinessedu@gmail_com';

export const city = 'contacts_address';
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
        const [mailText, set_mailText] = useState(''); 
        const [regStatus, set_regStatus] = useState(false),
   

    handleChange = (e, set) => {
        set(e.target.value);
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const { name, surname, email, phone, mailText } = this.state;
        let host = window.location.hostname; 
        let protocol = window.location.protocol 
        let url = null 
        if (host === "localhost") { 
            url = protocol + "//" + host + ":9000" 
            } else { 
            url = protocol + "//" + host 
            } 

        this.setState({name: '', surname: '', email: '', phone: '', mailText: ''});
        setTimeout( () => (set_regStatus(true)), 1000);
        await axios.post(url + "/registrationMessage", { name, surname, email, phone, mailText })
    }
    return (
        <div className="contacts"> 
        <div className='contactsName'>
				{contacts.map((item, index) => { return ( 
					<div key={index} className='contact'>
						<img className='adminImage' alt={item.imageAlt} src={item.image} />
						<p className='name'>{t(item.name)}</p>
						<p className='profession'>{t(item.profession)}</p>
						<p className='contacts'>{t(item.phone)}</p>
					</div>
				)})}
			</div>
            <div className='mapResponsive'>
            <iframe className='iframeMap' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.4954406873985!2d30.501078615729412!3d50.394603679467764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8c93d1de9ff%3A0x9f02b35f3e6e56a4!2z0YPQuy4g0JzQuNGF0LDQuNC70LAg0KHRgtC10LvRjNC80LDRhdCwLCAxMNCQLCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1565879914709!5m2!1sru!2sua' frameBorder='0' title='map' allowFullScreen></iframe>
        </div>
				<div className="addressFormBlock">
                <div className='address'>
                <h3>{t('contacts.address')}</h3>
                <div className='addressData'>
                    <p>{t(city)}</p>
                    <p>{t(prospect)}</p>
                    <p>{t(metro)}</p>
                    <p><span className='bold'>{t(hoursWord)}</span>{phone}</p>
                    <p><span className='bold'>{t(phoneWord)}</span>{hours}</p>
                    <p><span className='bold'>{t(mailWord)}</span>{email}</p>
                </div>
            </div>
            <div>
                { regStatus ?  <RegisterStatus t={t} closeRegisterStatus={this.closeRegisterStatus} /> : null }
                <h1 className='contactsFormTitle'>{t('contacts.reverse.form')}</h1>
                <form id='telegramForm' className='feedback' encType="application/x-www-form-urlencoded" onSubmit={this.handleSubmit} method='POST'>
                    <p className='formText'>{t(nameWord)}</p><input className='contactsInput' name='name' value={name} placeholder={name} onChange={() => handleChange(e, set_name)} />
                    <p className='formText'>{t(surnameWord)}</p><input className='contactsInput' name='surname' value={surname} placeholder={surname} onChange={() => handleChange(e, set_surname)} />
                    <p className='formText'>{emailFormWord}</p><input className='contactsInput' name='email' value={email} placeholder={email} onChange={() => handleChange(e, set_email)} />
                    <p className='formText'>{t(phoneFormWord)}</p><input className='contactsInput' name='phone' value={phone} placeholder={phone} onChange={() => handleChange(e, set_phone)} />
                    <p className='formText'>{t(textWord)}</p><textarea className='contactsInput textareaInput' value={mailText} name='mailText' placeholder={mailText} onChange={() => handleChange(e, set_mailText)} ></textarea>
                    <input className='btn' type='submit' value={t(send)} />
                </form>
            </div>
				</div>  
        </div>
    )
}