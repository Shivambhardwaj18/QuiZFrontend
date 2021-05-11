import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ChakraProvider, ColorModeProvider, theme } from "@chakra-ui/react";
import App from "./App";

const client = new ApolloClient({
  uri: "https://app-quizees.herokuapp.com/",
  cache: new InMemoryCache(),
  headers: {
    authorization: "Bearer " + window.localStorage.getItem("qid") || "",
  },
});

ReactDOM.render(
  <ChakraProvider resetCSS theme={theme}>
    <ColorModeProvider
      options={{
        useSystemColorMode: false,
      }}
    ></ColorModeProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
