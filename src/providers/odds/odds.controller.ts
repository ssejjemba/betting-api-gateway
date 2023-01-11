import {
  Controller,
  Inject,
  OnModuleInit,
  UseGuards,
  Post,
  Body,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  FindLeagueOddsRequest,
  FindLeagueOddsResponse,
  CreateOddsRequest,
  CreateOddsResponse,
  UpdateGameOddsRequest,
  UpdateGameOddsResponse,
  DeleteGameOddsRequest,
  DeleteGameOddsResponse,
  ODDS_SERVICE_NAME,
  OddsServiceClient,
} from './odds.pb';
import { AuthGuard } from '../auth/auth.guard';

@Controller('odds')
export class OddsController implements OnModuleInit {
  private svc: OddsServiceClient;

  @Inject(ODDS_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService<OddsServiceClient>(ODDS_SERVICE_NAME);
  }

  @Post('/create')
  @UseGuards(AuthGuard)
  private async createOdd(
    @Body() body: CreateOddsRequest,
  ): Promise<Observable<CreateOddsResponse>> {
    return this.svc.createGameOdds(body);
  }

  @Post('/read')
  @UseGuards(AuthGuard)
  private async readLeagueOdds(
    @Body() body: FindLeagueOddsRequest,
  ): Promise<Observable<FindLeagueOddsResponse>> {
    return this.svc.findLeagueOdds(body);
  }

  @Post('/update')
  @UseGuards(AuthGuard)
  private async updateGameOdds(
    @Body() body: UpdateGameOddsRequest,
  ): Promise<Observable<UpdateGameOddsResponse>> {
    return this.svc.updateGameOdds(body);
  }

  @Post('/delete')
  @UseGuards(AuthGuard)
  private async deleteGameOdds(
    @Body() body: DeleteGameOddsRequest,
  ): Promise<Observable<DeleteGameOddsResponse>> {
    return this.svc.deleteGameOdds(body);
  }
}
