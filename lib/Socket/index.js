"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
const Defaults_1 = require("../Defaults")
const business_1 = require("./business")
const makeWASocket = (config) => (business_1.makeBusinessSocket({
...Defaults_1.DEFAULT_CONNECTION_CONFIG,
...config
}))
exports.default = makeWASocket