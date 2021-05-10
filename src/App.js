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
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import QPage from "./pages/QPage";
import StudentSignup from "./pages/StudentSignup";
import Footer from "./components/Footer";
import TeacherScreen from "./pages/TeacherScreen";
function App() {
  const token = window.localStorage.getItem("qid");

  const [uid, setUid] = useState();
  const userLogin = (id) => {
    setUid(id);
  };
  const userLogout = () => {
    setUid(null);
    localStorage.removeItem("qid");
  };

  let routes;
  if (uid || token) {
    routes = (
      <>
        <Route path="/teacher/:name" component={TeacherScreen} />
      </>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/signup/teacher" component={RegisterPage} />
        <Route path="/signup/student" component={StudentSignup} />
        <Route path="/signup" component={QPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    );
  }
  return (
    <>
      <authContext.Provider
        value={{
          id: uid,
          login: userLogin,
          logout: userLogout,
        }}
      >
        <Router>
          <Header />
          {routes}
          <Footer />
        </Router>
      </authContext.Provider>
    </>
  );
}

export default App;
