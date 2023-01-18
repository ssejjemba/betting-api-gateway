import { AuthGrpcClient } from "./AuthGrpcClient";
import { User } from "../../app/auth/models/User";
import { IAuthService } from "../../app/auth/interfaces/IAuthService";

export class AuthGrpcAdapter implements IAuthService {
  private client: AuthGrpcClient;

  constructor(address: string) {
    this.client = new AuthGrpcClient(address);
  }

  async createJWT(user: any): Promise<string> {
    // Not required for the gRPC transport layer, since the JWT is usually created in the API Gateway.
    throw new Error("Not Implemented");
  }

  async decodeJWT(jwt: string): Promise<User | null> {
    // Not required for the gRPC transport layer, since the JWT is usually decoded in the API Gateway.
    throw new Error("Not Implemented");
  }

  async getUserByCredentials(
    email: string,
    password: string
  ): Promise<User | null> {
    const signInResponse = await this.client.signIn(email, password);
    return signInResponse.user;
  }

  async createUser(user: any): Promise<User | null> {
    const signUpResponse = await this.client.signUp(user);
    return signUpResponse.user;
  }

  async authenticate(jwt: string): Promise<boolean> {
    const authenticateResponse = await this.client.authenticate(jwt);
    return authenticateResponse.authenticated;
  }
}
