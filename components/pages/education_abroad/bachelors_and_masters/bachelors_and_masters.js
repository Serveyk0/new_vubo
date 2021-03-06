import Head   from 'next/head';
import { it } from './constants';

const path="../media/";
export const Bachelors_and_masters = (props) =>
{
    const { t, title } = props;
    return (
        <div className="bachelors_and_masters">
            <Head>
                <title>{t(title)}</title>
                <meta name="description" content={
                    t(title) + " " + 
                    it.map((item) => { return (
                    t(item.title) + " " + 
                        item.advantage.map((item2) => { 
                            t(item2 == "bachelor_small" ? title : item2) + " "
                        })
                    )})}
                />
            </Head>
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
                                <img alt={item2} src = { path + item2 + ".png"} />
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