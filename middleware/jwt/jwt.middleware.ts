import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ENV_VARS } from "../../config/config";
import { ITokenService } from "../../models/interface";
import { Role, User } from "../../models/user";

export class JWTAuthetication implements ITokenService {
  generateToken = (user: User): string => {
    const token = jwt.sign(
      { email: user.email, role: user.role },
      ENV_VARS.jwtSecret || "",
      {
        expiresIn: ENV_VARS.jwtExpireDuration,
      }
    );

    return token;
  };

  verifyToken = (token: string): { email: string; role: Role } => {
    try {
      const tokenData = jwt.verify(token, ENV_VARS.jwtSecret || "");
      return tokenData as { email: string; role: Role };
    } catch (error) {
      throw new Error("Bad token");
    }
  };
}
