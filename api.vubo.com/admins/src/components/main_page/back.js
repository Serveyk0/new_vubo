import axios from 'axios';

export const addProject = (title, description, href) => {
    return axios
        .get('http://serveyko.zzz.com.ua/api.portfolio.com/portfolio_list/portfolio.php',
            {
                params: {
                    crud: 2,
                    title: title,
                    description: description,
                    href: href
                }
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then((res) => {
            return res.data;
        })
}



export const add_image = (image, p_id) => {
    let formData = new FormData();
    formData.append('file', image);
    axios
        .post('http://serveyko.zzz.com.ua/api.portfolio.com/portfolio_list/portfolio.php', formData,
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(res => {
            add_image_project(res.data, p_id)
            
        })
}

const add_image_project = (name, project_id) => {
    return axios
        .get('http://serveyko.zzz.com.ua/api.portfolio.com/portfolio_list/portfolio.php',
            {
                params: {
                    crud: 6,
                    project_id: project_id,
                    image_name: name
                }
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
}