import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpStatus,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from 'src/core/AuthGuard';
import { IAuthService } from 'src/models/Infrastructure';

interface IGetUserAuthInfoRequest extends Request {
  user: number; // or any other type
}

@Injectable()
export class Guard implements CanActivate {
  @Inject(AuthService)
  public readonly service: IAuthService;

  public async canActivate(ctx: ExecutionContext): Promise<boolean> | never {
    const req: IGetUserAuthInfoRequest = ctx.switchToHttp().getRequest();
    const authorization: string = req.headers['authorization'];

    const authGuardFacade = new AuthGuard(this.service);

    const { status, userId } = await authGuardFacade.validateAuthorizationToken(
      authorization,
    );

    if (status !== HttpStatus.OK) {
      throw new UnauthorizedException();
    }

    req.user = userId;

    return true;
  }
}
