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
            <div className={"burger " + (show_menu ? "active" : "")} onClick={() => set_show_menu(!show_menu)} />
            <menu className={"menu margin_0 padding_0 grid text_center " + (show_menu ? "open" : "")}>
                <ul className="menu_list grid">
                    {
                        main.map((item, index) =>
                            <div className="grid_li grid" key={index}>
                                <li className="menu_list_item grid">
                                    <Link className="menu_list_item_href" href={item.name === "main" ? "/" : item.name} onClick={() => set_show_menu(0)}>
                                        <p onClick={() => set_show_menu(0)}>{t(item.name)}</p>
                                    </Link>
                                    {
                                        item.hasOwnProperty("sublist") ?
                                            <div className="grid_li">
                                                <ul className={"menu_sublist " + (click_submenu === index ? "submenu_block" : "")}>
                                                    {item.sublist.map((item2, index2) =>
                                                        <div className="grid_li" key={index2}>
                                                            <li className="menu_list_item">
                                                                <Link className="menu_list_item_href" href={item2.name} onClick={() => set_show_menu(0)}>
                                                                    <p onClick={() => set_show_menu(0)}>{t(item2.name)}</p>
                                                                </Link>
                                                                {
                                                                    item2.hasOwnProperty("sublist") ?
                                                                        <ul className={"menu_sublist " + (click_second_submenu === index2 ? "submenu_block" : "")}>
                                                                            {item2.sublist.map((item3, index3) =>
                                                                                <li className="menu_list_item" key={index3}>
                                                                                    <Link className="menu_list_item_href" href={item3.name} onClick={() => set_show_menu(0)}>
                                                                                        <p onClick={() => set_show_menu(0)}>{t(item3.name)}</p>
                                                                                    </Link>
                                                                                </li>
                                                                            )}
                                                                        </ul>
                                                                        : ""
                                                                }
                                                            </li>
                                                            {item2.hasOwnProperty("sublist") ? <img className="down_arrow" alt={t(item.name)} src="./media/down.png" onClick={() => { set_click_second_submenu(click_second_submenu === index2 ? -1 : index2) }} /> : ""}
                                                        </div>
                                                    )}
                                                </ul>
                                            </div>
                                            : ""
                                    }
                                </li>
                                {item.hasOwnProperty("sublist") ? <img className="down_arrow" alt={t(item.name)} src="./media/down.png" onClick={() => { set_click_submenu(click_submenu === index ? -1 : index) }} /> : ""}
                            </div>
                        )
                    }
                </ul>
            </menu>
        </div>
    )
}