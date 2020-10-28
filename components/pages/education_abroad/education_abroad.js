import Link from 'next/link';

const educatinAbroad = ['distance_education', 'spanish_language', 'bachelors', 'masters'];

export const Education_abroad = ({ t }) =>
{
    return (
        <div className="education_abroad">
                {educatinAbroad.map((item, index) => { return ( 
                    <Link key={index} href={item}>
                    <div className='educationAbroadHrefItem'>
                        <img className='educationAbroadHrefItemBack' alt={item} src={"./media/" + item + ".png"}/>
                            <div className='dummy'></div>
                            <p className='educationAbroadHrefItemText'>{t(item)}</p>
                    </div>
                    </Link>
                )})}
        </div>
    )
}