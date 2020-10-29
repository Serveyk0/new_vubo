import React, { useEffect } from 'react'
import './select_all.sass'
import { db_select_all } from './back'
import Slider from 'infinite-react-carousel';

export const SelectAll = (props) => {
    const { all_project, set_all_project } = props;
    useEffect(() => {
        db_select_all()
            .then(res => {
                set_all_project(res)
            });
    }, [])
    return (
        <div className="select_all">
            {
                all_project !== null && (typeof all_project) !== 'undefined' ?
                    all_project.map((item, index) => {
                        console.log(item);
                        return (
                            <div key={index} className="project_item">
                                <div className="project_image">
                                    {console.log(item.images)}
                                <Slider dots>
                                    {
                                        item.images !== null ?
                                        item.images.split(";").map((image_item, image_index) => {
                                            return (
                                                <img alt={item.title} key={image_index} src={"/images/" + image_item} />
                                            )
                                        }) : ""
                                    }
                                    </Slider>
                                </div>
                                <a href={item.href}>
                                    <span>{item.title}</span>
                                    <span>{item.description}</span>
                                </a>
                            </div>
                        )
                    })
                    : ""
            }
        </div>
    )
}