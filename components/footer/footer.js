const facebook = "facebook";
const telegram = "telegram";
const instagram = "instagram";
const mail = "kariazantseva@gmail.com";
const phone = "068-000-11-42";

const hrefs =
    [
        {
            href: "https://www.instagram.com/19.19.2000/?hl=el",
            text: facebook,
            class: "fa-facebook"
        },
        {
            href: "https://www.instagram.com/19.19.2000/?hl=el",
            text: telegram,
            class: "fa-telegram"
        },
        {
            href: "https://www.instagram.com/19.19.2000/?hl=el",
            text: instagram,
            class: "fa-instagram"
        },
    ]

export const Footer = ({ t }) => {
    return (
        <footer className="footer grid text_center">
            <h2 className="footer_left_univercity">{t("univercity") + " "}<span className="footer_left_be text_center">{t("business") + " " + t("education")}</span></h2>
            <div className="footer_center grid">
                <p className="grid"><span>{t("street")}</span>{t("city")}</p>
                <a href={"tel:" + phone}>{phone}</a>
                <a className="footer_center_mail" href={"mailto:" + mail}>{mail}</a>
            </div>
            <div className="footer_right grid">
                {hrefs.map((item, index) => <a key={index} href={item.href} className={"footer_links " + item.class}><p className="footer_links_text margin_0">{item.text}</p></a>)}
            </div>
            <p className="footer_company_name">{t("footer-company-name")}</p>
        </footer>
    )
}