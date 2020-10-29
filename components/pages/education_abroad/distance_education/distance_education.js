import Link from 'next/link';
import { href, distance_advantage } from './constants';

export const Distance_education = ({ t }) =>
{
    return (
        <div className="distance_education">
            <h1 className='distanceLearningTitle'>{t("title")}</h1>
            <div className="Master__And__Bachelor">
                    {
                    href.map((item, index) => { return (
						<div key={index} className="hrefItem">
							<img alt={item} src={"./media/it_" + item + ".png"} />
							<p>{t(item)}</p>
							<Link className="link" href={item}><button>{t("more_details")}</button></Link>
						</div>
					)})}
				</div>
                <div className='distanceAdvantage'>
                    <h2 className='distanceAdvantageTitle'>{t("distance_learning_advantage")}</h2>
                    {distance_advantage.map((item, index) => { return (
                        <div key={index} className='distanceAdvantageText'>
                            <img alt={item} src={"./media/" + item + ".png"} />
                            <p>{t(item)}</p>
                        </div>
                    )})}
                </div>
        </div>
    )
}