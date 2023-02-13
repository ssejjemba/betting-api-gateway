// @ts-ignore
import Router from "express/lib/router";
import { ENV_VARS } from "../../../../config/config";
import { AuthRoutes } from "../../auth/auth.routes";
import { OddRoutes } from "../../odds/odds.routes";
import { AuthService } from "../../../../services/auth/Auth";
import { OddsService } from "../../../../services/odds/Odds";
import { AuthProvider } from "../../../../providers/grpc/auth/Auth";
import { OddsProvider } from "../../../../providers/grpc/odds/Odds";
import { ExpressServer } from "..";

jest.mock("express", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    use: jest.fn(),
    listen: jest.fn(),
  })),
}));
jest.mock("../../auth/auth.routes", () => ({
  AuthRoutes: jest.fn().mockImplementation(() => ({
    getRouter: jest.fn().mockReturnValue(Router()),
  })),
}));
jest.mock("../../odds/odds.routes", () => ({
  OddRoutes: jest.fn().mockImplementation(() => ({
    getRouter: jest.fn().mockReturnValue(Router()),
  })),
}));
jest.mock("../../../../services/auth/Auth", () => ({
  AuthService: jest.fn().mockImplementation(() => ({})),
}));
jest.mock("../../../../services/odds/Odds", () => ({
  OddsService: jest.fn().mockImplementation(() => ({})),
}));
jest.mock("../../../../providers/grpc/auth/Auth", () => ({
  AuthProvider: jest.fn().mockImplementation(() => ({})),
}));
jest.mock("../../../../providers/grpc/odds/Odds", () => ({
  __esModule: true,
  OddsProvider: jest.fn().mockImplementation(() => ({})),
}));

describe("ExpressServer", () => {
  let server: any;

  beforeEach(() => {
    server = new ExpressServer();
  });

  it("should call configureApp method when startServer is called", () => {
    const spy = jest.spyOn(server, "configureApp");
    server.startServer();
    expect(spy).toHaveBeenCalled();
  });

  it("should create instances of AuthProvider and OddsProvider in configureApp method", () => {
    // @ts-ignore
    const authProviderSpy = jest.spyOn(AuthProvider.prototype, "constructor");
    // @ts-ignore
    const oddsProviderSpy = jest.spyOn(OddsProvider.prototype, "constructor");
    server.configureApp();
    expect(authProviderSpy).toHaveBeenCalled();
    expect(oddsProviderSpy).toHaveBeenCalled();
  });

  it("should create instances of AuthService and OddsService in configureApp method", () => {
    // @ts-ignore
    const authServiceSpy = jest.spyOn(AuthService.prototype, "constructor");
    // @ts-ignore
    const oddsServiceSpy = jest.spyOn(OddsService.prototype, "constructor");
    server.configureApp();
    expect(authServiceSpy).toHaveBeenCalled();
    expect(oddsServiceSpy).toHaveBeenCalled();
  });

  it("should create instances of AuthRoutes and OddRoutes in configureApp method", () => {
    // @ts-ignore
    const authRoutesSpy = jest.spyOn(AuthRoutes.prototype, "constructor");
    // @ts-ignore
    const oddsRoutesSpy = jest.spyOn(OddRoutes.prototype, "constructor");
    server.configureApp();
    expect(authRoutesSpy).toHaveBeenCalled();
    expect(oddsRoutesSpy).toHaveBeenCalled();
  });

  it("should call use method on express app with correct arguments", () => {
    server.app.use = jest.fn();
    server.configureApp();
    expect(server.app.use).toBeCalledTimes(2);
  });

  it("should call listen method on express app with correct arguments", () => {
    server.startServer();
    expect(server.app.listen).toHaveBeenCalledWith(
      ENV_VARS.httpServerPort,
      expect.any(Function)
    );
  });
});
