import { injectable } from "inversify";
import { IUsersService } from "./users.port";
import { User } from "./users.model";

@injectable()
export class UsersAdapter implements IUsersService {
  async getUser(id: string): Promise<User> {
    // implement the logic to get a user from the service
  }
  async createUser(user: User): Promise<User> {
    // implement the logic to create a user in the service
  }
  async updateUser(id: string, user: User): Promise<User> {
    // implement the logic to update a user in the service
  }
  async deleteUser(id: string): Promise<void> {
    // implement the logic to delete a user from the service
  }
}
