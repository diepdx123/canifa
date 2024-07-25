import User from "../models/User.js";
import { generateToken } from "../utils/jwt.js";
import { comparePassword, hassPassword } from "../utils/password.js";

export const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "email ton tai",
      });
    }

    const hassPass = hassPassword(password);
    if (!hassPass) {
      return res.status(400).json({
        message: " loi ma hoa mat khau",
      });
    }

    const user = await User.create({
      email,
      password: hassPass,
    });
    userExists.password = undefined;

    return res.status(201).json({
      success: true,
      user,
      message: "dang ki thanh cong!",
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    /**
     * 1. kiem tra email ton tai k?
     * 2.giai ma pw
     * 3. generate token
     * 4. thong bao
     */
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(404).json({
        message: "email chua dang ki",
      });
    }

    const isMath = comparePassword(password, userExists.password);
    if (!isMath) {
      return res.status(400).json({
        message: "mat khau khong dung!",
      });
    }

    //ma hoa id nguoi dung
    const token = generateToken({ _id: userExists._id }, "10d");
    userExists.password = undefined;

    return res.status(200).json({
      success: true,
      user: userExists,
      accessToken: token,
      message: "dang nhap thanh cong",
    });
  } catch (error) {
    next(error);
  }
};
