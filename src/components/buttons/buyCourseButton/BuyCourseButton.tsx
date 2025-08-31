import type { TBuyButtonProps } from "../../../types/buttons";
import style from "./BuyCourseButton.module.css";

const BuyCourseButton = ({ children, loading, ...rest }: TBuyButtonProps) => {
  return (
    <>
      <button {...rest} disabled={loading} className={style.buyCourseBtn}>{children}</button>
    </>
  );
};

export default BuyCourseButton;
