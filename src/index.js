import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  HttpLink,
} from "@apollo/client";
import { ChakraProvider, ColorModeProvider, theme } from "@chakra-ui/react";
import Store from "./store";
import { setContext } from "@apollo/client/link/context";
import App from "./App";

const client = new ApolloClient({
  uri: "https://app-quizees.herokuapp.com/",
  cache: new InMemoryCache(),
  headers: {
    authorization: "Bearer " + window.localStorage.getItem("qid") || "",
  },
});

ReactDOM.render(
  <Provider store={Store}>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: false,
        }}
      ></ColorModeProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
