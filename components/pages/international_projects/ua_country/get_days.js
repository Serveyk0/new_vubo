import { countDays } from "./constants";

const path="../media/";

export const Get_days = (props) =>
{
    const { t, name, title } = props;
    let arr = null;
    switch (name) {
        case 'ua_usa':
            arr=countDays['ua.usa'];
            break;
        default:
            arr=countDays['ua.ig'];
            break;
    }

    return(
        Object.values(arr).map((item, index) => { 
            return(
                    <div key={index} className={'allDays ' + name + ++index}>
                        <div className='centerTopText'>
                        <h3>{t('day' + index)}</h3>
                            <p className='titleDayText' dangerouslySetInnerHTML={{ __html: t(name + '_title_day' + index).replace(/\\n/g, 'br /')}} />
                        </div>
                        <div className='backDay'>    
                        {
                            (Object.values(item.dayText).length) > 0 ?
                            <><input type='checkbox' id={'day' + index}/>
                            <label htmlFor={'day' + index} className='moreDetails' >{t('more_details')}</label></>
                            : ''
                        }
                            <div className='modalDayBack'>
                                <div className='backDayText'>
                                    <div>
                                    {(Object.values(item.dayText).length) > 0 ?
                                    Object.values(item.dayText).map((item2, indexDay) => {
                                        return(<span key={indexDay}>{t(name + '_text_day' + index + '_' + ++indexDay)}<br /></span>)
                                    })
                                    : <p dangerouslySetInnerHTML={{ __html: t(name + '_title_day' + index).replace(/\\n/g, 'br /')}} />}
                                </div>
                                </div>
                                <label htmlFor={'day' + index} className='close'></label> 
                                <div className='daysBlockImage'>
                                {Object.values(item.images).map((image, indexImage) => {
                                    return(<img key={indexImage} className='daysImage' alt={image.name} src={path + name + "/" + image.img + ".jpg"} />)
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
            )
        })
    )
}