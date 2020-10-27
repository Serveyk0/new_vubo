import { useState } from 'react';
import Link from 'next/link'
import { main } from './constants';

export const Menu = ({ t }) => {
    const [show_menu, set_show_menu] = useState(0);
    const [click_submenu, set_click_submenu] = useState(-1);
    const [click_second_submenu, set_click_second_submenu] = useState(-1);
    console.log(show_menu);
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
                                    
                                        <div className="menu_list_item_href_wrapper grid">
                                        <Link className="menu_list_item_href" href={item.name === "main" ? "/" : item.name} onClick={() => set_show_menu(0)}><span onClick={() => set_show_menu(0)}>{t(item.name)}</span></Link>
                                        {item.hasOwnProperty("sublist") ? <img className="down_arrow" alt={t(item.name)} src="./media/down.png" onClick={() => { set_click_submenu(click_submenu === index ? -1 : index) }} /> : ""}
                                        </div>
                                    {
                                        item.hasOwnProperty("sublist") ?
                                            <div className={"grid_li first_sublist " + (click_submenu === index ? "submenu_block" : "")}>
                                                <ul className="menu_sublist grid">
                                                    {item.sublist.map((item2, index2) =>
                                                        <div className="grid_li" key={index2}>
                                                            <li className="menu_list_item">
                                                                
                                                                <div className="menu_list_item_href_wrapper grid">
                                                                <Link className="menu_list_item_href" href={item2.name} onClick={() => set_show_menu(0)}><span onClick={() => set_show_menu(0)}>{t(item2.name)}</span></Link>
                                                                    {item2.hasOwnProperty("sublist") ? <img className="down_arrow" alt={t(item.name)} src="./media/down.png" onClick={() => { set_click_second_submenu(click_second_submenu === index2 ? -1 : index2) }} /> : ""}
                                                                    </div>
                                                                {
                                                                    item2.hasOwnProperty("sublist") ?
                                                                        <ul className={"menu_sublist third_sublist " + (click_second_submenu === index2 ? "submenu_block" : "")}>
                                                                            {item2.sublist.map((item3, index3) =>
                                                                                <li className="menu_list_item" key={index3}>
                                                                                    
                                                                <div className="menu_list_item_href_wrapper grid">
                                                                <Link className="menu_list_item_href" href={item3.name} onClick={() => set_show_menu(0)}><span onClick={() => set_show_menu(0)}>{t(item3.name)}</span></Link>
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