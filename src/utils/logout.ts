import type { NavigateFunction } from "react-router";

import { REGISTER_ROUTE } from "../constants/routes";
import { LS_IS_AUTHORIZED, LS_SAVE_USER } from "../constants/localStorageKeys";

export const logout = (navigate: NavigateFunction) => {
  const isAuth = localStorage.getItem(LS_IS_AUTHORIZED);
  const user = localStorage.getItem(LS_SAVE_USER);

  if (isAuth && user) {
    localStorage.removeItem(LS_SAVE_USER);
    localStorage.setItem(LS_IS_AUTHORIZED, "false");

    navigate(REGISTER_ROUTE);
  }
};
