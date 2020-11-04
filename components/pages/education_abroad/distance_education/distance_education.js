import Head from 'next/head';
import Link from 'next/link';
import { href, distance_advantage } from './constants';

const path="../media/";

export const Distance_education = ({ t }) =>
{
    return (
        <div className="distance_education">
            <Head>
                <title>{t("title")}</title>
                <meta name="description" content={t("title") + " " + 
                href.map(item => t(item) + " ") + distance_advantage.map((item, index) => t(item))}
                />
            </Head>
            <h1 className='distanceLearningTitle'>{t("title")}</h1>
            <div className="Master__And__Bachelor">
                    {
                    href.map((item, index) => { return (
						<div key={index} className="hrefItem">
							<img alt={item} src={path + "it_" + item + ".png"} />
							<p>{t(item)}</p>
							<Link className="link" href={item}><button>{t("more_details")}</button></Link>
						</div>
					)})}
				</div>
                <div className='distanceAdvantage'>
                    <h2 className='distanceAdvantageTitle'>{t("distance_learning_advantage")}</h2>
                    {distance_advantage.map((item, index) => { return (
                        <div key={index} className='distanceAdvantageText'>
                            <img alt={item} src={path + item + ".png"} />
                            <p>{t(item)}</p>
                        </div>
                    )})}
                </div>
        </div>
    )
}