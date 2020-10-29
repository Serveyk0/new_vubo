import React, { useState } from 'react'
import './registration.sass'
import { name_pl, email_pl, password_pl, submit_pl, register_title } from './constants'
import { registration } from './back'

export const Registration = ( ) =>
{
    const [name     , set_name    ] = useState('')
    const [email    , set_email   ] = useState('')
    const [password , set_password] = useState('')

    const register_user = ( ) => 
    {
        registration(name, email, password);
    }

    const change_field = ( e, set ) => 
        set(e.target.value)

    return (
        <div className="registration">
            <h3>{register_title}</h3>
            <form onSubmit={register_user}>
                <strong>{name_pl}</strong>
                <input type="text"   placeholder={name_pl}      value={name}     onChange={e => change_field(e, set_name)}    />
                <strong>{email_pl}</strong>
                <input type="text"   placeholder={email_pl}     value={email}    onChange={e => change_field(e, set_email)}    />
                <strong>{password_pl}</strong>
                <input type="text"   placeholder={password_pl}  value={password} onChange={e => change_field(e, set_password)} />
                <input type="submit" placeholder={submit_pl}                      />
            </form>
        </div>
    )
}