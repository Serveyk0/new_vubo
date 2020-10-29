import axios from 'axios'

export const db_select_all = () => {
    return (
        axios
            .get("http://serveyko.zzz.com.ua/api.portfolio.com/portfolio_list/portfolio.php",
                {
                    params: {
                        crud: 1
                    }
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            )
            .then(res => {
                return(res.data);
            })
    )
}