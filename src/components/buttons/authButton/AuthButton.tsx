import type { IButtonProps } from "../../../types/buttons";

const AuthButton = ({ children, ...props }: IButtonProps) => {
  return (
    <a href="/auth/register">
      <button type={props.type}>{children}</button>
    </a>
  );
};

export default AuthButton;
