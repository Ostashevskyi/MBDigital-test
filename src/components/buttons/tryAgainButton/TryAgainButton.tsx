import type { IDefaultButtonProps } from "../../../types/buttons"
import styles from "./TryAgainButton.module.css"

const TryAgainButton = ({ children, ...rest }: IDefaultButtonProps) => {
  return (
    <button {...rest} className={styles.tryAgainButton}>{children}</button>
  )
}

export default TryAgainButton