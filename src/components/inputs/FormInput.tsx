import type { IInputProps } from "../../types/inputs";

const FormInput = ({
  type,
  placeholder,
  label,
  error,
  ...rest
}: IInputProps) => {
  return (
    <div>
      {!!label?.length && <label htmlFor="form-input">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className=""
        name="form-input"
        {...rest}
      />
      {!!error?.length && <p>{error}</p>}
    </div>
  );
};

export default FormInput;
