import type { IButtonProps } from "../../../types/buttons";

const AuthButton = ({ children, href, ...rest }: IButtonProps) => {
  return (
    <a href={href}>
      <button {...rest}>{children}</button>
    </a>
  );
};

export default AuthButton;
