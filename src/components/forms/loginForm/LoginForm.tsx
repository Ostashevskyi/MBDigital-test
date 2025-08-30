import { useNavigate } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";

import { EMAIL_VALIDATION_PATTERN } from "../../../constants/validation";

import FormInput from "../../inputs/FormInput";

import type { TLoginForm } from "../../../types/forms/auth";

import { verifyLogin } from "../../../utils/verifyLogin";

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
      console.error(result.message);
      return;
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Email"
        placeholder="Email"
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
        placeholder="Password"
        error={errors.password?.message}
        {...register("password", {
          required: "Password is required",
        })}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
