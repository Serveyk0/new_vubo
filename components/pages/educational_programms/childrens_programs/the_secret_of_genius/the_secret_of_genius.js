const li = ["memory", "concentration", "languages", "assimilation", "sociability", "space", "foreign"]
const second_li = ["glove", "left_hand", "instruction", "notebook", "tracker", "designer"]

export const The_secret_of_genius = ({ t }) =>
{
    return (
        <div className="the_secret_of_genius">
            <h2 className="the_secret_of_genius_title">{t("title")}</h2>
            <span className="about_methodology">{t("about")}</span>
            <div className="the_secret_of_genius_text">
                <p>
                    <span className="bold italic">{"«" +t("title") +"«"}</span>
                    {t("unique")}
                    <span className="bold">{t("author_methodology")}</span>
                    {t("implementation")}
                    <span className="bold">{t("left_hand")}</span>
                    {t("tesla")}
                </p>
                <p>
                    <span className="bold italic">{t("program") +"«" +t("title") +"«"}</span>
                    {t("rests")}
                    <span className="bold">{t("neuropsychology")}</span>
                    {t("connections")}
                    <span className="bold">{t("attention")}</span>
                    {t("10_percent")}
                </p>
                <p>
                    <span className="bold">{t("developing")}</span>
                    {
                        li.map((item, index) => <li key={index} className="bold li_dot">{t(item)}}</li>)
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
                    <span className="bold">{t("«" +t("title") +"«")}</span>
                    {t("includes")}
                    <span className="bold">{t("developing")}</span>
                    {
                        second_li.map((item, index) => <li key={index} className="li_dot">{t(item)}}</li>)
                    }
                </p>
            </div>
        </div>
    )
}