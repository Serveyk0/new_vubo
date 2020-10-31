import { priceOther, priceUSA } from './constants';

const path="../media/";

export const General_conditions = (props) =>
{
    const { t, name } = props;
        let price = (name === 'ua.usa') ? priceUSA : priceOther;
        return(
            <>
                <h2 className='generalConditionsTitle'>{t("general_conditions_title")}</h2>
                <div className='price'>
                    {Object.values(price).map((item, index) => { return(
                        <div key={index} className={item.class}>
                            <h3 className='priceTitle'>{t(item.priceTitle)}</h3>
                            <div className={'priceList'}>
                                {Object.values(item.conditions).map((item2, index2) => { return(
                                    <div key={index2}>
                                        <span className='priceItem'><img className='priceImages' alt={item2.name} src={path + item2.name + ".png"} />
                                        <p>{t(item2.text)}</p></span>
                                    </div>
                                )})}
                            </div>
                        </div>                        
                    )})}
                </div>
            </>
        )
}