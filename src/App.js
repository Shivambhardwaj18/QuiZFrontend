import { Heading } from "@chakra-ui/layout";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import { authContext } from "./context/authContext";
import HomePage from "./pages/HomePage";
function App() {
  const token = window.localStorage.getItem("qid");

  const [uid, setUid] = useState();
  const userLogin = (id) => {
    setUid(id);
  };
  let routes;
  if (uid || token) {
    routes = (
      <>
        <Switch>
          <Route path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/signup/teacher" component={RegisterPage} />
        <Redirect to="/signup/teacher" />
      </Switch>
    );
  }
  console.log(uid);
  console.log(routes);
  return (
    <>
      <authContext.Provider
        value={{
          id: uid,
          login: userLogin,
        }}
      >
        <Router>
          <Heading>Header</Heading>
          {routes}
        </Router>
      </authContext.Provider>
    </>
  );
}

export default App;
