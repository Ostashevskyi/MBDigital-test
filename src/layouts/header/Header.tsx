import AuthButton from "../../components/buttons/authButton/AuthButton";
import LogoutButton from "../../components/buttons/logoutButton/LogoutButton";

import { REGISTER_ROUTE } from "../../constants/routes";
import { LS_IS_AUTHORIZED } from "../../constants/localStorageKeys";

import Logo from "../../assets/logo.webp"

import styles from "./Header.module.css"

const Header = () => {
  const isAuth = JSON.parse(localStorage.getItem(LS_IS_AUTHORIZED) || "");

  return (
    <header className={styles.header_wrapper}>
      <div className={styles.header_logoContainer}>
        <img src={Logo} alt="Orange open book" />
        <p>Learny</p>
      </div>
      <div className={styles.header_controlsButtons}>
        {!isAuth && <AuthButton href={REGISTER_ROUTE}>Sign Up</AuthButton>}

        {isAuth && <LogoutButton />}
      </div>
    </header>
  );
};

export default Header;
