import { useNavigate } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";

import { EMAIL_VALIDATION_PATTERN } from "../../../constants/validation";

import FormInput from "../../inputs/FormInput";

import type { TLoginForm } from "../../../types/forms/auth";

import { verifyLogin } from "../../../utils/verifyLogin";
import { LS_IS_AUTHORIZED } from "../../../constants/localStorageKeys";
import styles from "./LoginForm.module.css";
import AuthButton from "../../buttons/authButton/AuthButton";
import { REGISTER_ROUTE } from "../../../constants/routes";
import { toast } from "sonner";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TLoginForm> = async (data) => {
    const result = await verifyLogin({
      inputEmail: data.email,
      inputPassword: data.password,
    });

    if (!result.status) {
      toast.error(result.message)
      console.error(result.message);
      return;
    }

    localStorage.setItem(LS_IS_AUTHORIZED, "true");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm_wrapper}>
      <h2 className={styles.authForm_title}>Login</h2>

      <FormInput
        label="Email"
        placeholder="Enter your email..."
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: EMAIL_VALIDATION_PATTERN,
            message: "Invalid email address",
          },
        })}
      />
      <FormInput
        label="Password"
        placeholder="Enter your password..."
        error={errors.password?.message}
        {...register("password", {
          required: "Password is required",
        })}
      />

      <AuthButton type="submit">Submit</AuthButton>
      <p className={styles.authForm_footer}>
        Don’t have an account? <a href={REGISTER_ROUTE}>Sign up</a>
      </p>
    </form>
  );
};

export default LoginForm;
