import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ENV_VARS } from "../../config/config";
import { ITokenService } from "../../models/services";
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

  isAutheticated = (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.headers.authorization) {
        return res
          .status(401)
          .json({ error: "No credentials sent!", code: 401 });
      }
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res
          .status(401)
          .json({ error: "Bad authorization details", code: 401 });
      }
      this.verifyToken(token);
      next();
    } catch (error) {
      return res
        .status(401)
        .json({ error: "Bad authorization details", code: 401 });
    }
  };

  isAdminAuthorized = (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.headers.authorization) {
        return res.status(401).json({ error: "No credentials sent!" });
      }
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res
          .status(401)
          .json({ error: "Bad authorization details", code: 401 });
      }
      const data = this.verifyToken(token);
      if (data.role !== Role.ADMIN) {
        return res
          .status(403)
          .json({ error: "User doesn't have required permissions", code: 403 });
      }

      next();
    } catch (error) {
      return res
        .status(401)
        .json({ error: "Bad authorization details", code: 401 });
    }
  };
}
