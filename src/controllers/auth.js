import UserModel from "../models/userModel.js";
import { generateJWT } from "../utils.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  const response = await UserModel.findOne({
    email: email,
    password: password,
  });
  if (response) {
    const token = generateJWT({ email: response.email, id: response._id });
    res.cookie("token", token);
    return res.send({ message: "Success" });
  }
  res.status(401).send({ message: "Unauthorized" });
};

export const registerController = async (req, res) => {
  const { email, password } = req.body;
  const response = await UserModel.exists({ email: email });
  if (response == null) {
    const response = await UserModel.create({
      email: email,
      password: password,
    });
    console.log("response rehister :>> ", response);
    res.send({ message: "selam" });
  }
};
