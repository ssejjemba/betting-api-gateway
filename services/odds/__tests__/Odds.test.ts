import { IOddsService } from "../../../models/services";
import { IOddsProvider } from "../../../providers/models/providers";
import { OddsService } from "../Odds";
import { Request, Response } from "express";

describe("OddsService", () => {
  let oddsService: IOddsService;
  let oddsProvider: IOddsProvider;

  beforeEach(() => {
    oddsProvider = {
      create: jest.fn(),
      read: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };
    oddsService = new OddsService(oddsProvider);
  });

  it("should call create method on oddsProvider", () => {
    const req = {} as Request<any, any, any>;
    const res = {} as Response<any>;

    oddsService.create(req, res);

    expect(oddsProvider.create).toHaveBeenCalledWith(req, res);
  });

  it("should call read method on oddsProvider", () => {
    const req = {} as Request<any, any, any>;
    const res = {} as Response<any>;

    oddsService.read(req, res);

    expect(oddsProvider.read).toHaveBeenCalledWith(req, res);
  });

  it("should call update method on oddsProvider", () => {
    const req = {} as Request<any, any, any>;
    const res = {} as Response<any>;

    oddsService.update(req, res);

    expect(oddsProvider.update).toHaveBeenCalledWith(req, res);
  });

  it("should call delete method on oddsProvider", () => {
    const req = {} as Request<any, any, any>;
    const res = {} as Response<any>;

    oddsService.delete(req, res);

    expect(oddsProvider.delete).toHaveBeenCalledWith(req, res);
  });
});
