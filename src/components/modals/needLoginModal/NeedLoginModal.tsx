import { createPortal } from "react-dom";

import AuthButton from "../../buttons/authButton/AuthButton";

import { LOGIN_ROUTE } from "../../../constants/routes";

import styles from "./NeedLoginModal.module.css";
import CloseButton from "../../buttons/closeButton/CloseButton";

interface Props {
    onClose: () => void;
}

const NeedLoginModal = ({ onClose }: Props) => {
  return createPortal(
    <div className={styles.needLogin_wrapper} onClick={onClose}>
      <div className={styles.needLogin_container}>
        <CloseButton onClick={onClose} className={styles.needLogin_closeButton}/>
        <p>You need to be authorized to buy course</p>
        <AuthButton href={LOGIN_ROUTE}>Sign In</AuthButton>
      </div>
    </div>,
    document.querySelector("#modals") as HTMLElement
  );
};

export default NeedLoginModal;
