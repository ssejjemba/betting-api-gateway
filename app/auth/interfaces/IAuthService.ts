import { User } from "./../models/User";

export interface IAuthService {
  createJWT(user: User): Promise<string>;
  decodeJWT(jwt: string): Promise<User | null>;
  getUserByCredentials(email: string, password: string): Promise<User | null>;
  createUser(user: User): Promise<User | null>;
}
