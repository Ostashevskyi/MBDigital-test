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

export const encryptPassword = async (inputPassword: string, storedPassword: string) => {
  try {
    return await bcrypt.compare(inputPassword, storedPassword);
  } catch (error) {
    console.error("Error during encrypt password:", error);
    return false;
  }
};
