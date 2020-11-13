import { useState } from "react";
import Head from 'next/head';
import { Registration } from "../../registration";
const path = "../media/";

export const English_for_kids = ({ t }) => {
    const [show_modal, set_show_modal] = useState(false);
    return (
        <div className="english_for_kids">
            <Head>
                <title>Англійська для дітей</title>
                <meta name="description" content={"Англійська для дітей"
                    + " " + t("language")
                    + " " + t("years")
                    + " " + t("online")
                    + " " + t("course")
                    + " " + t("sturtup")
                    + " " + t("words")
                    + " " + t("idea")
                    + " " + t("structure")
                    + " " + t("invite")
                    + " " + t("quote")
                    + " " + t("cherchil")} />
            </Head>
            {show_modal ? <Registration t={t} set_show_modal={set_show_modal} /> : ""}
            <div>
                <h2 className="english_title bold">{t("title")}</h2>
                <img className="left_img" src={path + "exclamation.png"} alt="exclamation" />
                <p className="english_text none_indent margin_paragraph">          {t("languages")}</p>
                <img className="left_img" src={path + "question.png"} alt="question" />
                <p className="english_text none_indent">          {t("years")}</p>
                <p className="english_text">
                    <span className="bold">{t("online")}</span>
                    <span>{t("course")}</span>
                    <span className="bold">{t("sturtup")}</span>
                    <span>{t("words")}</span>
                </p>
                <p className="english_text">          {t("idea")}</p>
                <h3 className="english_text bold structure">          {t("structure")}</h3>
                <div className="course_blocks margin_auto grid">
                    <div className="course_block grid">
                        <p className="parent_school_text margin_right_english"><img src={path + "copybook.png"} alt="copybook"/>{t("copybook")}</p>
                        <p className="parent_school_text margin_right_english"><span className="red_bold">+</span>{t("ten_years")}</p>
                        <p className="parent_school_text margin_right_english essey"><span className="red_bold">+</span>{t("lessons")}</p>
                        <p className="parent_school_text margin_right_english"><img src={path + "dictionary.png"} alt="dictionary" />{t("dictionary")}</p>
                        <p className="parent_school_text margin_right_english"><img src={path + "video.png"} alt="video" />{t("video")}</p>
                        <p className="parent_school_text margin_right_english"><span className="red_bold">+</span>{t("support")}</p>
                    </div>
                    <div className="course">
                        <img className="course" alt="course image" src={path + "course_english.jpg"} />
                    </div>
                    <img className="sun2" alt="sun2" src={path + "sun_3.png"} />
                </div>
                <p className="english_text">          {t("invite")}</p>
                <p className="english_text bold quote_cherchil">{t("quote")}{t("cherchil")}</p>
            </div>
            <button className="red_button" onClick={() => set_show_modal(1)}>{t("registration")}</button>
        </div>
    )
}