/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "auth";

export enum Role {
  USER = 0,
  ADMIN = 1,
  SUPER_ADMIN = 2,
  UNRECOGNIZED = -1,
}

export function roleFromJSON(object: any): Role {
  switch (object) {
    case 0:
    case "USER":
      return Role.USER;
    case 1:
    case "ADMIN":
      return Role.ADMIN;
    case 2:
    case "SUPER_ADMIN":
      return Role.SUPER_ADMIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Role.UNRECOGNIZED;
  }
}

export function roleToJSON(object: Role): string {
  switch (object) {
    case Role.USER:
      return "USER";
    case Role.ADMIN:
      return "ADMIN";
    case Role.SUPER_ADMIN:
      return "SUPER_ADMIN";
    case Role.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface User {
  username: string;
  email: string;
  roles: Role[];
  /** password hash */
  password: string;
}

export interface SignUpRequest {
  user: User | undefined;
}

export interface SignUpResponse {
  user:
    | User
    | undefined;
  /** jwt token */
  token: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  user:
    | User
    | undefined;
  /** jwt token */
  token: string;
}

export interface AuthenticateRequest {
  token: string;
}

export interface AuthenticateResponse {
  user: User | undefined;
  error: Error | undefined;
}

export interface Error {
  code: number;
  message: string;
}

function createBaseUser(): User {
  return { username: "", email: "", roles: [], password: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    writer.uint32(26).fork();
    for (const v of message.roles) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.password !== "") {
      writer.uint32(34).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roles.push(reader.int32() as any);
            }
          } else {
            message.roles.push(reader.int32() as any);
          }
          break;
        case 4:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      username: isSet(object.username) ? String(object.username) : "",
      email: isSet(object.email) ? String(object.email) : "",
      roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => roleFromJSON(e)) : [],
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    message.email !== undefined && (obj.email = message.email);
    if (message.roles) {
      obj.roles = message.roles.map((e) => roleToJSON(e));
    } else {
      obj.roles = [];
    }
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.username = object.username ?? "";
    message.email = object.email ?? "";
    message.roles = object.roles?.map((e) => e) || [];
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseSignUpRequest(): SignUpRequest {
  return { user: undefined };
}

export const SignUpRequest = {
  encode(message: SignUpRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignUpRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignUpRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignUpRequest {
    return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
  },

  toJSON(message: SignUpRequest): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SignUpRequest>, I>>(base?: I): SignUpRequest {
    return SignUpRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SignUpRequest>, I>>(object: I): SignUpRequest {
    const message = createBaseSignUpRequest();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseSignUpResponse(): SignUpResponse {
  return { user: undefined, token: "" };
}

export const SignUpResponse = {
  encode(message: SignUpResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignUpResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignUpResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 2:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignUpResponse {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: SignUpResponse): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user ? User.toJSON(message.user) : undefined);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create<I extends Exact<DeepPartial<SignUpResponse>, I>>(base?: I): SignUpResponse {
    return SignUpResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SignUpResponse>, I>>(object: I): SignUpResponse {
    const message = createBaseSignUpResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseSignInRequest(): SignInRequest {
  return { email: "", password: "" };
}

export const SignInRequest = {
  encode(message: SignInRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignInRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignInRequest {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: SignInRequest): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  create<I extends Exact<DeepPartial<SignInRequest>, I>>(base?: I): SignInRequest {
    return SignInRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SignInRequest>, I>>(object: I): SignInRequest {
    const message = createBaseSignInRequest();
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseSignInResponse(): SignInResponse {
  return { user: undefined, token: "" };
}

export const SignInResponse = {
  encode(message: SignInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 2:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignInResponse {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: SignInResponse): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user ? User.toJSON(message.user) : undefined);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create<I extends Exact<DeepPartial<SignInResponse>, I>>(base?: I): SignInResponse {
    return SignInResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SignInResponse>, I>>(object: I): SignInResponse {
    const message = createBaseSignInResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseAuthenticateRequest(): AuthenticateRequest {
  return { token: "" };
}

export const AuthenticateRequest = {
  encode(message: AuthenticateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthenticateRequest {
    return { token: isSet(object.token) ? String(object.token) : "" };
  },

  toJSON(message: AuthenticateRequest): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthenticateRequest>, I>>(base?: I): AuthenticateRequest {
    return AuthenticateRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AuthenticateRequest>, I>>(object: I): AuthenticateRequest {
    const message = createBaseAuthenticateRequest();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseAuthenticateResponse(): AuthenticateResponse {
  return { user: undefined, error: undefined };
}

export const AuthenticateResponse = {
  encode(message: AuthenticateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = Error.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthenticateResponse {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AuthenticateResponse): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user ? User.toJSON(message.user) : undefined);
    message.error !== undefined && (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthenticateResponse>, I>>(base?: I): AuthenticateResponse {
    return AuthenticateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AuthenticateResponse>, I>>(object: I): AuthenticateResponse {
    const message = createBaseAuthenticateResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

function createBaseError(): Error {
  return { code: 0, message: "" };
}

export const Error = {
  encode(message: Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Error {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create<I extends Exact<DeepPartial<Error>, I>>(base?: I): Error {
    return Error.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error {
    const message = createBaseError();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

export interface AuthService {
  SignUp(request: SignUpRequest): Promise<SignUpResponse>;
  SignIn(request: SignInRequest): Promise<SignInResponse>;
  Authenticate(request: AuthenticateRequest): Promise<AuthenticateResponse>;
}

export class AuthServiceClientImpl implements AuthService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "auth.AuthService";
    this.rpc = rpc;
    this.SignUp = this.SignUp.bind(this);
    this.SignIn = this.SignIn.bind(this);
    this.Authenticate = this.Authenticate.bind(this);
  }
  SignUp(request: SignUpRequest): Promise<SignUpResponse> {
    const data = SignUpRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SignUp", data);
    return promise.then((data) => SignUpResponse.decode(new _m0.Reader(data)));
  }

  SignIn(request: SignInRequest): Promise<SignInResponse> {
    const data = SignInRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SignIn", data);
    return promise.then((data) => SignInResponse.decode(new _m0.Reader(data)));
  }

  Authenticate(request: AuthenticateRequest): Promise<AuthenticateResponse> {
    const data = AuthenticateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Authenticate", data);
    return promise.then((data) => AuthenticateResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
