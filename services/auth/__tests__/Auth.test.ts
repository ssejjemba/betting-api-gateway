import { AuthService } from "../Auth";
import { IAuthProvider } from "../../../providers/models/providers";
import { Request, Response } from "express";

describe("AuthService", () => {
  let authService: AuthService;
  let authProvider: IAuthProvider;

  beforeEach(() => {
    authProvider = {
      login: jest.fn(),
      register: jest.fn(),
    };
    authService = new AuthService(authProvider);
  });

  it("should call login method on authProvider", () => {
    const req = {} as Request<any, any, any>;
    const res = {} as Response<any>;

    authService.login(req, res);

    expect(authProvider.login).toHaveBeenCalledWith(req, res);
  });

  it("should call register method on authProvider", () => {
    const req = {} as Request<any, any, any>;
    const res = {} as Response<any>;

    authService.register(req, res);

    expect(authProvider.register).toHaveBeenCalledWith(req, res);
  });
});
