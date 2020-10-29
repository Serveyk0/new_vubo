import { advantage, skills, disciplines, blockPm, serteficate, deadline } from './constants';

export const Project_management = ({ t }) =>
{
    return (
        <div className="project_management">
                            <h1 className='projectManagementTitles'>{t("project_management_title")}</h1>
                <div className='projectManagementMainText'>
                    <p className='projectManagementMainTextIpz'>{t("project_management_main_text")}</p>
                </div>
                <div>
            <h2 className="advantageTitle">{t("project_management_advantage_title")}</h2>
                <div className="AdvantagesPM">
                    {advantage.map((item, index) => { return (
                        <div key={index}>
                            <img alt={item} src={"./media/mvn/" + item + ".png"} />
                            <h3>{t(item + "_title")}<div className="border"></div></h3>
                            <p>{t(item  + "_text")}</p>
                        </div>
                    )})}
                </div>
            </div>
                <h1 className='projectManagementTitles'>{t("project_management_skills_title")}<div className='border'></div></h1>
                <div className='SkillsPM'>
                {skills.map((item, index) => { return (
                        <div key={index}>
                            <img alt={item} src={"./media/mvn/" + item + ".png"} />
                            <h3>{t(item + "_title")}</h3>
                            <p>{t(item  + "_text")}</p>
                        </div>
                    )})}
            </div>
                <h1 className='projectManagementTitles'>{t("project_management_disciplines_title")}<div className='border'></div></h1>
                <div className='Disciplines'>
                {disciplines.map((item, index) => { return (
                    <div key={index}>
                        <div>
                            <h3 className='disciplinesTitle'>{t(item.title + "_title")}</h3>
                        </div>
                        <div className='disciplinesBlock'>
                            {item.disciplines.map((item2, index2) => { return (
                            <div key={index2} className = 'disciplinesText'>
                                <img alt={item2} src = {"./media/mvn/" + item2 + ".png"} />
                                <p>{t(item2  + "_text")}</p>
                            </div>
                            )})}
                        </div>
                    </div>
                )})}
            </div>
                <h1 className='projectManagementTitles'>{t("project_management_block_pm_title")}<div className='border'></div></h1>
                <div className='PM_Block'>
                {blockPm.map((item, index) => { return (
                    <div key={index} className = 'pmText'>
                        <img alt={item} src = {"./media/mvn/" + item + ".png"} />
                        <p>{t(item  + "_text")}</p>
                    </div>
                )})}
            </div>
                <h1 className='projectManagementTitles'>{t("project_management_sertefication_title")}<div className='border'></div></h1>
                <div className='certeficationProgram'>
                <img alt='certification' src={"./media/mvn/certification.png"} />
                {serteficate.map((item, index) => { return (<p key={index}>{t(item)}</p>)})}
            </div>
                <h1 className='projectManagementTitles'>{t("project_management_deadline_title")}<div className='border'></div></h1>
                <div className='dateOfDeadline'>
                {deadline.map((item, index) => { return ( <p key={index}>{t(item)}</p>)})}
            </div>
        </div>
    )
}