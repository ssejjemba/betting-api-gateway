/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "odds";

export interface Odd {
  id: number;
  league: string;
  homeTeam: string;
  awayTeam: string;
  gameDate: string;
  homeTeamWinOdd: number;
  drawOdd: number;
  awayTeamWinOdd: number;
}

export interface GetOddsRequest {
  league: string;
  gameDate: string;
}

export interface GetOddsResponse {
  code: number;
  message: string;
  odds: Odd[];
}

export interface CreateOddRequest {
  league: string;
  homeTeam: string;
  awayTeam: string;
  gameDate: string;
  homeTeamWinOdd: number;
  drawOdd: number;
  awayTeamWinOdd: number;
}

export interface CreateOddResponse {
  code: number;
  message: string;
  odd: Odd | undefined;
}

export interface UpdateOddRequest {
  id: number;
  homeTeamWinOdd: number;
  drawOdd: number;
  awayTeamWinOdd: number;
}

export interface UpdateOddResponse {
  code: number;
  message: string;
  odd: Odd | undefined;
}

export interface DeleteOddRequest {
  id: number;
}

export interface DeleteOddResponse {
  code: number;
  message: string;
}

function createBaseOdd(): Odd {
  return {
    id: 0,
    league: "",
    homeTeam: "",
    awayTeam: "",
    gameDate: "",
    homeTeamWinOdd: 0,
    drawOdd: 0,
    awayTeamWinOdd: 0,
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
    if (message.homeTeam !== "") {
      writer.uint32(26).string(message.homeTeam);
    }
    if (message.awayTeam !== "") {
      writer.uint32(34).string(message.awayTeam);
    }
    if (message.gameDate !== "") {
      writer.uint32(42).string(message.gameDate);
    }
    if (message.homeTeamWinOdd !== 0) {
      writer.uint32(53).float(message.homeTeamWinOdd);
    }
    if (message.drawOdd !== 0) {
      writer.uint32(61).float(message.drawOdd);
    }
    if (message.awayTeamWinOdd !== 0) {
      writer.uint32(69).float(message.awayTeamWinOdd);
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
          message.homeTeam = reader.string();
          break;
        case 4:
          message.awayTeam = reader.string();
          break;
        case 5:
          message.gameDate = reader.string();
          break;
        case 6:
          message.homeTeamWinOdd = reader.float();
          break;
        case 7:
          message.drawOdd = reader.float();
          break;
        case 8:
          message.awayTeamWinOdd = reader.float();
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
      homeTeam: isSet(object.homeTeam) ? String(object.homeTeam) : "",
      awayTeam: isSet(object.awayTeam) ? String(object.awayTeam) : "",
      gameDate: isSet(object.gameDate) ? String(object.gameDate) : "",
      homeTeamWinOdd: isSet(object.homeTeamWinOdd) ? Number(object.homeTeamWinOdd) : 0,
      drawOdd: isSet(object.drawOdd) ? Number(object.drawOdd) : 0,
      awayTeamWinOdd: isSet(object.awayTeamWinOdd) ? Number(object.awayTeamWinOdd) : 0,
    };
  },

  toJSON(message: Odd): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.league !== undefined && (obj.league = message.league);
    message.homeTeam !== undefined && (obj.homeTeam = message.homeTeam);
    message.awayTeam !== undefined && (obj.awayTeam = message.awayTeam);
    message.gameDate !== undefined && (obj.gameDate = message.gameDate);
    message.homeTeamWinOdd !== undefined && (obj.homeTeamWinOdd = message.homeTeamWinOdd);
    message.drawOdd !== undefined && (obj.drawOdd = message.drawOdd);
    message.awayTeamWinOdd !== undefined && (obj.awayTeamWinOdd = message.awayTeamWinOdd);
    return obj;
  },

  create<I extends Exact<DeepPartial<Odd>, I>>(base?: I): Odd {
    return Odd.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Odd>, I>>(object: I): Odd {
    const message = createBaseOdd();
    message.id = object.id ?? 0;
    message.league = object.league ?? "";
    message.homeTeam = object.homeTeam ?? "";
    message.awayTeam = object.awayTeam ?? "";
    message.gameDate = object.gameDate ?? "";
    message.homeTeamWinOdd = object.homeTeamWinOdd ?? 0;
    message.drawOdd = object.drawOdd ?? 0;
    message.awayTeamWinOdd = object.awayTeamWinOdd ?? 0;
    return message;
  },
};

function createBaseGetOddsRequest(): GetOddsRequest {
  return { league: "", gameDate: "" };
}

