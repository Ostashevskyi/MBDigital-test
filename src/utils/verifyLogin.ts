import { LS_SAVE_USER } from "../constants/localStorageKeys";

import { encryptPassword } from "./hashPassword";

import type { TLoginForm } from "../types/forms/auth";

interface Props {
  inputEmail: string;
  inputPassword: string;
}

interface VerifyLoginReturn {
  status: boolean;
  message?: string;
}

export const verifyLogin = async ({
  inputEmail,
  inputPassword,
}: Props): Promise<VerifyLoginReturn> => {
  try {
    const user: TLoginForm = JSON.parse(
      localStorage.getItem(LS_SAVE_USER) || "{}"
    );

    if (!user?.email || !user?.password) {
      return { status: false, message: "No user registered with this email" };
    }

    if (inputEmail !== user.email) {
      return { status: false, message: "Wrong email" };
    }

    const isPasswordCorrect = await encryptPassword(inputPassword, user.password);

    if (!isPasswordCorrect) {
      return { status: false, message: "Wrong password" };
    }

    return { status: true };
  } catch (error) {
    console.error("Error during login verification:", error);
    return { status: false, message: "Something went wrong" };
  }
};
