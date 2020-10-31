import { useEffect } from "react";
import Router from 'next/router';
import App from 'next/app'
import { appWithTranslation } from '../i18n'
import Header from '../components/header'
import Menu from '../components/menu'
import Change_language from '../components/change_language'
import Footer from '../components/footer'

import '../styles/common.sass'
import '../styles/header.sass'
import '../styles/menu.sass'
import '../styles/change_language.sass'
import '../styles/footer.sass'

import '../styles/home.sass'

import '../styles/international_projects.sass'
import '../styles/international_projects/ghana.sass'
import '../styles/international_projects/india.sass'
import '../styles/international_projects/usa.sass'

import '../styles/educational_programms.sass'
import '../styles/educational_programms/parent_school.sass'
import '../styles/educational_programms/childrens_programs.sass'
import '../styles/educational_programms/childrens_programs/english_for_kids.sass'
import '../styles/educational_programms/childrens_programs/the_secret_of_genius.sass'

import '../styles/education_abroad.sass'
import '../styles/education_abroad/bachelors_and_masters.sass'
import '../styles/education_abroad/distance_education.sass'
import '../styles/education_abroad/spanish_language.sass'

import '../styles/mva.sass'
import '../styles/mva/project_management.sass'

import '../styles/contacts.sass'

const MyApp = ({ Component, pageProps }) => 
{
    return (<><Header /><Menu /><Change_language /><div className="wrapper_components"><Component {...pageProps} /></div><Footer /></>)
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)