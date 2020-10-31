import { useState, useEffect } from 'react';
import { i18n } from '../../i18n';
const path="../media/";
const languages = [{language: "ukrainian", change_language: "ua"},{language: "russian", change_language: "ru"},{language: "english", change_language: "en"}]
export const Change_language = ({ t }) =>
{
    useEffect(() => {
        const lang = t("language_selection");
        set_check_languages(lang === 'Вибір мови' ? 0 
        : lang === "Language selection" ? 2 : 1)
    }, [])
    const [show_languages, set_show_languages] = useState(0);
    const [check_languages, set_check_languages] = useState(0);
    return (
        <div className={"change_language grid " + (show_languages ? "change_language_active" : "")}>
            <img className={"change_language_image "+ (show_languages ? "change_language_image_active" : "")} src={path + "language.png"} alt={t("language_selection")}
            onClick={ () => set_show_languages(!show_languages) } />
            <div className={(show_languages ? "language_block" : "") + " change_language_wrapper"}>
                <p className="language_title margin_0 padding_0">{t("language_selection")}</p>
                <ul className="change_language_languages grid margin_0 padding_0">
                    {languages.map((item, index) => <li className={"language " + ((check_languages === index) ? "active_language" : "")} key={index} 
                    onClick={() => {i18n.changeLanguage(item.change_language); set_check_languages(index); set_show_languages(0)}}>{t(item.language)}</li>)}
                </ul>
            </div>
        </div>
    )
}