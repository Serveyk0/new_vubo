import { useState, useEffect } from 'react';
import Link from 'next/link'
import { main } from './constants';
const path="../media/";

export const Menu = ({ t }) => {
    const [show_menu, set_show_menu] = useState(0);
    const [click_submenu, set_click_submenu] = useState(-1);
    const [click_second_submenu, set_click_second_submenu] = useState(-1);
    const [active_first_menu, set_active_first_menu] = useState(0);
    const [active_second_menu, set_active_second_menu] = useState(-1);
    const [active_third_menu, set_active_third_menu] = useState(-1);

    useEffect(() => {
        active_index();
    },[])

    const click_menu = ( index_1, index_2, index_3 ) =>
    {
        set_active_first_menu(index_1);
        set_active_second_menu(index_2);
        set_active_third_menu(index_3);
        set_show_menu(!show_menu);
        document.body.style.overflow = ( document.body.style.overflow === "hidden" ? "auto" : "hidden")
    }

    const active_index = ( ) =>
    {
        const location = window.location.href.split("/")[3];
        for ( let i = 0; i < main.length; i++)
        {
            if (main[i].name === location)
            {
                set_active_first_menu(i);
                break;
            }
            else
            {
                if ( main[i].hasOwnProperty("sublist"))
                {
                    for( let j = 0; j < main[i].sublist.length; j++ )
                    {
                        if (main[i].sublist[j].name === location)
                        {
                            set_active_first_menu(i);
                            set_active_second_menu(j);
                            break;
                        }
                        else
                {
                    if ( main[i].sublist[j].hasOwnProperty("sublist"))
                    {
                        for( let k = 0; k < main[i].sublist[j].sublist.length; k++ )
                        {
                            if (main[i].sublist[j].sublist[k].name === location)
                            {
                                set_active_first_menu(i);
                                set_active_second_menu(j);
                                set_active_third_menu(k);
                                break;
                            }
                        }
                        break;
                    }
                }
                    }
                }
            }
        }
    }

    return (
        <div className="menu_wrapper">
        <div className={"burger " + (show_menu ? "active" : "")} onClick={() => { set_show_menu(!show_menu); 
            document.body.style.overflow = ( document.body.style.overflow === "hidden" ? "auto" : "hidden")}} />
            <menu className={"menu margin_0 padding_0 grid text_center " + (show_menu ? "open" : "")}>
                <ul className="menu_list grid">
                    {
                        main.map((item, index) =>
                            <div className="grid_li grid" key={index}>
                                <li className="menu_list_item grid">
                                    
                                        <div className="menu_list_item_href_wrapper first_sub grid ">
                                        <Link className="menu_list_item_href" href={item.name === "main" ? "/" : item.name} onClick={() => set_show_menu(0)}><span className={(index === active_first_menu ? "active_menu" : "")} onClick={() => click_menu(index, -1, -1)}>{t(item.name)}</span></Link>
                                        {item.hasOwnProperty("sublist") ? <img className="down_arrow" alt={t(item.name)} src={path + "down.png"} onClick={() => { set_click_submenu(click_submenu === index ? -1 : index) }} /> : ""}
                                        </div>
                                    {
                                        item.hasOwnProperty("sublist") ?
                                            <div className={"grid_li first_sublist " + (click_submenu === index ? "submenu_block" : "")}>
                                                <ul className="menu_sublist grid">
                                                    {item.sublist.map((item2, index2) =>
                                                        <div className="grid_li" key={index2}>
                                                            <li className="menu_list_item second_sub">
                                                                
                                                                <div className="menu_list_item_href_wrapper second_sub_how grid ">
                                                                <Link className="menu_list_item_href" href={item2.name} onClick={() => set_show_menu(0)}><span className={(index === active_first_menu && index2 === active_second_menu ? "active_menu" : "")} onClick={() => click_menu(index, index2, -1)}>{t(item2.name)}</span></Link>
                                                                    {item2.hasOwnProperty("sublist") ? <img className="down_arrow" alt={t(item.name)} src={ path + "down.png" } onClick={() => { set_click_second_submenu(click_second_submenu === index2 ? -1 : index2) }} /> : ""}
                                                                    </div>
                                                                {
                                                                    item2.hasOwnProperty("sublist") ?
                                                                        <ul className={"menu_sublist third_sublist " + (click_second_submenu === index2 ? "submenu_block" : "")}>
                                                                            {item2.sublist.map((item3, index3) =>
                                                                                <li className="menu_list_item" key={index3}>
                                                                                    
                                                                <div className="menu_list_item_href_wrapper third_sub_how grid ">
                                                                <Link className="menu_list_item_href" href={item3.name} onClick={() => set_show_menu(0)}><span className={(index === active_first_menu && index2 === active_second_menu && index3 === active_third_menu ? "active_menu" : "")} onClick={() => click_menu(index, index2, index3)}>{t(item3.name)}</span></Link>
                                                                    </div>
                                                                                </li>
                                                                            )}
                                                                        </ul>
                                                                        : ""
                                                                }
                                                            </li>
                                                        </div>
                                                    )}
                                                </ul>
                                            </div>
                                            : ""
                                    }
                                </li>
                            </div>
                        )
                    }
                </ul>
            </menu>
        </div>
    )
}