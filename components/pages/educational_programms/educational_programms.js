import Link from 'next/link'

const path="../media/";
const hrefs = ['parent_school', 'childrens_programs'];

export const Educational_programms = ({ t }) => {
    return (
        <div className="educational_programms">
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