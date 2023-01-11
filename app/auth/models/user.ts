export class User {
  username: string;
  email: string;
  roles: Role[];
  password: string; //password hash
  constructor(
    username: string,
    email: string,
    password: string,
    roles?: Role[]
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.roles = roles || [Role.USER];
  }
}

enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
}
