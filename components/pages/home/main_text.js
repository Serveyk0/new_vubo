const path="../media/";
export const Main_text = ({ t }) =>
{
    return (
			<div className="content mainText">
            <h2 className="mainTextTitle">{t("title")}</h2>
              <p className="leftText">
                <span><img className="educationImage" alt="education" src={path + "education.png"} /></span>
                <span>{t("main_text_1")}</span><br />
                <span>{t("main_text_2")}</span><br />
                <span>{t("main_text_3")}</span>
              </p>
              <div className="borderBottom"></div>
			</div>
	  )
  }