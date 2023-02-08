import { ENV_VARS } from "../../../config/config";
import grpc from "@grpc/grpc-js";
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
import { Response } from "express";
import {
  CreateOddResponseDTO,
  GetOddsResponseDTO,
  UpdateOddResponseDTO,
} from "../../../dtos/odds_response";

export default class OddsProvider implements IOddsProvider {
  client: OddsServiceClient;

  constructor() {
    const host = ENV_VARS.grpcOddsHost || "";
    const port = ENV_VARS.grpcOddsPort || "";

    this.client = new OddsServiceClient(
      `${host}:${port}`,
      grpc.credentials.createInsecure()
    );
  }

  async create(req: CreateOddRequest, res: Response<CreateOddResponse>) {
    const data = new CR();
    data.setAwayTeam(req.away_team);
    data.setAwayTeamWinOdd(req.away_team_win_odd);
    data.setDrawOdd(req.draw_odd);
    data.setGameDate(req.game_date);
    data.setHomeTeam(req.home_team);
    data.setHomeTeamWinOdd(req.home_team_win_odd);
    data.setLeague(req.home_team);

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

  read(req: GetOddsRequest, res: Response<GetOddsResponse>) {
    const data = new GR();
    data.setGameDate(req.game_date);
    data.setLeague(req.league);

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

  update(req: UpdateOddRequest, res: Response<UpdateOddResponse>) {
    const data = new UR();
    data.setAwayTeamWinOdd(req.away_team_win_odd);
    data.setDrawOdd(req.draw_odd);
    data.setHomeTeamWinOdd(req.home_team_win_odd);
    data.setId(req.id);

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

  delete(req: DeleteOddRequest, res: Response<DeleteOddResponse>) {
    const data = new DR();
    data.setId(req.id);

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
