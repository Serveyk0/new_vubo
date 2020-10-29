import axios from 'axios'

export const registration = (name, email, password) => {

    return (
        axios
            .get(`http://serveyko.zzz.com.ua/api.portfolio.com/portfolio_list/user_registration.php`,
                {
                    params: {
                        name: name,
                        email: email,
                        password: password
                    }
                },

                {
                    headers: { 'Content-Type': 'application/json' }
                })
            .then((res) => {
                console.log(res);
            })

    )
}