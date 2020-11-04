import { useState } from 'react';
import { Registration } from "../registration"
import Head from 'next/head';
const path = "../media/";
const modules = 
[
    ["module_1", "module_1_1", "module_1_2", "module_1_3", "module_1_4", "module_1_5", ],
    ["module_2", "module_2_1", "module_2_2", "module_2_3", "module_2_4", ],
    ["module_3", "module_3_1", "module_3_2", "module_3_3", "module_3_4", "module_3_5", ],
    ["module_4", "module_4_1", "module_4_2", "module_4_3", "module_4_4", "module_4_5", ],
]

export const Parent_school = ({ t }) =>
{
    const [show_modal, set_show_modal] = useState(false);
    return (
        <div className="parent_school">
            <Head>
                <title>Батьківська школа</title>
                <meta name="description" content={"Батьківська школа"} />
            </Head>
            {show_modal ? <Registration t={t} set_show_modal={set_show_modal} /> : ""}
            <h2 className="parent_school_title">{t("title")}</h2>
            <p className="parent_school_text">{t("school")}</p>
            <p className="parent_school_text">{t("online")}</p>
            <p className="parent_school_text">{t("baby")}</p>
            <div className="people_block">
                <div className="people">
                    <img src={path + "irina.jpg"} alt={t("irina")} />
                    <p className="people_name">{t("irina")}</p>
                    <p className="people_text">{t("psycho")}</p>
                </div>
            </div>
            <p className="parent_school_text">{t("course")}</p>
            <p className="parent_school_text">{t("course_info")}</p>
            <p className="parent_school_text">{t("first_info")}</p>
            <p className="parent_school_text">{t("second_info")}</p>
            <p className="parent_school_text">{t("third_info")}</p>
            {
                modules.map((item, index) => 
                    <ul key={index} className="parent_school_modules">
                        {
                            item.map((item2, index2) =>
                                <li key={index2} className="parent_school_modules_item">{t(item2)}</li>
                            )}
                    </ul>
                )
            }
            <button className="register_button" onClick={() => set_show_modal(1)}>{t("registration")}</button>
        </div>
    )
}