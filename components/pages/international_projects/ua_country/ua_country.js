import { Get_days } from "./get_days";
import { General_conditions } from "./general_conditions";

export const Ua_country = ( props ) =>
{
    const { t, name, title } = props;
    return (
        <div className="ua_country">
                    <h2 className='titleCountry' >
                        {t(title + '_title')}
                    </h2>
                <div className='days'>                    
                    <Get_days t={t} name={name} title={title} />
                </div>
                <div className='generalConditions'>
                    <General_conditions t={t} name={name} />
                </div>
        </div>
    )
}