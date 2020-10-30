import { useState } from 'react';

export const Registration = (props) =>
{
    const { t, set_show_modal } = props;
    const [name, set_name] = useState(''); 
    const [surname, set_surname] = useState(''); 
    const [email, set_email] = useState(''); 
    const [phone, set_phone] = useState(''); 
    const [text, set_text] = useState(''); 
    const [regStatus, set_regStatus] = useState(false);

    const registrationFrom = [
        {
            'name' : 'name',
            'type' : 'text',
            name: name,
            set: set_name
        },
        {
            'name' : 'surname',
            'type' : 'text',
            name: surname,
            set: set_surname
        },
        {
            'name' : 'phone',
            'type' : 'text',
            name: phone,
            set: set_phone
        },
        {
            'name' : 'email',
            'type' : 'text',
            name: email,
            set: set_email
        },
    ];



const handleChange = (e, set) => {
    set(e.target.value);
}

const handleSubmit = async (e) => {
    let xhr = new XMLHttpRequest;
    xhr.addEventListener('load', () => {
        console.log(xhr.responseText);
    });

    // http://serveyko-portfolio.zzz.com.ua/api.portfolio.com/index.php?name=
    xhr.open('GET', 'http://localhost/api.vubo.com/index.php?name=' + name
        + '&surname=' + surname
        + '&email=' + email
        + '&phone=' + phone
        + '&text=' + t("title"));
    xhr.send();
    e.preventDefault();
    set_show_modal(1);
    set_name("");
    set_surname("");
    set_email("");
    set_phone("");

}

    return (
        <section className='registrationContent'>
        <div className='closeBtn' onClick={() => set_show_modal(0)} />
        <div className='contactForm'>
            <h1 className='registrationTitle'>{t("title_form")}</h1>
            {registrationFrom.map((registrationItem, registrationIndex) => { return (
                <div className='inputBlock' key={registrationIndex}><input className='formInput' type={registrationItem.type} value={registrationItem.name} onChange={() => handleChange(e, set)} placeholder={t('registration_user_' + registrationItem.name)} /></div>
            )})}
            <button onClick={handleSubmit}>{t('registration_user_register')}</button>
        </div>            
    </section>
    )
}