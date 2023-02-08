export enum Role {
  USER = 0,
  ADMIN = 1,
  SUPER_ADMIN = 2,
}

export type User = {
  username: string;
  email: string;
  password: string;
  role: Role;
};

export type UserResponse = {
  username: string;
  email: string;
  role: Role;
};

export type SignUpRequest = User;

export type SignUpResponse = {
  code: number;
  error: string;
  user: UserResponse | null;
};

export type SignInRequest = {
  email: string;
  password: string;
};

export type SignInResponse = {
  code: number;
  error: string;
  user: UserResponse | null;
  token: string;
};

export type VerifyTokenRequest = {
  token: string;
};

export type VerifyTokenResponse = {
  code: number;
  error: string;
  email: string;
  role: Role;
};
