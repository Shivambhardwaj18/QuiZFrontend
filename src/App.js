import { Heading } from "@chakra-ui/layout";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
function App() {
  return (
    <>
      <Router>
        <Heading>Header</Heading>
        <Route path="/signup/teacher" component={RegisterPage} />
      </Router>
    </>
  );
}

export default App;
