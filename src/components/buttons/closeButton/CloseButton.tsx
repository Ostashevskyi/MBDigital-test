import styles from "./CloseButton.module.css"
import type { IButtonProps } from "../../../types/buttons";

const CloseButton = ({ ...props }: IButtonProps) => {
  return (
    <button className={styles.closeButton} onClick={props.onClick}>
      ✖
    </button>
  );
};

export default CloseButton;