export const GetOddsRequest = {
  encode(message: GetOddsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.league !== "") {
      writer.uint32(10).string(message.league);
    }
    if (message.gameDate !== "") {
      writer.uint32(18).string(message.gameDate);
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
          message.gameDate = reader.string();
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
      gameDate: isSet(object.gameDate) ? String(object.gameDate) : "",
    };
  },

  toJSON(message: GetOddsRequest): unknown {
    const obj: any = {};
    message.league !== undefined && (obj.league = message.league);
    message.gameDate !== undefined && (obj.gameDate = message.gameDate);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOddsRequest>, I>>(base?: I): GetOddsRequest {
    return GetOddsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetOddsRequest>, I>>(object: I): GetOddsRequest {
    const message = createBaseGetOddsRequest();
    message.league = object.league ?? "";
    message.gameDate = object.gameDate ?? "";
    return message;
  },
};

function createBaseGetOddsResponse(): GetOddsResponse {
  return { code: 0, message: "", odds: [] };
}

export const GetOddsResponse = {
  encode(message: GetOddsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.odds) {
      Odd.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.code = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
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
      code: isSet(object.code) ? Number(object.code) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      odds: Array.isArray(object?.odds) ? object.odds.map((e: any) => Odd.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetOddsResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.message !== undefined && (obj.message = message.message);
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
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    message.odds = object.odds?.map((e) => Odd.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateOddRequest(): CreateOddRequest {
  return { league: "", homeTeam: "", awayTeam: "", gameDate: "", homeTeamWinOdd: 0, drawOdd: 0, awayTeamWinOdd: 0 };
}

export const CreateOddRequest = {
  encode(message: CreateOddRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.league !== "") {
      writer.uint32(10).string(message.league);
    }
    if (message.homeTeam !== "") {
      writer.uint32(18).string(message.homeTeam);
    }
    if (message.awayTeam !== "") {
      writer.uint32(26).string(message.awayTeam);
    }
    if (message.gameDate !== "") {
      writer.uint32(34).string(message.gameDate);
    }
    if (message.homeTeamWinOdd !== 0) {
      writer.uint32(45).float(message.homeTeamWinOdd);
    }
    if (message.drawOdd !== 0) {
      writer.uint32(53).float(message.drawOdd);
    }
    if (message.awayTeamWinOdd !== 0) {
      writer.uint32(61).float(message.awayTeamWinOdd);
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
          message.homeTeam = reader.string();
          break;
        case 3:
          message.awayTeam = reader.string();
          break;
        case 4:
          message.gameDate = reader.string();
          break;
        case 5:
          message.homeTeamWinOdd = reader.float();
          break;
        case 6:
          message.drawOdd = reader.float();
          break;
        case 7:
          message.awayTeamWinOdd = reader.float();
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
      homeTeam: isSet(object.homeTeam) ? String(object.homeTeam) : "",
      awayTeam: isSet(object.awayTeam) ? String(object.awayTeam) : "",
      gameDate: isSet(object.gameDate) ? String(object.gameDate) : "",
      homeTeamWinOdd: isSet(object.homeTeamWinOdd) ? Number(object.homeTeamWinOdd) : 0,
      drawOdd: isSet(object.drawOdd) ? Number(object.drawOdd) : 0,
      awayTeamWinOdd: isSet(object.awayTeamWinOdd) ? Number(object.awayTeamWinOdd) : 0,
    };
  },

  toJSON(message: CreateOddRequest): unknown {
    const obj: any = {};
    message.league !== undefined && (obj.league = message.league);
    message.homeTeam !== undefined && (obj.homeTeam = message.homeTeam);
    message.awayTeam !== undefined && (obj.awayTeam = message.awayTeam);
    message.gameDate !== undefined && (obj.gameDate = message.gameDate);
    message.homeTeamWinOdd !== undefined && (obj.homeTeamWinOdd = message.homeTeamWinOdd);
    message.drawOdd !== undefined && (obj.drawOdd = message.drawOdd);
    message.awayTeamWinOdd !== undefined && (obj.awayTeamWinOdd = message.awayTeamWinOdd);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateOddRequest>, I>>(base?: I): CreateOddRequest {
    return CreateOddRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateOddRequest>, I>>(object: I): CreateOddRequest {
    const message = createBaseCreateOddRequest();
    message.league = object.league ?? "";
    message.homeTeam = object.homeTeam ?? "";
    message.awayTeam = object.awayTeam ?? "";
    message.gameDate = object.gameDate ?? "";
    message.homeTeamWinOdd = object.homeTeamWinOdd ?? 0;
    message.drawOdd = object.drawOdd ?? 0;
    message.awayTeamWinOdd = object.awayTeamWinOdd ?? 0;
    return message;
  },
};

function createBaseCreateOddResponse(): CreateOddResponse {
  return { code: 0, message: "", odd: undefined };
}

export const CreateOddResponse = {
  encode(message: CreateOddResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.odd !== undefined) {
      Odd.encode(message.odd, writer.uint32(26).fork()).ldelim();
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
          message.code = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
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
      code: isSet(object.code) ? Number(object.code) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      odd: isSet(object.odd) ? Odd.fromJSON(object.odd) : undefined,
    };
  },

  toJSON(message: CreateOddResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.message !== undefined && (obj.message = message.message);
    message.odd !== undefined && (obj.odd = message.odd ? Odd.toJSON(message.odd) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateOddResponse>, I>>(base?: I): CreateOddResponse {
    return CreateOddResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateOddResponse>, I>>(object: I): CreateOddResponse {
    const message = createBaseCreateOddResponse();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    message.odd = (object.odd !== undefined && object.odd !== null) ? Odd.fromPartial(object.odd) : undefined;
    return message;
  },
};

function createBaseUpdateOddRequest(): UpdateOddRequest {
  return { id: 0, homeTeamWinOdd: 0, drawOdd: 0, awayTeamWinOdd: 0 };
}

export const UpdateOddRequest = {
  encode(message: UpdateOddRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.homeTeamWinOdd !== 0) {
      writer.uint32(21).float(message.homeTeamWinOdd);
    }
    if (message.drawOdd !== 0) {
      writer.uint32(29).float(message.drawOdd);
    }
    if (message.awayTeamWinOdd !== 0) {
      writer.uint32(37).float(message.awayTeamWinOdd);
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
          message.homeTeamWinOdd = reader.float();
          break;
        case 3:
          message.drawOdd = reader.float();
          break;
        case 4:
          message.awayTeamWinOdd = reader.float();
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
      homeTeamWinOdd: isSet(object.homeTeamWinOdd) ? Number(object.homeTeamWinOdd) : 0,
      drawOdd: isSet(object.drawOdd) ? Number(object.drawOdd) : 0,
      awayTeamWinOdd: isSet(object.awayTeamWinOdd) ? Number(object.awayTeamWinOdd) : 0,
    };
  },

  toJSON(message: UpdateOddRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.homeTeamWinOdd !== undefined && (obj.homeTeamWinOdd = message.homeTeamWinOdd);
    message.drawOdd !== undefined && (obj.drawOdd = message.drawOdd);
    message.awayTeamWinOdd !== undefined && (obj.awayTeamWinOdd = message.awayTeamWinOdd);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateOddRequest>, I>>(base?: I): UpdateOddRequest {
    return UpdateOddRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateOddRequest>, I>>(object: I): UpdateOddRequest {
    const message = createBaseUpdateOddRequest();
    message.id = object.id ?? 0;
    message.homeTeamWinOdd = object.homeTeamWinOdd ?? 0;
    message.drawOdd = object.drawOdd ?? 0;
    message.awayTeamWinOdd = object.awayTeamWinOdd ?? 0;
    return message;
  },
};

function createBaseUpdateOddResponse(): UpdateOddResponse {
  return { code: 0, message: "", odd: undefined };
}

export const UpdateOddResponse = {
  encode(message: UpdateOddResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.odd !== undefined) {
      Odd.encode(message.odd, writer.uint32(26).fork()).ldelim();
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
          message.code = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
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
      code: isSet(object.code) ? Number(object.code) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      odd: isSet(object.odd) ? Odd.fromJSON(object.odd) : undefined,
    };
  },

  toJSON(message: UpdateOddResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.message !== undefined && (obj.message = message.message);
    message.odd !== undefined && (obj.odd = message.odd ? Odd.toJSON(message.odd) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateOddResponse>, I>>(base?: I): UpdateOddResponse {
    return UpdateOddResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateOddResponse>, I>>(object: I): UpdateOddResponse {
    const message = createBaseUpdateOddResponse();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
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
  return { code: 0, message: "" };
}

export const DeleteOddResponse = {
  encode(message: DeleteOddResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
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

  fromJSON(object: any): DeleteOddResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: DeleteOddResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteOddResponse>, I>>(base?: I): DeleteOddResponse {
    return DeleteOddResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteOddResponse>, I>>(object: I): DeleteOddResponse {
    const message = createBaseDeleteOddResponse();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
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
