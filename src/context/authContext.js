import { createContext } from "react";

export const authContext = createContext({
  id: "",
  login: () => {},
  logout: () => {},
});
