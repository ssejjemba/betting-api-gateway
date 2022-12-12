export enum UserRoles {
  DEFAULT_USER = 0,
  ADMIN_USER = 1,
  UNRECOGNIZED = -1,
}

export interface RegisterRequest {
  email: string;
  password: string;
  role: UserRoles;
}

export interface RegisterResponse {
  status: number;
  error: string[];
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: number;
  error: string[];
  token: string;
}

export interface ValidateRequest {
  token: string;
}

export interface ValidateResponse {
  status: number;
  error: string[];
  userId: number;
}
