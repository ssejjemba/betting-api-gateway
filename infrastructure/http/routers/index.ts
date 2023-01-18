import express from "express";
import { jwtValidationMiddleware } from "../middlewares/jwt-validation-middleware";
import { IAuthService } from "../../../app/auth/interfaces/IAuthService";
import { IAuthenticateUseCase } from "../../../app/auth/interfaces/IAuthenticateUseCase";
import { ISignInUseCase } from "../../../app/auth/interfaces/ISignInUseCase";
import { ISignUpUseCase } from "../../../app/auth/interfaces/ISignUpUseCase";

const router = express.Router();

export class Router {
  private authService: IAuthService;
  private authUseCases: {
    authenticateUseCase: IAuthenticateUseCase;
    signInUseCase: ISignInUseCase;
    signUpUseCase: ISignUpUseCase;
  };

  constructor(
    authService: IAuthService,
    authUseCases: {
      authenticateUseCase: IAuthenticateUseCase;
      signInUseCase: ISignInUseCase;
      signUpUseCase: ISignUpUseCase;
    }
  ) {
    this.authService = authService;
    this.authUseCases = authUseCases;
  }

  createRoutes() {
    router.post("/api/auth/signup", async (req, res) => {
      const user = req.body;
      const signUpResponse = await this.authUseCases.signUpUseCase.execute(
        user
      );
      res.send(signUpResponse);
    });

    router.post("/api/auth/signin", async (req, res) => {
      const email = req.body.email;
      const password = req.body.password;
      const signInResponse = await this.authUseCases.signInUseCase.execute(
        email,
        password
      );
      res.send(signInResponse);
    });
  }
}
