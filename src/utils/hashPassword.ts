import bcrypt from "bcryptjs";

interface Props {
  saltRounds: number;
  password: string;
}

export const hashPassword = async ({ saltRounds = 10, password }: Props) => {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.error("Error during hashing password:", error);
  }
};
