import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ChakraProvider, ColorModeProvider, theme } from "@chakra-ui/react";
import Store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={Store}>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: false,
        }}
      ></ColorModeProvider>
      <App />
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
