import { OddRoutes } from "../odds.routes";
import express, { Request, Response, NextFunction } from "express";
import { IOddsService } from "../../../../models/services";

describe("OddRoutes", () => {
  let oddRoutes: OddRoutes;
  let oddsService: IOddsService;
  let req: Request;
  let res: Response;
  let next: NextFunction;
  let router: express.Router;

  beforeEach(() => {
    req = {} as Request;
    res = {
      send: jest.fn(),
    } as unknown as Response;
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    next = jest.fn();
    oddsService = {
      create: jest.fn(),
      read: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };
    oddRoutes = new OddRoutes(oddsService);
    // @ts-ignore
    oddRoutes.middleware.isAdminAuthorized = jest.fn();
    // @ts-ignore
    oddRoutes.middleware.isAutheticated = jest.fn();
    oddRoutes.makeRoutes();
    router = oddRoutes.getRouter();
  });

  it("should call create method on oddsService when /create endpoint is called", async () => {
    const createHandler = router.stack.find(
      (layer) => layer.route && layer.route.path === "/create"
    );
    expect(createHandler).toBeDefined();

    const middleware = createHandler!.route!.stack[0].handle;
    await middleware(req, res, next);
    // @ts-ignore
    expect(oddRoutes.middleware.isAutheticated).toHaveBeenCalledWith(
      req,
      res,
      next
    );

    const create = createHandler!.route!.stack[1].handle;
    await create(req, res, next);
    expect(oddsService.create).toHaveBeenCalledWith(req, res);
  });

  it("should call read method on oddsService when /read endpoint is called", async () => {
    const readHandler = router.stack.find(
      (layer) => layer.route && layer.route.path === "/read"
    );
    expect(readHandler).toBeDefined();

    const middleware = readHandler!.route!.stack[0].handle;
    await middleware(req, res, next);
    // @ts-ignore
    expect(oddRoutes.middleware.isAutheticated).toHaveBeenCalledWith(
      req,
      res,
      next
    );

    const read = readHandler!.route!.stack[1].handle;
    await read(req, res, next);
    expect(oddsService.read).toHaveBeenCalledWith(req, res);
  });

  it("should call update method on oddsService when /update endpoint is called", async () => {
    const updateHandler = router.stack.find(
      (layer) => layer.route && layer.route.path === "/update"
    );
    expect(updateHandler).toBeDefined();

    const middleware = updateHandler!.route!.stack[0].handle;
    await middleware(req, res, next);
    // @ts-ignore
    expect(oddRoutes.middleware.isAdminAuthorized).toHaveBeenCalledWith(
      req,
      res,
      next
    );
    const update = updateHandler!.route!.stack[1].handle;
    await update(req, res, next);
    expect(oddsService.update).toHaveBeenCalledWith(req, res);
  });

  it("should call delete method on oddsService when /delete endpoint is called", async () => {
    const deleteHandler = router.stack.find(
      (layer) => layer.route && layer.route.path === "/delete"
    );
    expect(deleteHandler).toBeDefined();
    const middleware = deleteHandler!.route!.stack[0].handle;
    await middleware(req, res, next);
    // @ts-ignore
    expect(oddRoutes.middleware.isAdminAuthorized).toHaveBeenCalledWith(
      req,
      res,
      next
    );

    const deleteFn = deleteHandler!.route!.stack[1].handle;
    await deleteFn(req, res, next);
    expect(oddsService.delete).toHaveBeenCalledWith(req, res);
  });

  it("should call next function with error when an exception is thrown", async () => {
    const deleteHandler = router.stack.find(
      (layer) => layer.route && layer.route.path === "/delete"
    );
    expect(deleteHandler).toBeDefined();
    const deleteFn = deleteHandler!.route!.stack[1].handle;
    jest.spyOn(oddsService, "delete").mockImplementationOnce(() => {
      throw new Error("error");
    });
    await deleteFn(req, res, next);
    expect(next).toHaveBeenCalledWith(new Error("error"));
  });
});
