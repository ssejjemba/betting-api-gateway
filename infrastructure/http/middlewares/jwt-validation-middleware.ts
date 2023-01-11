import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export interface IGetUserAuthInfoRequest extends Request {
  user: string | JwtPayload; // or any other type
}

const jwtSecret = process.env.JWT_SECRET as string;

export const jwtValidationMiddleware = (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send({ message: "No token provided." });

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send({ message: "Invalid token." });
  }
};
