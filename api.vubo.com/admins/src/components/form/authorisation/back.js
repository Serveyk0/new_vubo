import axios from 'axios'

export const authorisation = ( email, password ) => 
{
    return (
        axios
        .get(`http://serveyko.zzz.com.ua/api.portfolio.com/portfolio_list/user_authorisation.php`,
                {
                    params: {
                        email:    email,
                        password: password
                    }
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                })
                .then((res) => {
                    return res.data;
                })
    )
}