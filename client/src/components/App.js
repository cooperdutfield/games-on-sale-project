import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import StartPage from "./StartPage";
import GameShow from "./GameShow";
import GameIndex from "./GameIndex";
import SearchPage from "./SearchPage";
import RawgApiTestPage from "./RawgApiTestPage";
import AddNewGameForm from "./AddNewGameForm";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <Route exact path="/games" component={GameIndex} />
        <Route exact path="/games/:id" component={GameShow} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/rawgin" component={RawgApiTestPage} />
        <Route exact path="/games/add/new-title" component={AddNewGameForm} />
      </Switch>
    </Router>
  );
};

export default hot(App);
