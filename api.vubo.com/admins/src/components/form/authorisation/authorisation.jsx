import React, { useState } from 'react'
import './authorisation.sass'
import { email_pl, password_pl, submit_pl, authorisation_title } from './constants'
import { authorisation } from './back'

export const Authorisation = ( props ) =>
{
    const [email    , set_email   ] = useState('')
    const [password , set_password] = useState('')
    const { set_redirect, set_check_auth } = props;
    const auth_user = ( ) => 
    {
        authorisation(email, password).then( res => {
            if(res !== null )
            {
            set_check_auth(1);
            }
        });
    }

    const change_field = ( e, set ) => 
        set(e.target.value)
        
    return (
        <div className="authorisation">
            <h3>{authorisation_title}</h3>
                <strong>{email_pl}</strong>
                <input type="text"   placeholder={email_pl}     value={email}    onChange={e => change_field(e, set_email)}    />
                <strong>{password_pl}</strong>
                <input type="text"   placeholder={password_pl}  value={password} onChange={e => change_field(e, set_password)} />
                <button onClick={auth_user}>Авторизация</button>
        </div>
    )
}