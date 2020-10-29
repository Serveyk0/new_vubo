import React, { useEffect, useState } from 'react'
import './form.sass'
import Authorisation from './authorisation'
import Registration from './registration'
import { Redirect } from 'react-router-dom'

export const Form = (props) => {
    const {check_auth, set_check_auth} = props;


    if (check_auth)
        return <Redirect to='/main_page' />
    else {
        return (
            <div className="form">
                <Authorisation set_check_auth={set_check_auth}/>
                <Registration />
            </div>
        )
    }
}