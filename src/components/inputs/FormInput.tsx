import type { IInputProps } from "../../types/inputs";
import styles from "./FormInput.module.css"

const FormInput = ({
  type,
  placeholder,
  label,
  error,
  ...rest
}: IInputProps) => {
  return (
    <div className={styles.authForm_group}>
      {!!label?.length && <label htmlFor="form-input">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className={styles.authForm_input}
        name="form-input"
        {...rest}
      />
      {!!error?.length && <p className={styles.authForm_error}>{error}</p>}
    </div>
  );
};

export default FormInput;
