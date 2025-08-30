import { useForm, type SubmitHandler } from "react-hook-form";

import {
  EMAIL_VALIDATION_PATTERN,
  PASSWORD_MIN_LENGTH,
  PASSWORD_VALIDATION_PATTERN,
} from "../../../constants/validation";

import FormInput from "../../inputs/FormInput";

import type { IRegisterFormProps } from "../../../types/forms/auth";
import { LS_SAVE_USER } from "../../../constants/localStorageKeys";
import { hashPassword } from "../../../utils/hashPassword";
import { useNavigate } from "react-router";
import { LOGIN_ROUTE } from "../../../constants/routes";
import styles from "../loginForm/LoginForm.module.css";
import AuthButton from "../../buttons/authButton/AuthButton";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRegisterFormProps>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IRegisterFormProps> = async (data) => {
    const hashedPassword = await hashPassword({
      password: data.password,
      saltRounds: 10,
    });

    localStorage.setItem(
      LS_SAVE_USER,
      JSON.stringify({ email: data.email, password: hashedPassword })
    );

    const user = localStorage.getItem(LS_SAVE_USER);

    if (user) {
      navigate(LOGIN_ROUTE);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm_wrapper}>
      <h2 className={styles.authForm_title}>Register</h2>
      <FormInput
        label="Email"
        placeholder="Enter your email..."
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: EMAIL_VALIDATION_PATTERN,
            message: "Invalid email address",
          },
        })}
        error={errors.email?.message}
      />
      <FormInput
        label="Password"
        placeholder="Enter your password..."
        {...register("password", {
          required: "Password is required",
          pattern: {
            value: PASSWORD_VALIDATION_PATTERN,
            message:
              "Password must contain 1 uppercase, 1 lowercase, and 1 special character",
          },
          minLength: {
            value: PASSWORD_MIN_LENGTH,
            message: "Password should be at least 6 characters long"
          },
        })}
        error={errors.password?.message}
      />
      <FormInput
        label="Confirm Password"
        placeholder="Confirm your password..."
        {...register("confirm_password", {
          required: "Confirm password is required",
          validate: (value: string) => {
            if (watch("password") !== value) {
              return "Password doesn't match";
            }
          },
        })}
        error={errors.confirm_password?.message}
      />
      <AuthButton type="submit">Submit</AuthButton>
      <p className={styles.authForm_footer}>
        Already have an account? <a href={LOGIN_ROUTE}>Sign in</a>
      </p>
    </form>
  );
};

export default RegisterForm;
