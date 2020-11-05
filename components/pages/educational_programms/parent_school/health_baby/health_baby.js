import { useState, useEffect } from "react";
import Head from 'next/head';
import $ from "jquery";

const path = "../media/";
const modules = 
[
    ["module_1_1", "module_1_2", "module_1_3", "module_1_4", "module_1_5", ],
    ["module_2_1", "module_2_2", "module_2_3", "module_2_4", ],
    ["module_3_1", "module_3_2", "module_3_3", "module_3_4", "module_3_5", ],
    ["module_4_1", "module_4_2", "module_4_3", "module_4_4", "module_4_5", ],
]

export const Health_baby = ({ t }) =>
{ 
    const [rotate1, set_rotate1] = useState(-1);
    const [rotate2, set_rotate2] = useState(-1);
    const [rotate3, set_rotate3] = useState(-1);
    const [rotate4, set_rotate4] = useState(-1);

    const rotates = [ rotate1, rotate2, rotate3, rotate4];
    const set_rotates = [ set_rotate1, set_rotate2, set_rotate3, set_rotate4];

    useEffect(() => { 
        for ( let i = 1; i < 5; i++ )
        {
            $("#clickme" + i).click(function() {
                $( "#module" + i).slideToggle("slow");
            });
        }
    }, [])

    return (
        <div className="health_baby">
            <Head>
                <title>Курс Здоровий малюк</title>
                <meta name="description" content={"Батьківська школа"} />
            </Head>
            <h2 className="course_info_title">{t("course_info")}</h2>
            <div className="info_block grid">
            <div className="parent_school_text"><p><span className="number">1</span></p>{t("first_info")}</div>
            <div className="parent_school_text"><p><span className="number">2</span></p>{t("second_info")}</div>
            <div className="parent_school_text"><p><span className="number">3</span></p>{t("third_info")}</div>
            </div>
            <div className="modules_block">
            {
                modules.map((item, index) => 
                    <div key={index} className="parent_school_modules">
                        <div className="titles_grid grid">
                            <h3 className="modules_title_1 margin_0">{t("module_" + (index + 1))}</h3>
                            <h4 className="modules_title_2 margin_0">{t("module_" + (index + 1) + "_0")}</h4>
                            <div id={"clickme" + (index + 1)} className={"modules_plus grid " + (rotates[index] ? "" : "rotate")} onClick={() => {
                                set_rotates[index](!rotates[index])}}>
                                <p className="padding_0 margin_0">+</p>
                            </div>
                        </div> 
                        <ul className="padding_0 margin_0" id={"module" + (index + 1)}>
                            {
                                item.map((item2, index2) =>
                                    <li key={index2} className="parent_school_modules_item">{t(item2)}</li>
                                )
                            }
                        </ul>
                    </div>
                )
            }
            </div>
        </div>
    )
}