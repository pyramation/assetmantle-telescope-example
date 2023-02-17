import { IdentityID, IdentityIDSDKType } from "../../ids/base/identityID.v1";
import { AnyOwnableID, AnyOwnableIDSDKType } from "../../ids/base/anyOwnableID.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
export interface Split {
  ownerID?: IdentityID;
  ownableID?: AnyOwnableID;
  value: string;
}
export interface SplitSDKType {
  owner_i_d?: IdentityIDSDKType;
  ownable_i_d?: AnyOwnableIDSDKType;
  value: string;
}

function createBaseSplit(): Split {
  return {
    ownerID: undefined,
    ownableID: undefined,
    value: ""
  };
}

export const Split = {
  encode(message: Split, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerID !== undefined) {
      IdentityID.encode(message.ownerID, writer.uint32(10).fork()).ldelim();
    }

    if (message.ownableID !== undefined) {
      AnyOwnableID.encode(message.ownableID, writer.uint32(18).fork()).ldelim();
    }

    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Split {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSplit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ownerID = IdentityID.decode(reader, reader.uint32());
          break;

        case 2:
          message.ownableID = AnyOwnableID.decode(reader, reader.uint32());
          break;

        case 3:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Split {
    return {
      ownerID: isSet(object.ownerID) ? IdentityID.fromJSON(object.ownerID) : undefined,
      ownableID: isSet(object.ownableID) ? AnyOwnableID.fromJSON(object.ownableID) : undefined,
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: Split): unknown {
    const obj: any = {};
    message.ownerID !== undefined && (obj.ownerID = message.ownerID ? IdentityID.toJSON(message.ownerID) : undefined);
    message.ownableID !== undefined && (obj.ownableID = message.ownableID ? AnyOwnableID.toJSON(message.ownableID) : undefined);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: Partial<Split>): Split {
    const message = createBaseSplit();
    message.ownerID = object.ownerID !== undefined && object.ownerID !== null ? IdentityID.fromPartial(object.ownerID) : undefined;
    message.ownableID = object.ownableID !== undefined && object.ownableID !== null ? AnyOwnableID.fromPartial(object.ownableID) : undefined;
    message.value = object.value ?? "";
    return message;
  }

};