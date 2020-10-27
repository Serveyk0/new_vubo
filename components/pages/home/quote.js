export const Quote = ({ t }) =>
{
    return (
		<>
		  <div className="quote content">
        <blockquote><p>{t("quote_1")}<span>{t("quote_2")}</span></p></blockquote>
        <p className="author">{t("author")}</p>
      </div>
		</>
	)
}