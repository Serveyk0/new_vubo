import { it } from './constants';

export const Bachelors_and_masters = (props) =>
{
    const { t, title } = props;
    return (
        <div className="bachelors_and_masters">
                        <div className='wrapperIpz content'>
            {it.map((item, index) => { return (
                    <div key={++index} className='ITAdvantage'>
                    <div className='shadowWrapp'>
                        <div className = 'ITAdvantageTitle'>
                            <h2>{t(item.title)}</h2>
                        </div>
                        {item.advantage.map((item2, index2) => { 
                            return ( 
                            <div key={index2} className = 'ITAdvantageText'>
                                <img alt={item2} src = { "./media/" + item2 + ".png"} />
                                <p>{t(item2 == "bachelor_small" ? title : item2)}</p>
                            </div>
                        )})}
                    </div>
                </div>
            )})}
            </div>
        </div>
    )
}