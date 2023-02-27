import { AuthRoutes } from "../auth.routes";
import express, { Request, Response, NextFunction } from "express";
import { IAuthService } from "../../../../models/services";

describe("AuthRoutes", () => {
  let authRoutes: AuthRoutes;
  let authService: IAuthService;
  let req: Request;
  let res: Response;
  let next: NextFunction;
  let router: express.Router;

  beforeEach(() => {
    req = {} as Request;
    res = {
      send: jest.fn(),
    } as unknown as Response;
    next = jest.fn();
    authService = {
      login: jest.fn(),
      register: jest.fn(),
    };
    authRoutes = new AuthRoutes(authService);
    authRoutes.makeRoutes();
    router = authRoutes.getRouter();
  });

  it("should call login method on authService when /login endpoint is called", async () => {
    const loginHandler = router.stack.find(
      (layer) => layer.route && layer.route.path === "/login"
    );
    expect(loginHandler).toBeDefined();

    const login = loginHandler!.route!.stack[0].handle;
    await login(req, res, next);

    expect(authService.login).toHaveBeenCalledWith(req, res);
  });

  it("should call register method on authService when /register endpoint is called", async () => {
    const registerHandler = router.stack.find(
      (layer) => layer.route && layer.route.path === "/register"
    );
    expect(registerHandler).toBeDefined();

    const register = registerHandler!.route!.stack[0].handle;
    await register(req, res, next);

    expect(authService.register).toHaveBeenCalledWith(req, res);
  });

  it("should call next with error if authService.login throws", async () => {
    const error = new Error("Test error");
    // @ts-ignore
    authService.login.mockImplementation(() => {
      throw error;
    });

    const loginHandler = router.stack.find(
      (layer) => layer.route && layer.route.path === "/login"
    );
    expect(loginHandler).toBeDefined();

    const login = loginHandler!.route!.stack[0].handle;
    await login(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
  });

  it("should call next with error if authService.register throws", async () => {
    const error = new Error("Test error");
    // @ts-ignore
    authService.register.mockImplementation(() => {
      throw error;
    });

    const registerHandler = router.stack.find(
      (layer) => layer.route && layer.route.path === "/register"
    );
    expect(registerHandler).toBeDefined();

    const register = registerHandler!.route!.stack[0].handle;
    await register(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
  });
});
