const path="../media/";
export const Header = ({ t }) =>
{
    return (
        <header className="header grid text_center text_upper">
            <h1 className="header_left">
                <span className="header_top">   {t("open")}      </span><br/>
                <span className="header_bottom">{t("univercity")}</span>
            </h1>
            <img className="header_logo margin_auto" src={path + "black_logo.png"} alt={t("open") + " " + t("univercity") + " " + t("business") + " " + t("education")} />
            <h1 className="header_right">
                <span className="header_top">   {t("business")} </span><br/>
                <span className="header_bottom">{t("education")}</span>
            </h1>
        </header>
    )
}