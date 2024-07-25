import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const { JWT_SECRET } = process.env;

export const generateToken = (playload, expiresIn = "10d") => {
  console.log(process.env);
  return jwt.sign(playload, process.env.JWT_SECRET, { expiresIn: expiresIn });
};
