import { useState } from 'react';
import { Registration } from "../registration"
import Link from 'next/link'
import Head from 'next/head';
const path = "../media/";

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
            <div className="first_grid grid">
                <div className="fist_grid_text margin_auto grid">
                    <h2 className="parent_school_title padding_0 margin_0">{t("title")}</h2>
                    <p className="parent_school_text padding_0 margin_auto">{t("school") + " " + t("online")}</p>
                    <button className="red_button" onClick={() => set_show_modal(1)}>{t("registration")}</button>
                </div>
                <div className="first_grid_image grid">
                    <img className="squares" alt="squares" src={path + "squares.png"} />
                    <img className="sun" alt="sun" src={path + "sun.png"} />
                    <div className="wrapper_star grid">
                    <img className="star" alt="star" src={path + "star.png"} />
                    </div>
                </div>
            </div>


            <h3 className="experts_title">{t("baby")}</h3>
            <div className="people_block">
                <div className="people">
                    <div className="people_images">
                        <img className="people_image" src={path + "irina.jpg"} alt={t("irina")} />
                        <img className="star" alt="star" src={path + "star2.png"} />
                    </div>
                    <p className="people_name margin_0">{t("irina")}</p>
                    <p className="people_text margin_0">{t("psycho")}</p>
                    
                </div>
            </div>
            <h3 className="parent_school_course">{t("course")}</h3>
            <div className="course_blocks margin_auto grid">
                <div className="course_block grid">
                    <p className="parent_school_text"><span className="red_bold">14</span>{t("course2")}</p>
                    <p className="parent_school_text"><span className="red_bold">5</span>{t("course3")}</p>
                    <p className="parent_school_text"><span className="red_bold">+</span>{t("course4")}</p>
                    <p className="parent_school_text"><span className="red_bold">+</span>{t("course5")}</p>
                </div>
                <div className="course">
                <img className="course" alt="course image" src={path + "course.jpg"} />
                </div>
                <img className="sun2" alt="sun2" src={path + "sun_2.png"} />
            </div>
            <Link href={"healthy_baby"}><button className="red_button more">{t("more")}</button></Link>
        </div>
    )
}