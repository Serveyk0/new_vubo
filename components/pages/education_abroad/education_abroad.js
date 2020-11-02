import Link from 'next/link';
import Head from 'next/head';

const educatinAbroad = ['distance_education', 'spanish_language', 'bachelors', 'masters'];

const path="../media/";
export const Education_abroad = ({ t }) =>
{
    return (
        <div className="education_abroad">
            <Head>
                <title>Освіта за кордоном</title>
                <meta name="description" content={"Освіта за кордоном" + " " + 
                educatinAbroad.map(item => t(item) + " ")}
                />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
                {educatinAbroad.map((item, index) => { return ( 
                    <Link key={index} href={item}>
                    <div className='educationAbroadHrefItem'>
                        <img className='educationAbroadHrefItemBack' alt={item} src={path + item + ".png"}/>
                            <div className='dummy'></div>
                            <p className='educationAbroadHrefItemText'>{t(item)}</p>
                    </div>
                    </Link>
                )})}
        </div>
    )
}