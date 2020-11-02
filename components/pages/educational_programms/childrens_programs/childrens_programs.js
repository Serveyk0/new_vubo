import Head from 'next/head';
import Link from 'next/link'

const path="../media/";
const hrefs = ['english_for_kids', 'the_secret_of_genius'];

export const Childrens_programs = ({ t }) =>
{
    return (
        <div className="childrens_programs">
                <Head>
                    <title>Дитячі програми</title>
                    <meta name="description" content={"Дитячі програми" + " " + 
                hrefs.map((item) => t(item) + " ")
                } />
                </Head>
                <div className='countryPagesHref'>
                {hrefs.map((item, index) => {
                    return (
                        <Link key={index} href={item}>
                            <div className="countryPagesHrefItem">
                                <img className='countryPagesHrefItemBack' alt={item} src={path + item + ".jpg"} />
                                <div className='dummy'></div>
                                <p className='countryPagesHrefItemText'>{t(item)}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}