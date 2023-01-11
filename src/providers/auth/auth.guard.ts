import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpStatus,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import { Request } from 'express';
import { ValidateResponse } from './auth.pb';
import { AuthService } from './auth.service';

interface IGetUserAuthInfoRequest extends Request {
  user: number; // or any other type
}

@Injectable()
export class AuthGuard implements CanActivate {
  @Inject(AuthService)
  public readonly service: AuthService;

  public async canActivate(ctx: ExecutionContext): Promise<boolean> | never {
    const req: IGetUserAuthInfoRequest = ctx.switchToHttp().getRequest();
    const authorization: string = req.headers['authorization'];

    if (!authorization) {
      throw new UnauthorizedException();
    }

    // const bearer: string[] = authorization.split(' ');

    // if (!bearer || bearer.length < 2) {
    //   console.log(authorization);
    //   throw new UnauthorizedException();
    // }

    // const token: string = bearer[1];

    const { status, userId }: ValidateResponse = await this.service.validate(
      authorization,
    );

    req.user = userId;

    console.log(status, userId);

    if (status !== HttpStatus.OK) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
