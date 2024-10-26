import jwt from "jsonwebtoken";
import { createUser, userDetails, isEmailPresent, changePasswordService } from "../services/user.services";

import { JWT_KEY } from "../configs/configs";

export const signup = async (req, res) => {
  const response = await createUser(req.body);
  return res.json(response);
};

export const login = async (req, res) => {
  const userBody = req.body;
  const user = await userDetails(userBody.email);
  if (user) {
    if (user.validPassword(userBody.password)) {
      const token = jwt.sign(
        { userId: user._id, email: user.email, engagement: user.engagement, isAdmin:user.isAdmin},
        JWT_KEY,
        { 
          expiresIn: "1d"
        }
      );
      return res.json({ isSuccess: true, token: token, email: user.email, engagement: user.engagement });
    } else {
      return res.json({ isSuccess: false, msg: "Invalid credential" });
    }
  } else {
    return res.json({ isSuccess: false, msg: "Invalid credential" });
  }
};

export const verifyEmail = async (req, res) => {
    const response = await isEmailPresent(req.body.email);
    return res.json(response);
}

export const changePassword = async (req, res) => {
    const response = await changePasswordService(req.body);
    return res.json(response);
}