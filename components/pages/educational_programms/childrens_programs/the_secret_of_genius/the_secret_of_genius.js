import { useState } from 'react';
import { Registration } from "../../registration"

const li = ["memory", "concentration", "languages", "assimilation", "sociability", "space", "foreign"]
const second_li = ["glove", "left_hand2", "instruction", "notebook", "tracker", "designer"]

export const The_secret_of_genius = ({ t }) =>
{
    const [show_modal, set_show_modal] = useState(false);
    return (
        <div className="the_secret_of_genius">
            {show_modal ? <Registration t={t} set_show_modal={set_show_modal} /> : ""}
            <h2 className="the_secret_of_genius_title blue text_center">{t("title")}</h2>
            <p className="about_methodology blue text_center">{t("about")}</p>
            <img className="the_secret_of_genius_images" src="./media/наташка сайт.jpg" alt={t("title")} />
            <div className="the_secret_of_genius_block">
                
                <p>
                    <span className="bold italic">{"«" + t("title") + "»"}</span>
                    {t("unique")}
                    <span className="bold">{t("author_methodology")}</span>
                    {t("implementation")}
                    <span className="bold">{t("left_hand")}</span>
                    {t("tesla")}
                </p>
                <p>
                    <span className="bold italic">{t("program") + "«" + t("title") + "» "}</span>
                    {t("rests")}
                    <span className="bold">{t("neuropsychology")}</span>
                    {t("connections")}
                    <span className="bold">{t("attention")}</span>
                    {t("10_percent")}
                </p>
                <p>
                    <span className="bold">{t("developing")}</span>
                    {
                        li.map((item, index) => <li key={index} className="bold li_dot">{t(item)}</li>)
                    }
                </p>
                <p>
                    {t("frame")}
                    <span className="bold">{t("mnemonic")}</span>
                    {t("quests")}
                </p>
                <p>
                    <span className="bold">{t("online")}</span>
                    {t("one_year")}
                    <span className="bold">{t("join")}</span>
                </p>
                <p>
                    <span className="bold">{t("complect")}</span>
                    {t("methods")}
                    <span className="bold">{t("«" + t("title") + "» ")}</span>
                    {t("includes")}
                    {
                        second_li.map((item, index) => <li key={index} className="li_dot">{t(item)}</li>)
                    }
                </p>
            </div>
            <button className="register_button" onClick={() => set_show_modal(1)}>{t("registration")}</button>
        </div>
    )
}