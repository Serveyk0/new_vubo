import Link from 'next/link'

const hrefs = [ 'ua_usa','ua_india','ua_ghana'];
const i_p   = [ 'i_p1','i_p2','i_p3'];

const path="../media/";

export const International_projects = ({ t }) =>
{
    return (
        <div className="international_projects">
            <div className='countryPagesHref'>
                    {hrefs.map((item, index) => { return (
                        <Link key={index} href={item}>
                            <div className="countryPagesHrefItem">
                                <img className='countryPagesHrefItemBack' alt={item} src={path + item + ".jpg"} />
                                <div className='dummy'></div>
                                <p className='countryPagesHrefItemText'>{t(item)}</p>
                                </div>
                        </Link>
                    )})}
            </div>
            <div className='internationalProjectsItems'>
                {i_p.map((item, index) => { return (
                    <div key={index} className='specificItem'>
                        <img className='internationalProjectsItemImage' alt={item} src={path + item + ".png"} />
                        <p className='internationalProjectsItemText'>{t(item)}</p>
                    </div>
                )})}
            </div>
        </div>
    )
}