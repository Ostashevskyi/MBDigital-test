export interface IRegisterFormProps {
    email: string;
    password: string;
    confirm_password: string;
}

export type TLoginForm = Pick<IRegisterFormProps, "email" | "password">;