import AuthButton from "../../components/buttons/authButton/AuthButton";
import LogoutButton from "../../components/buttons/logoutButton/LogoutButton";

import { REGISTER_ROUTE } from "../../constants/routes";
import { LS_IS_AUTHORIZED } from "../../constants/localStorageKeys";

const Header = () => {
  const isAuth = JSON.parse(localStorage.getItem(LS_IS_AUTHORIZED) || "");

  return (
    <header>
      <div>
        <img />
        <p>Learny</p>
      </div>
      <div>
        {!isAuth && <AuthButton href={REGISTER_ROUTE}>Sign Up</AuthButton>}

        {isAuth && <LogoutButton />}
      </div>
    </header>
  );
};

export default Header;
