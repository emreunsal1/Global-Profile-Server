import jwt from "jsonwebtoken";

export const generateJWT = (data) => {
  var token = jwt.sign(data, "shhhhh");
  return token;
};
