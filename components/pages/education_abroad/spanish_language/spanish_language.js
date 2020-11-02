import Head from 'next/head';
import { spanishTable, educationTourism } from './constants';

const path="../media/";

export const Spanish_language = ({ t }) =>
{
    return (
        <div className="spanish_language">
                        <Head>
                <title>{t("title")}</title>
                <meta name="description" content={t("title") + " " + 
                educationTourism.map(item => t(item) + " ")}
                />
            </Head>
            <h1 className='spanishLanguageTitle'>{t("title")}</h1>
            <div className='content'>
                <h2 className='educationTourismTitle'>{t('education_tourism')}</h2>
                <p className='educationTourismUnderTitle'>{t('education_tourism_under_title')}</p>
                <div className='advantage'>
                    <h2 className='advantageTitle'>{t('seven_advantage')}</h2>
                    {educationTourism.map((item, index) => { return (
                        <div key={index} className='advantageText'>
                            <img alt={item} src={path + item + ".png"} />
                            <p>{t(item)}</p>
                        </div>
                    )})}
                </div>
            </div>

            <h2 className='group'>{t("available_groups")}</h2>
            <div className='wrapperSpanishTable'>
                {spanishTable.map((item, index) => { return (
                    <div key={index} className='pricingTable'>
                        <div className='pricingTable-header'>
                            <span className='price-value'>{t(item.pricingTableHeader.time)}<span className='month'>{item.pricingTableHeader.level}</span></span>
                            <span className='icon'><i className='fa fa-adjust'></i><h3>{item.pricingTableHeader.type}</h3></span>
                            <span className='heading'></span>
                        </div>
                        {item.pricingContent.map((item2, index2) => { return ( 
                            <div key={++index2} className='pricingTable'>
                                <div className='pricingContent'>
                                    <ul>
                                        {item2.content.map((item3, index3) => { return (
                                                <li key={++index3}>{t(item3)}</li>
                                            )})} 
                                    </ul>
                                </div>
                                {index2 < item.pricingContent.length && item2.hasOwnProperty('nextHeader') ? 
                                    <div className='pricingTable-header'>
                                        <span className='icon'><i className='fa fa-adjust'></i><h3>{t(item2.nextHeader)}</h3></span>
                                        <span className='heading'></span>
                                    </div>
                                    : null
                                }
                            </div>
                        )})}
                    </div>
                )})}
            </div>
        </div>
    )
}