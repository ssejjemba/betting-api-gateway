import * as Joi from "joi";
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

export const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  roles: Joi.array().items(Joi.string().valid(...Object.values(Role))),
});
