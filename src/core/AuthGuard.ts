import { ValidateResponse } from 'src/models/Auth';
import { AuthorizationHeader, IAuthService } from 'src/models/Infrastructure';

export class AuthGuard {
  constructor(public authService: IAuthService) {}

  async validateAuthorizationToken(
    authorization: AuthorizationHeader,
  ): Promise<ValidateResponse> {
    if (!authorization) {
      return {
        status: 403,
        error: ['Token does not exist on this request'],
      };
    }
    const { userId, role, status } = await this.authService.validate({
      token: authorization,
    });
    if (status === 200) {
      return {
        status,
        error: [],
        role,
        userId,
      };
    }

    return {
      status: 403,
      error: ['Invalid token has been supplied'],
    };
  }
}
