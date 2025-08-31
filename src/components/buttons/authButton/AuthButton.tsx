import type { IButtonProps } from "../../../types/buttons";
import styles from "./AuthButton.module.css"

const AuthButton = ({ children, href, ...rest }: IButtonProps) => {
  return (
    <a href={href}>
      <button className={styles.authButton} {...rest}>{children}</button>
    </a>
  );
};

export default AuthButton;
