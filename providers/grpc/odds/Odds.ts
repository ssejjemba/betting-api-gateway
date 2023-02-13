import { ENV_VARS } from "../../../config/config";
import { credentials } from "@grpc/grpc-js";
import { OddsServiceClient } from "../../../generated/odds_grpc_pb";

import {
  CreateOddRequest as CR,
  GetOddsRequest as GR,
  UpdateOddRequest as UR,
  DeleteOddRequest as DR,
} from "../../../generated/odds_pb";

import {
  CreateOddRequest,
  GetOddsRequest,
  UpdateOddRequest,
  DeleteOddRequest,
  CreateOddResponse,
  GetOddsResponse,
  UpdateOddResponse,
  DeleteOddResponse,
} from "../../../models/requests";
import { IOddsProvider } from "../../models/providers";
import { Request, Response } from "express";
import {
  CreateOddResponseDTO,
  GetOddsResponseDTO,
  UpdateOddResponseDTO,
} from "../../../dtos/odds_response";

export class OddsProvider implements IOddsProvider {
  client: OddsServiceClient;

  constructor() {
    const host = ENV_VARS.grpcOddsHost || "";
    const port = ENV_VARS.grpcOddsPort || "";

    this.client = new OddsServiceClient(
      `${host}:${port}`,
      credentials.createInsecure()
    );
  }

  async create(
    req: Request<any, any, CreateOddRequest>,
    res: Response<CreateOddResponse>
  ) {
    const body = req.body;
    const data = new CR();
    data.setAwayTeam(body.away_team);
    data.setAwayTeamWinOdd(body.away_team_win_odd);
    data.setDrawOdd(body.draw_odd);
    data.setGameDate(body.game_date);
    data.setHomeTeam(body.home_team);
    data.setHomeTeamWinOdd(body.home_team_win_odd);
    data.setLeague(body.home_team);

    this.client.createOdd(data, (error, response) => {
      if (error || !response) {
        console.error(error);
        res.status(500).json({
          code: 500,
          message: "Internal server error",
          odd: undefined,
        });
        return;
      }

      res.status(response.getCode()).json(
        new CreateOddResponseDTO({
          code: response.getCode(),
          error: response.getMessage(),
          odd: response.getOdd()?.toObject(),
        })
      );
    });
  }

  read(req: Request<any, any, GetOddsRequest>, res: Response<GetOddsResponse>) {
    const body = req.body;
    const data = new GR();
    data.setGameDate(body.game_date);
    data.setLeague(body.league);

    this.client.getOdds(data, (err, response) => {
      if (err || !response) {
        console.error(err);
        res.status(500).json({
          code: 500,
          message: "Internal server error",
          odds: [],
        });
        return;
      }

      const result = response.toObject();

      res.status(result.code).json(
        new GetOddsResponseDTO({
          code: result.code,
          error: result.message,
          odds: result.oddsList,
        })
      );
    });
  }

  update(
    req: Request<any, any, UpdateOddRequest>,
    res: Response<UpdateOddResponse>
  ) {
    const body = req.body;
    const data = new UR();
    data.setAwayTeamWinOdd(body.away_team_win_odd);
    data.setDrawOdd(body.draw_odd);
    data.setHomeTeamWinOdd(body.home_team_win_odd);
    data.setId(body.id);

    this.client.updateOdd(data, (err, response) => {
      if (err || !response) {
        console.error(err);
        res.status(500).json({
          code: 500,
          message: "Internal server error",
          odd: undefined,
        });
        return;
      }

      res.status(response.getCode()).json(
        new UpdateOddResponseDTO({
          code: response.getCode(),
          error: response.getMessage(),
          odd: response.getOdd()?.toObject(),
        })
      );
    });
  }

  delete(
    req: Request<any, any, DeleteOddRequest>,
    res: Response<DeleteOddResponse>
  ) {
    const body = req.body;
    const data = new DR();
    data.setId(body.id);

    this.client.deleteOdd(data, (err, response) => {
      if (err || !response) {
        console.error(err);
        res.status(500).json({
          code: 500,
          message: "Internal server error",
        });
        return;
      }

      res.status(response.getCode()).json({
        code: response.getCode(),
        message: response.getMessage(),
      });
    });
  }
}
