"use strict";
var $protobuf = require("protobufjs/minimal");
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
$root.groupproto = (function() {
var groupproto = {};
groupproto.SenderKeyMessage = (function() {
function SenderKeyMessage(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
SenderKeyMessage.prototype.id = 0;
SenderKeyMessage.prototype.iteration = 0;
SenderKeyMessage.prototype.ciphertext = $util.newBuffer([]);
SenderKeyMessage.create = function create(properties) {
return new SenderKeyMessage(properties);
};
SenderKeyMessage.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.id != null && Object.hasOwnProperty.call(message, "id"))
writer.uint32(8).uint32(message.id);
if (message.iteration != null && Object.hasOwnProperty.call(message, "iteration"))
writer.uint32(16).uint32(message.iteration);
if (message.ciphertext != null && Object.hasOwnProperty.call(message, "ciphertext"))
writer.uint32(26).bytes(message.ciphertext);
return writer;
};
SenderKeyMessage.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
SenderKeyMessage.decode = function decode(reader, length) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.groupproto.SenderKeyMessage();
while (reader.pos < end) {
var tag = reader.uint32();
switch (tag >>> 3) {
case 1:
message.id = reader.uint32();
break;
case 2:
message.iteration = reader.uint32();
break;
case 3:
message.ciphertext = reader.bytes();
break;
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
SenderKeyMessage.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
SenderKeyMessage.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
if (message.id != null && Object.prototype.hasOwnProperty.call(message,"id"))
if (!$util.isInteger(message.id))
return "id: integer expected";
if (message.iteration != null && Object.prototype.hasOwnProperty.call(message,"iteration"))
if (!$util.isInteger(message.iteration))
return "iteration: integer expected";
if (message.ciphertext != null && Object.prototype.hasOwnProperty.call(message,"ciphertext"))
if (!(message.ciphertext && typeof message.ciphertext.length === "number" || $util.isString(message.ciphertext)))
return "ciphertext: buffer expected";
return null;
};
SenderKeyMessage.fromObject = function fromObject(object) {
if (object instanceof $root.groupproto.SenderKeyMessage)
return object;
var message = new $root.groupproto.SenderKeyMessage();
if (object.id != null)
message.id = object.id >>> 0;
if (object.iteration != null)
message.iteration = object.iteration >>> 0;
if (object.ciphertext != null)
if (typeof object.ciphertext === "string")
$util.base64.decode(object.ciphertext, message.ciphertext = $util.newBuffer($util.base64.length(object.ciphertext)), 0);
else if (object.ciphertext.length)
message.ciphertext = object.ciphertext;
return message;
};
SenderKeyMessage.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.defaults) {
object.id = 0;
object.iteration = 0;
if (options.bytes === String)
object.ciphertext = "";
else {
object.ciphertext = [];
if (options.bytes !== Array)
object.ciphertext = $util.newBuffer(object.ciphertext);
}
}
if (message.id != null && Object.prototype.hasOwnProperty.call(message,"id"))
object.id = message.id;
if (message.iteration != null && Object.prototype.hasOwnProperty.call(message,"iteration"))
object.iteration = message.iteration;
if (message.ciphertext != null && Object.prototype.hasOwnProperty.call(message,"ciphertext"))
object.ciphertext = options.bytes === String ? $util.base64.encode(message.ciphertext, 0, message.ciphertext.length) : options.bytes === Array ? Array.prototype.slice.call(message.ciphertext) : message.ciphertext;
return object;
};
SenderKeyMessage.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
return SenderKeyMessage;
})();
groupproto.SenderKeyDistributionMessage = (function() {
function SenderKeyDistributionMessage(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
SenderKeyDistributionMessage.prototype.id = 0;
SenderKeyDistributionMessage.prototype.iteration = 0;
SenderKeyDistributionMessage.prototype.chainKey = $util.newBuffer([]);
SenderKeyDistributionMessage.prototype.signingKey = $util.newBuffer([]);
SenderKeyDistributionMessage.create = function create(properties) {
return new SenderKeyDistributionMessage(properties);
};
SenderKeyDistributionMessage.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.id != null && Object.hasOwnProperty.call(message, "id"))
writer.uint32(8).uint32(message.id);
if (message.iteration != null && Object.hasOwnProperty.call(message, "iteration"))
writer.uint32(16).uint32(message.iteration);
if (message.chainKey != null && Object.hasOwnProperty.call(message, "chainKey"))
writer.uint32(26).bytes(message.chainKey);
if (message.signingKey != null && Object.hasOwnProperty.call(message, "signingKey"))
writer.uint32(34).bytes(message.signingKey);
return writer;
};
SenderKeyDistributionMessage.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
SenderKeyDistributionMessage.decode = function decode(reader, length) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.groupproto.SenderKeyDistributionMessage();
while (reader.pos < end) {
var tag = reader.uint32();
switch (tag >>> 3) {
case 1:
message.id = reader.uint32();
break;
case 2:
message.iteration = reader.uint32();
break;
case 3:
message.chainKey = reader.bytes();
break;
case 4:
message.signingKey = reader.bytes();
break;
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
SenderKeyDistributionMessage.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
SenderKeyDistributionMessage.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
if (message.id != null && Object.prototype.hasOwnProperty.call(message,"id"))
if (!$util.isInteger(message.id))
return "id: integer expected";
if (message.iteration != null && Object.prototype.hasOwnProperty.call(message,"iteration"))
if (!$util.isInteger(message.iteration))
return "iteration: integer expected";
if (message.chainKey != null && Object.prototype.hasOwnProperty.call(message,"chainKey"))
if (!(message.chainKey && typeof message.chainKey.length === "number" || $util.isString(message.chainKey)))
return "chainKey: buffer expected";
if (message.signingKey != null && Object.prototype.hasOwnProperty.call(message,"signingKey"))
if (!(message.signingKey && typeof message.signingKey.length === "number" || $util.isString(message.signingKey)))
return "signingKey: buffer expected";
return null;
};
SenderKeyDistributionMessage.fromObject = function fromObject(object) {
if (object instanceof $root.groupproto.SenderKeyDistributionMessage)
return object;
var message = new $root.groupproto.SenderKeyDistributionMessage();
if (object.id != null)
message.id = object.id >>> 0;
if (object.iteration != null)
message.iteration = object.iteration >>> 0;
if (object.chainKey != null)
if (typeof object.chainKey === "string")
$util.base64.decode(object.chainKey, message.chainKey = $util.newBuffer($util.base64.length(object.chainKey)), 0);
else if (object.chainKey.length)
message.chainKey = object.chainKey;
if (object.signingKey != null)
if (typeof object.signingKey === "string")
$util.base64.decode(object.signingKey, message.signingKey = $util.newBuffer($util.base64.length(object.signingKey)), 0);
else if (object.signingKey.length)
message.signingKey = object.signingKey;
return message;
};
SenderKeyDistributionMessage.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.defaults) {
object.id = 0;
object.iteration = 0;
if (options.bytes === String)
object.chainKey = "";
else {
object.chainKey = [];
if (options.bytes !== Array)
object.chainKey = $util.newBuffer(object.chainKey);
}
if (options.bytes === String)
object.signingKey = "";
else {
object.signingKey = [];
if (options.bytes !== Array)
object.signingKey = $util.newBuffer(object.signingKey);
}
}
if (message.id != null && Object.prototype.hasOwnProperty.call(message,"id"))
object.id = message.id;
if (message.iteration != null && Object.prototype.hasOwnProperty.call(message,"iteration"))
object.iteration = message.iteration;
if (message.chainKey != null && Object.prototype.hasOwnProperty.call(message,"chainKey"))
object.chainKey = options.bytes === String ? $util.base64.encode(message.chainKey, 0, message.chainKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.chainKey) : message.chainKey;
if (message.signingKey != null && Object.prototype.hasOwnProperty.call(message,"signingKey"))
object.signingKey = options.bytes === String ? $util.base64.encode(message.signingKey, 0, message.signingKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.signingKey) : message.signingKey;
return object;
};
SenderKeyDistributionMessage.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
return SenderKeyDistributionMessage;
})();
groupproto.SenderChainKey = (function() {
function SenderChainKey(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
SenderChainKey.prototype.iteration = 0;
SenderChainKey.prototype.seed = $util.newBuffer([]);
SenderChainKey.create = function create(properties) {
return new SenderChainKey(properties);
};
SenderChainKey.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.iteration != null && Object.hasOwnProperty.call(message, "iteration"))
writer.uint32(8).uint32(message.iteration);
if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
writer.uint32(18).bytes(message.seed);
return writer;
};
SenderChainKey.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
SenderChainKey.decode = function decode(reader, length) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.groupproto.SenderChainKey();
while (reader.pos < end) {
var tag = reader.uint32();
switch (tag >>> 3) {
case 1:
message.iteration = reader.uint32();
break;
case 2:
message.seed = reader.bytes();
break;
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
SenderChainKey.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
SenderChainKey.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
if (message.iteration != null && Object.prototype.hasOwnProperty.call(message,"iteration"))
if (!$util.isInteger(message.iteration))
return "iteration: integer expected";
if (message.seed != null && Object.prototype.hasOwnProperty.call(message,"seed"))
if (!(message.seed && typeof message.seed.length === "number" || $util.isString(message.seed)))
return "seed: buffer expected";
return null;
};
SenderChainKey.fromObject = function fromObject(object) {
if (object instanceof $root.groupproto.SenderChainKey)
return object;
var message = new $root.groupproto.SenderChainKey();
if (object.iteration != null)
message.iteration = object.iteration >>> 0;
if (object.seed != null)
if (typeof object.seed === "string")
$util.base64.decode(object.seed, message.seed = $util.newBuffer($util.base64.length(object.seed)), 0);
else if (object.seed.length)
message.seed = object.seed;
return message;
};
SenderChainKey.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.defaults) {
object.iteration = 0;
if (options.bytes === String)
object.seed = "";
else {
object.seed = [];
if (options.bytes !== Array)
object.seed = $util.newBuffer(object.seed);
}
}
if (message.iteration != null && Object.prototype.hasOwnProperty.call(message,"iteration"))
object.iteration = message.iteration;
if (message.seed != null && Object.prototype.hasOwnProperty.call(message,"seed"))
object.seed = options.bytes === String ? $util.base64.encode(message.seed, 0, message.seed.length) : options.bytes === Array ? Array.prototype.slice.call(message.seed) : message.seed;
return object;
};
SenderChainKey.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
return SenderChainKey;
})();
groupproto.SenderMessageKey = (function() {
function SenderMessageKey(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
SenderMessageKey.prototype.iteration = 0;
SenderMessageKey.prototype.seed = $util.newBuffer([]);
SenderMessageKey.create = function create(properties) {
return new SenderMessageKey(properties);
};
SenderMessageKey.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.iteration != null && Object.hasOwnProperty.call(message, "iteration"))
writer.uint32(8).uint32(message.iteration);
if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
writer.uint32(18).bytes(message.seed);
return writer;
};
SenderMessageKey.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
SenderMessageKey.decode = function decode(reader, length) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.groupproto.SenderMessageKey();
while (reader.pos < end) {
var tag = reader.uint32();
switch (tag >>> 3) {
case 1:
message.iteration = reader.uint32();
break;
case 2:
message.seed = reader.bytes();
break;
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
SenderMessageKey.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
SenderMessageKey.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
if (message.iteration != null && Object.prototype.hasOwnProperty.call(message,"iteration"))
if (!$util.isInteger(message.iteration))
return "iteration: integer expected";
if (message.seed != null && Object.prototype.hasOwnProperty.call(message,"seed"))
if (!(message.seed && typeof message.seed.length === "number" || $util.isString(message.seed)))
return "seed: buffer expected";
return null;
};
SenderMessageKey.fromObject = function fromObject(object) {
if (object instanceof $root.groupproto.SenderMessageKey)
return object;
var message = new $root.groupproto.SenderMessageKey();
if (object.iteration != null)
message.iteration = object.iteration >>> 0;
if (object.seed != null)
if (typeof object.seed === "string")
$util.base64.decode(object.seed, message.seed = $util.newBuffer($util.base64.length(object.seed)), 0);
else if (object.seed.length)
message.seed = object.seed;
return message;
};
SenderMessageKey.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.defaults) {
object.iteration = 0;
if (options.bytes === String)
object.seed = "";
else {
object.seed = [];
if (options.bytes !== Array)
object.seed = $util.newBuffer(object.seed);
}
}
if (message.iteration != null && Object.prototype.hasOwnProperty.call(message,"iteration"))
object.iteration = message.iteration;
if (message.seed != null && Object.prototype.hasOwnProperty.call(message,"seed"))
object.seed = options.bytes === String ? $util.base64.encode(message.seed, 0, message.seed.length) : options.bytes === Array ? Array.prototype.slice.call(message.seed) : message.seed;
return object;
};
SenderMessageKey.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
return SenderMessageKey;
})();
groupproto.SenderSigningKey = (function() {
function SenderSigningKey(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
SenderSigningKey.prototype["public"] = $util.newBuffer([]);
SenderSigningKey.prototype["private"] = $util.newBuffer([]);
SenderSigningKey.create = function create(properties) {
return new SenderSigningKey(properties);
};
SenderSigningKey.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message["public"] != null && Object.hasOwnProperty.call(message, "public"))
writer.uint32(10).bytes(message["public"]);
if (message["private"] != null && Object.hasOwnProperty.call(message, "private"))
writer.uint32(18).bytes(message["private"]);
return writer;
};
SenderSigningKey.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
SenderSigningKey.decode = function decode(reader, length) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.groupproto.SenderSigningKey();
while (reader.pos < end) {
var tag = reader.uint32();
switch (tag >>> 3) {
case 1:
message["public"] = reader.bytes();
break;
case 2:
message["private"] = reader.bytes();
break;
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
SenderSigningKey.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
SenderSigningKey.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
if (message["public"] != null && Object.prototype.hasOwnProperty.call(message,"public"))
if (!(message["public"] && typeof message["public"].length === "number" || $util.isString(message["public"])))
return "public: buffer expected";
if (message["private"] != null && Object.prototype.hasOwnProperty.call(message,"private"))
if (!(message["private"] && typeof message["private"].length === "number" || $util.isString(message["private"])))
return "private: buffer expected";
return null;
};
SenderSigningKey.fromObject = function fromObject(object) {
if (object instanceof $root.groupproto.SenderSigningKey)
return object;
var message = new $root.groupproto.SenderSigningKey();
if (object["public"] != null)
if (typeof object["public"] === "string")
$util.base64.decode(object["public"], message["public"] = $util.newBuffer($util.base64.length(object["public"])), 0);
else if (object["public"].length)
message["public"] = object["public"];
if (object["private"] != null)
if (typeof object["private"] === "string")
$util.base64.decode(object["private"], message["private"] = $util.newBuffer($util.base64.length(object["private"])), 0);
else if (object["private"].length)
message["private"] = object["private"];
return message;
};
SenderSigningKey.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.defaults) {
if (options.bytes === String)
object["public"] = "";
else {
object["public"] = [];
if (options.bytes !== Array)
object["public"] = $util.newBuffer(object["public"]);
}
if (options.bytes === String)
object["private"] = "";
else {
object["private"] = [];
if (options.bytes !== Array)
object["private"] = $util.newBuffer(object["private"]);
}
}
if (message["public"] != null && Object.prototype.hasOwnProperty.call(message,"public"))
object["public"] = options.bytes === String ? $util.base64.encode(message["public"], 0, message["public"].length) : options.bytes === Array ? Array.prototype.slice.call(message["public"]) : message["public"];
if (message["private"] != null && Object.prototype.hasOwnProperty.call(message,"private"))
object["private"] = options.bytes === String ? $util.base64.encode(message["private"], 0, message["private"].length) : options.bytes === Array ? Array.prototype.slice.call(message["private"]) : message["private"];
return object;
};
SenderSigningKey.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
return SenderSigningKey;
})();
groupproto.SenderKeyStateStructure = (function() {
function SenderKeyStateStructure(properties) {
this.senderMessageKeys = [];
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
SenderKeyStateStructure.prototype.senderKeyId = 0;
SenderKeyStateStructure.prototype.senderChainKey = null;
SenderKeyStateStructure.prototype.senderSigningKey = null;
SenderKeyStateStructure.prototype.senderMessageKeys = $util.emptyArray;
SenderKeyStateStructure.create = function create(properties) {
return new SenderKeyStateStructure(properties);
};
SenderKeyStateStructure.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.senderKeyId != null && Object.hasOwnProperty.call(message, "senderKeyId"))
writer.uint32(8).uint32(message.senderKeyId);
if (message.senderChainKey != null && Object.hasOwnProperty.call(message, "senderChainKey"))
$root.groupproto.SenderChainKey.encode(message.senderChainKey, writer.uint32(18).fork()).ldelim();
if (message.senderSigningKey != null && Object.hasOwnProperty.call(message, "senderSigningKey"))
$root.groupproto.SenderSigningKey.encode(message.senderSigningKey, writer.uint32(26).fork()).ldelim();
if (message.senderMessageKeys != null && message.senderMessageKeys.length)
for (var i = 0; i < message.senderMessageKeys.length; ++i)
$root.groupproto.SenderMessageKey.encode(message.senderMessageKeys[i], writer.uint32(34).fork()).ldelim();
return writer;
};
SenderKeyStateStructure.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
SenderKeyStateStructure.decode = function decode(reader, length) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.groupproto.SenderKeyStateStructure();
while (reader.pos < end) {
var tag = reader.uint32();
switch (tag >>> 3) {
case 1:
message.senderKeyId = reader.uint32();
break;
case 2:
message.senderChainKey = $root.groupproto.SenderChainKey.decode(reader, reader.uint32());
break;
case 3:
message.senderSigningKey = $root.groupproto.SenderSigningKey.decode(reader, reader.uint32());
break;
case 4:
if (!(message.senderMessageKeys && message.senderMessageKeys.length))
message.senderMessageKeys = [];
message.senderMessageKeys.push($root.groupproto.SenderMessageKey.decode(reader, reader.uint32()));
break;
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
SenderKeyStateStructure.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
SenderKeyStateStructure.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
if (message.senderKeyId != null && Object.prototype.hasOwnProperty.call(message,"senderKeyId"))
if (!$util.isInteger(message.senderKeyId))
return "senderKeyId: integer expected";
if (message.senderChainKey != null && Object.prototype.hasOwnProperty.call(message,"senderChainKey")) {
var signingKeyError = $root.groupproto.SenderSigningKey.verify(message.senderSigningKey);
if (signingKeyError)
return "senderSigningKey." + signingKeyError;
}
if (message.senderSigningKey != null && Object.prototype.hasOwnProperty.call(message,"senderSigningKey")) {
var keyError = $root.groupproto.SenderMessageKey.verify(message.senderMessageKeys[i]);
if (keyError)
return "senderMessageKeys[" + i + "]." + keyError;
}
if (message.senderMessageKeys != null && Object.prototype.hasOwnProperty.call(message,"senderMessageKeys")) {
if (!Array.isArray(message.senderMessageKeys))
return "senderMessageKeys: array expected";
for (var i = 0; i < message.senderMessageKeys.length; ++i) {
var error = $root.groupproto.SenderMessageKey.verify(message.senderMessageKeys[i]);
if (error)
return "senderMessageKeys." + error;
}
}
return null;
};
SenderKeyStateStructure.fromObject = function fromObject(object) {
if (object instanceof $root.groupproto.SenderKeyStateStructure)
return object;
var message = new $root.groupproto.SenderKeyStateStructure();
if (object.senderKeyId != null)
message.senderKeyId = object.senderKeyId >>> 0;
if (object.senderChainKey != null) {
if (typeof object.senderChainKey !== "object")
throw TypeError(".groupproto.SenderKeyStateStructure.senderChainKey: object expected");
message.senderChainKey = $root.groupproto.SenderChainKey.fromObject(object.senderChainKey);
}
if (object.senderSigningKey != null) {
if (typeof object.senderSigningKey !== "object")
throw TypeError(".groupproto.SenderKeyStateStructure.senderSigningKey: object expected");
message.senderSigningKey = $root.groupproto.SenderSigningKey.fromObject(object.senderSigningKey);
}
if (object.senderMessageKeys) {
if (!Array.isArray(object.senderMessageKeys))
throw TypeError(".groupproto.SenderKeyStateStructure.senderMessageKeys: array expected");
message.senderMessageKeys = [];
for (var i = 0; i < object.senderMessageKeys.length; ++i) {
if (typeof object.senderMessageKeys[i] !== "object")
throw TypeError(".groupproto.SenderKeyStateStructure.senderMessageKeys: object expected");
message.senderMessageKeys[i] = $root.groupproto.SenderMessageKey.fromObject(object.senderMessageKeys[i]);
}
}
return message;
};
SenderKeyStateStructure.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.arrays || options.defaults)
object.senderMessageKeys = [];
if (options.defaults) {
object.senderKeyId = 0;
object.senderChainKey = null;
object.senderSigningKey = null;
}
if (message.senderKeyId != null && Object.prototype.hasOwnProperty.call(message,"senderKeyId"))
object.senderKeyId = message.senderKeyId;
if (message.senderChainKey != null && Object.prototype.hasOwnProperty.call(message,"senderChainKey"))
object.senderChainKey = $root.groupproto.SenderChainKey.toObject(message.senderChainKey, options);
if (message.senderSigningKey != null && Object.prototype.hasOwnProperty.call(message,"senderSigningKey"))
object.senderSigningKey = $root.groupproto.SenderSigningKey.toObject(message.senderSigningKey, options);
if (message.senderMessageKeys && message.senderMessageKeys.length) {
object.senderMessageKeys = [];
for (var j = 0; j < message.senderMessageKeys.length; ++j)
object.senderMessageKeys[j] = $root.groupproto.SenderMessageKey.toObject(message.senderMessageKeys[j], options);
}
return object;
};
SenderKeyStateStructure.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
return SenderKeyStateStructure;
})();
groupproto.SenderKeyRecordStructure = (function() {
function SenderKeyRecordStructure(properties) {
this.senderKeyStates = [];
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
SenderKeyRecordStructure.prototype.senderKeyStates = $util.emptyArray;
SenderKeyRecordStructure.create = function create(properties) {
return new SenderKeyRecordStructure(properties);
};
SenderKeyRecordStructure.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.senderKeyStates != null && message.senderKeyStates.length)
for (var i = 0; i < message.senderKeyStates.length; ++i)
$root.groupproto.SenderKeyStateStructure.encode(message.senderKeyStates[i], writer.uint32(10).fork()).ldelim();
return writer;
};
SenderKeyRecordStructure.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
SenderKeyRecordStructure.decode = function decode(reader, length) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.groupproto.SenderKeyRecordStructure();
while (reader.pos < end) {
var tag = reader.uint32();
switch (tag >>> 3) {
case 1:
if (!(message.senderKeyStates && message.senderKeyStates.length))
message.senderKeyStates = [];
message.senderKeyStates.push($root.groupproto.SenderKeyStateStructure.decode(reader, reader.uint32()));
break;
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
SenderKeyRecordStructure.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
SenderKeyRecordStructure.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
if (message.senderKeyStates != null && Object.prototype.hasOwnProperty.call(message,"senderKeyStates")) {
if (!Array.isArray(message.senderKeyStates))
return "senderKeyStates: array expected";
for (var i = 0; i < message.senderKeyStates.length; ++i) {
var error = $root.groupproto.SenderKeyStateStructure.verify(message.senderKeyStates[i]);
if (error)
return "senderKeyStates." + error;
}
}
return null;
};
SenderKeyRecordStructure.fromObject = function fromObject(object) {
if (object instanceof $root.groupproto.SenderKeyRecordStructure)
return object;
var message = new $root.groupproto.SenderKeyRecordStructure();
if (object.senderKeyStates) {
if (!Array.isArray(object.senderKeyStates))
throw TypeError(".groupproto.SenderKeyRecordStructure.senderKeyStates: array expected");
message.senderKeyStates = [];
for (var i = 0; i < object.senderKeyStates.length; ++i) {
if (typeof object.senderKeyStates[i] !== "object")
throw TypeError(".groupproto.SenderKeyRecordStructure.senderKeyStates: object expected");
message.senderKeyStates[i] = $root.groupproto.SenderKeyStateStructure.fromObject(object.senderKeyStates[i]);
}
}
return message;
};
SenderKeyRecordStructure.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.arrays || options.defaults)
object.senderKeyStates = [];
if (message.senderKeyStates && message.senderKeyStates.length) {
object.senderKeyStates = [];
for (var j = 0; j < message.senderKeyStates.length; ++j)
object.senderKeyStates[j] = $root.groupproto.SenderKeyStateStructure.toObject(message.senderKeyStates[j], options);
}
return object;
};
SenderKeyRecordStructure.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
return SenderKeyRecordStructure;
})();
return groupproto;
})();
module.exports = $root;