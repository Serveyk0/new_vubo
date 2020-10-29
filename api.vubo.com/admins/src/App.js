import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Switch, Route } from 'react-router-dom'
import Form from './components/form';
import MainPage from './components/main_page';

export const App = () => {

  const [check_auth, set_check_auth] = useState(0);
  useEffect(() => {
    return (
      axios
        .get("http://serveyko.zzz.com.ua/api.portfolio.com/portfolio_list/database_query.php",
          {
            headers: { 'Content-Type': 'application/json' }
          }
        )
        .then(res => {
          console.log(res);
        })
    )
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" children={<Form check_auth={check_auth} set_check_auth={set_check_auth}/>} />
        <Route exact path="/main_page" children={<MainPage check_auth={check_auth}/>} />
      </Switch>
    </div>
  );
}

