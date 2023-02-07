/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "odds";

export enum ErrorCode {
  OK = 0,
  NOT_FOUND = 1,
  INVALID_REQUEST = 2,
  INTERNAL_ERROR = 3,
  UNRECOGNIZED = -1,
}

export function errorCodeFromJSON(object: any): ErrorCode {
  switch (object) {
    case 0:
    case "OK":
      return ErrorCode.OK;
    case 1:
    case "NOT_FOUND":
      return ErrorCode.NOT_FOUND;
    case 2:
    case "INVALID_REQUEST":
      return ErrorCode.INVALID_REQUEST;
    case 3:
    case "INTERNAL_ERROR":
      return ErrorCode.INTERNAL_ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ErrorCode.UNRECOGNIZED;
  }
}

export function errorCodeToJSON(object: ErrorCode): string {
  switch (object) {
    case ErrorCode.OK:
      return "OK";
    case ErrorCode.NOT_FOUND:
      return "NOT_FOUND";
    case ErrorCode.INVALID_REQUEST:
      return "INVALID_REQUEST";
    case ErrorCode.INTERNAL_ERROR:
      return "INTERNAL_ERROR";
    case ErrorCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Error {
  code: ErrorCode;
  message: string;
}

export interface Odd {
  id: number;
  league: string;
  home_team: string;
  away_team: string;
  game_date: string;
  home_team_win_odd: number;
  draw_odd: number;
  away_team_win_odd: number;
}

export interface GetOddsRequest {
  league: string;
  game_date: string;
}

export interface GetOddsResponse {
  error: Error | undefined;
  odds: Odd[];
}

export interface CreateOddRequest {
  league: string;
  home_team: string;
  away_team: string;
  game_date: string;
  home_team_win_odd: number;
  draw_odd: number;
  away_team_win_odd: number;
}

export interface CreateOddResponse {
  error: Error | undefined;
  odd: Odd | undefined;
}

export interface UpdateOddRequest {
  id: number;
  home_team_win_odd: number;
  draw_odd: number;
  away_team_win_odd: number;
}

export interface UpdateOddResponse {
  error: Error | undefined;
  odd: Odd | undefined;
}

export interface DeleteOddRequest {
  id: number;
}

export interface DeleteOddResponse {
  error: Error | undefined;
  success: boolean;
}

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
          message.code = reader.int32() as any;
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
      code: isSet(object.code) ? errorCodeFromJSON(object.code) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = errorCodeToJSON(message.code));
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

function createBaseOdd(): Odd {
  return {
    id: 0,
    league: "",
    home_team: "",
    away_team: "",
    game_date: "",
    home_team_win_odd: 0,
    draw_odd: 0,
    away_team_win_odd: 0,
  };
}

export const Odd = {
  encode(message: Odd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.league !== "") {
      writer.uint32(18).string(message.league);
    }
    if (message.home_team !== "") {
      writer.uint32(26).string(message.home_team);
    }
    if (message.away_team !== "") {
      writer.uint32(34).string(message.away_team);
    }
    if (message.game_date !== "") {
      writer.uint32(42).string(message.game_date);
    }
    if (message.home_team_win_odd !== 0) {
      writer.uint32(53).float(message.home_team_win_odd);
    }
    if (message.draw_odd !== 0) {
      writer.uint32(61).float(message.draw_odd);
    }
    if (message.away_team_win_odd !== 0) {
      writer.uint32(69).float(message.away_team_win_odd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Odd {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOdd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.league = reader.string();
          break;
        case 3:
          message.home_team = reader.string();
          break;
        case 4:
          message.away_team = reader.string();
          break;
        case 5:
          message.game_date = reader.string();
          break;
        case 6:
          message.home_team_win_odd = reader.float();
          break;
        case 7:
          message.draw_odd = reader.float();
          break;
        case 8:
          message.away_team_win_odd = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Odd {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      league: isSet(object.league) ? String(object.league) : "",
      home_team: isSet(object.home_team) ? String(object.home_team) : "",
      away_team: isSet(object.away_team) ? String(object.away_team) : "",
      game_date: isSet(object.game_date) ? String(object.game_date) : "",
      home_team_win_odd: isSet(object.home_team_win_odd) ? Number(object.home_team_win_odd) : 0,
      draw_odd: isSet(object.draw_odd) ? Number(object.draw_odd) : 0,
      away_team_win_odd: isSet(object.away_team_win_odd) ? Number(object.away_team_win_odd) : 0,
    };
  },

  toJSON(message: Odd): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.league !== undefined && (obj.league = message.league);
    message.home_team !== undefined && (obj.home_team = message.home_team);
    message.away_team !== undefined && (obj.away_team = message.away_team);
    message.game_date !== undefined && (obj.game_date = message.game_date);
    message.home_team_win_odd !== undefined && (obj.home_team_win_odd = message.home_team_win_odd);
    message.draw_odd !== undefined && (obj.draw_odd = message.draw_odd);
    message.away_team_win_odd !== undefined && (obj.away_team_win_odd = message.away_team_win_odd);
    return obj;
  },

  create<I extends Exact<DeepPartial<Odd>, I>>(base?: I): Odd {
    return Odd.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Odd>, I>>(object: I): Odd {
    const message = createBaseOdd();
    message.id = object.id ?? 0;
    message.league = object.league ?? "";
    message.home_team = object.home_team ?? "";
    message.away_team = object.away_team ?? "";
    message.game_date = object.game_date ?? "";
    message.home_team_win_odd = object.home_team_win_odd ?? 0;
    message.draw_odd = object.draw_odd ?? 0;
    message.away_team_win_odd = object.away_team_win_odd ?? 0;
    return message;
  },
};

function createBaseGetOddsRequest(): GetOddsRequest {
  return { league: "", game_date: "" };
}

export const GetOddsRequest = {
  encode(message: GetOddsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.league !== "") {
      writer.uint32(10).string(message.league);
    }
    if (message.game_date !== "") {
      writer.uint32(18).string(message.game_date);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOddsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOddsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.league = reader.string();
          break;
        case 2:
          message.game_date = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetOddsRequest {
    return {
      league: isSet(object.league) ? String(object.league) : "",
      game_date: isSet(object.game_date) ? String(object.game_date) : "",
    };
  },

  toJSON(message: GetOddsRequest): unknown {
    const obj: any = {};
    message.league !== undefined && (obj.league = message.league);
    message.game_date !== undefined && (obj.game_date = message.game_date);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOddsRequest>, I>>(base?: I): GetOddsRequest {
    return GetOddsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetOddsRequest>, I>>(object: I): GetOddsRequest {
    const message = createBaseGetOddsRequest();
    message.league = object.league ?? "";
    message.game_date = object.game_date ?? "";
    return message;
  },
};

function createBaseGetOddsResponse(): GetOddsResponse {
  return { error: undefined, odds: [] };
}

export const GetOddsResponse = {
  encode(message: GetOddsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.odds) {
      Odd.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOddsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOddsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = Error.decode(reader, reader.uint32());
          break;
        case 2:
          message.odds.push(Odd.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetOddsResponse {
    return {
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
      odds: Array.isArray(object?.odds) ? object.odds.map((e: any) => Odd.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetOddsResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    if (message.odds) {
      obj.odds = message.odds.map((e) => e ? Odd.toJSON(e) : undefined);
    } else {
      obj.odds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOddsResponse>, I>>(base?: I): GetOddsResponse {
    return GetOddsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetOddsResponse>, I>>(object: I): GetOddsResponse {
    const message = createBaseGetOddsResponse();
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.odds = object.odds?.map((e) => Odd.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateOddRequest(): CreateOddRequest {
  return {
    league: "",
    home_team: "",
    away_team: "",
    game_date: "",
    home_team_win_odd: 0,
    draw_odd: 0,
    away_team_win_odd: 0,
  };
}

export const CreateOddRequest = {
  encode(message: CreateOddRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.league !== "") {
      writer.uint32(10).string(message.league);
    }
    if (message.home_team !== "") {
      writer.uint32(18).string(message.home_team);
    }
    if (message.away_team !== "") {
      writer.uint32(26).string(message.away_team);
    }
    if (message.game_date !== "") {
      writer.uint32(34).string(message.game_date);
    }
    if (message.home_team_win_odd !== 0) {
      writer.uint32(45).float(message.home_team_win_odd);
    }
    if (message.draw_odd !== 0) {
      writer.uint32(53).float(message.draw_odd);
    }
    if (message.away_team_win_odd !== 0) {
      writer.uint32(61).float(message.away_team_win_odd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOddRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOddRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.league = reader.string();
          break;
        case 2:
          message.home_team = reader.string();
          break;
        case 3:
          message.away_team = reader.string();
          break;
        case 4:
          message.game_date = reader.string();
          break;
        case 5:
          message.home_team_win_odd = reader.float();
          break;
        case 6:
          message.draw_odd = reader.float();
          break;
        case 7:
          message.away_team_win_odd = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOddRequest {
    return {
      league: isSet(object.league) ? String(object.league) : "",
      home_team: isSet(object.home_team) ? String(object.home_team) : "",
      away_team: isSet(object.away_team) ? String(object.away_team) : "",
      game_date: isSet(object.game_date) ? String(object.game_date) : "",
      home_team_win_odd: isSet(object.home_team_win_odd) ? Number(object.home_team_win_odd) : 0,
      draw_odd: isSet(object.draw_odd) ? Number(object.draw_odd) : 0,
      away_team_win_odd: isSet(object.away_team_win_odd) ? Number(object.away_team_win_odd) : 0,
    };
  },

  toJSON(message: CreateOddRequest): unknown {
    const obj: any = {};
    message.league !== undefined && (obj.league = message.league);
    message.home_team !== undefined && (obj.home_team = message.home_team);
    message.away_team !== undefined && (obj.away_team = message.away_team);
    message.game_date !== undefined && (obj.game_date = message.game_date);
    message.home_team_win_odd !== undefined && (obj.home_team_win_odd = message.home_team_win_odd);
    message.draw_odd !== undefined && (obj.draw_odd = message.draw_odd);
    message.away_team_win_odd !== undefined && (obj.away_team_win_odd = message.away_team_win_odd);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateOddRequest>, I>>(base?: I): CreateOddRequest {
    return CreateOddRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateOddRequest>, I>>(object: I): CreateOddRequest {
    const message = createBaseCreateOddRequest();
    message.league = object.league ?? "";
    message.home_team = object.home_team ?? "";
    message.away_team = object.away_team ?? "";
    message.game_date = object.game_date ?? "";
    message.home_team_win_odd = object.home_team_win_odd ?? 0;
    message.draw_odd = object.draw_odd ?? 0;
    message.away_team_win_odd = object.away_team_win_odd ?? 0;
    return message;
  },
};

function createBaseCreateOddResponse(): CreateOddResponse {
  return { error: undefined, odd: undefined };
}

export const CreateOddResponse = {
  encode(message: CreateOddResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    if (message.odd !== undefined) {
      Odd.encode(message.odd, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOddResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOddResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = Error.decode(reader, reader.uint32());
          break;
        case 2:
          message.odd = Odd.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOddResponse {
    return {
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
      odd: isSet(object.odd) ? Odd.fromJSON(object.odd) : undefined,
    };
  },

  toJSON(message: CreateOddResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    message.odd !== undefined && (obj.odd = message.odd ? Odd.toJSON(message.odd) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateOddResponse>, I>>(base?: I): CreateOddResponse {
    return CreateOddResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateOddResponse>, I>>(object: I): CreateOddResponse {
    const message = createBaseCreateOddResponse();
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.odd = (object.odd !== undefined && object.odd !== null) ? Odd.fromPartial(object.odd) : undefined;
    return message;
  },
};

function createBaseUpdateOddRequest(): UpdateOddRequest {
  return { id: 0, home_team_win_odd: 0, draw_odd: 0, away_team_win_odd: 0 };
}

export const UpdateOddRequest = {
  encode(message: UpdateOddRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.home_team_win_odd !== 0) {
      writer.uint32(21).float(message.home_team_win_odd);
    }
    if (message.draw_odd !== 0) {
      writer.uint32(29).float(message.draw_odd);
    }
    if (message.away_team_win_odd !== 0) {
      writer.uint32(37).float(message.away_team_win_odd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOddRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOddRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.home_team_win_odd = reader.float();
          break;
        case 3:
          message.draw_odd = reader.float();
          break;
        case 4:
          message.away_team_win_odd = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateOddRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      home_team_win_odd: isSet(object.home_team_win_odd) ? Number(object.home_team_win_odd) : 0,
      draw_odd: isSet(object.draw_odd) ? Number(object.draw_odd) : 0,
      away_team_win_odd: isSet(object.away_team_win_odd) ? Number(object.away_team_win_odd) : 0,
    };
  },

  toJSON(message: UpdateOddRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.home_team_win_odd !== undefined && (obj.home_team_win_odd = message.home_team_win_odd);
    message.draw_odd !== undefined && (obj.draw_odd = message.draw_odd);
    message.away_team_win_odd !== undefined && (obj.away_team_win_odd = message.away_team_win_odd);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateOddRequest>, I>>(base?: I): UpdateOddRequest {
    return UpdateOddRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateOddRequest>, I>>(object: I): UpdateOddRequest {
    const message = createBaseUpdateOddRequest();
    message.id = object.id ?? 0;
    message.home_team_win_odd = object.home_team_win_odd ?? 0;
    message.draw_odd = object.draw_odd ?? 0;
    message.away_team_win_odd = object.away_team_win_odd ?? 0;
    return message;
  },
};

function createBaseUpdateOddResponse(): UpdateOddResponse {
  return { error: undefined, odd: undefined };
}

export const UpdateOddResponse = {
  encode(message: UpdateOddResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    if (message.odd !== undefined) {
      Odd.encode(message.odd, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOddResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOddResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = Error.decode(reader, reader.uint32());
          break;
        case 2:
          message.odd = Odd.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateOddResponse {
    return {
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
      odd: isSet(object.odd) ? Odd.fromJSON(object.odd) : undefined,
    };
  },

  toJSON(message: UpdateOddResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    message.odd !== undefined && (obj.odd = message.odd ? Odd.toJSON(message.odd) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateOddResponse>, I>>(base?: I): UpdateOddResponse {
    return UpdateOddResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateOddResponse>, I>>(object: I): UpdateOddResponse {
    const message = createBaseUpdateOddResponse();
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.odd = (object.odd !== undefined && object.odd !== null) ? Odd.fromPartial(object.odd) : undefined;
    return message;
  },
};

function createBaseDeleteOddRequest(): DeleteOddRequest {
  return { id: 0 };
}

export const DeleteOddRequest = {
  encode(message: DeleteOddRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOddRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteOddRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteOddRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: DeleteOddRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteOddRequest>, I>>(base?: I): DeleteOddRequest {
    return DeleteOddRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteOddRequest>, I>>(object: I): DeleteOddRequest {
    const message = createBaseDeleteOddRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseDeleteOddResponse(): DeleteOddResponse {
  return { error: undefined, success: false };
}

export const DeleteOddResponse = {
  encode(message: DeleteOddResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOddResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteOddResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = Error.decode(reader, reader.uint32());
          break;
        case 2:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteOddResponse {
    return {
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
      success: isSet(object.success) ? Boolean(object.success) : false,
    };
  },

  toJSON(message: DeleteOddResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteOddResponse>, I>>(base?: I): DeleteOddResponse {
    return DeleteOddResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteOddResponse>, I>>(object: I): DeleteOddResponse {
    const message = createBaseDeleteOddResponse();
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.success = object.success ?? false;
    return message;
  },
};

export interface OddsService {
  GetOdds(request: GetOddsRequest): Promise<GetOddsResponse>;
  CreateOdd(request: CreateOddRequest): Promise<CreateOddResponse>;
  UpdateOdd(request: UpdateOddRequest): Promise<UpdateOddResponse>;
  DeleteOdd(request: DeleteOddRequest): Promise<DeleteOddResponse>;
}

export class OddsServiceClientImpl implements OddsService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "odds.OddsService";
    this.rpc = rpc;
    this.GetOdds = this.GetOdds.bind(this);
    this.CreateOdd = this.CreateOdd.bind(this);
    this.UpdateOdd = this.UpdateOdd.bind(this);
    this.DeleteOdd = this.DeleteOdd.bind(this);
  }
  GetOdds(request: GetOddsRequest): Promise<GetOddsResponse> {
    const data = GetOddsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetOdds", data);
    return promise.then((data) => GetOddsResponse.decode(new _m0.Reader(data)));
  }

  CreateOdd(request: CreateOddRequest): Promise<CreateOddResponse> {
    const data = CreateOddRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateOdd", data);
    return promise.then((data) => CreateOddResponse.decode(new _m0.Reader(data)));
  }

  UpdateOdd(request: UpdateOddRequest): Promise<UpdateOddResponse> {
    const data = UpdateOddRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateOdd", data);
    return promise.then((data) => UpdateOddResponse.decode(new _m0.Reader(data)));
  }

  DeleteOdd(request: DeleteOddRequest): Promise<DeleteOddResponse> {
    const data = DeleteOddRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteOdd", data);
    return promise.then((data) => DeleteOddResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
