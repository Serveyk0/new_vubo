import React, { useState } from 'react'
import './main_page.sass'
import SelectAll from './select_all'
import { addProject, add_image } from './back'
import { Redirect } from 'react-router-dom'

export const MainPage = ( props ) =>
{
    const { check_auth } = props;
    const [title, set_title] = useState("");
    const [description, set_description] = useState("");
    const [href, set_href] = useState("");
    const [all_project, set_all_project] = useState(null);
    const [image, set_image] = useState(null);
    const onChange = ( event, set_field ) => 
    set_field(event.target.value);

    const select_file = ( event ) => 
    {
        set_image(event.target.files);
    }

    const insert_project = (e) => {
        e.preventDefault()
        addProject(title, description, href)
        .then((res) => {
            for ( let i = 0; i < image.length; i++ )
            {
                setTimeout(add_image, 1000, image[i], res);
            }
        })
    }
    if (check_auth)
    {
    return (
        <div className="main_page">
            <SelectAll all_project={all_project} set_all_project={set_all_project} />
            <form onSubmit={insert_project}>
                <input type="text" placeholder="title" onChange={ (e) => onChange(e, set_title)}/>
                <input type="text" placeholder="description" onChange={ (e) => onChange(e, set_description)} />
                <input type="text" placeholder="href" onChange={ (e) => onChange(e, set_href)} />
                <input
                                    type="file"
                                    className="form-control"
                                    multiple="multiple"
                                    id="availability"
                                    name="product_image"
                                    onChange={ (e) =>  select_file(e)}
                                />
                                <input type="submit" />
            </form>
        </div>
    )
    }
    else {
        return <Redirect to='/' />
    }
}