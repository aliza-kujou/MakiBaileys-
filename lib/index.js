"use strict";
const reset = '\x1b[0m';
const green = '\x1b[92m';
const yellow = '\x1b[93m';
const cyan = '\x1b[96m';
const white = '\x1b[97m';
const bold = '\x1b[1m';
const red = '\x1b[31m';

console.log(`
${red}${bold}INICIANDO PROTOCOLO DE INSTALACIÓN CON MAKI BSILEYS 

• El mejor baileys del Mundo 🗿🍷 - ${reset}


${yellow}${bold}          ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
${yellow}${bold}      ▄█▀▀░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▀█▄
${yellow}${bold}    ▄█░░░░░░░░░▀█▄
${yellow}${bold}   █▀░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▀█
${yellow}${bold}  █░░░░▄▀▀▀▀▀▀▀▀▄░░░░░░░░░░░░░░░░░█
${yellow}${bold} █░░░░░░▄▀▀░░░░░░░░░░▀▄░░░░░░░░░█
${yellow}${bold} █░░░░░░░░░░░▄▀░░░░░░░░░░░░░░▀▄░░░░░░░░░░░░░░░░░█
${yellow}${bold} █░░░░░░░░░▄▀░░░░░░░░░░░░░░░░░░▀▄░░░░░░░░░░░█
${yellow}${bold} █░░░░░░░░░░░█░░░░░░░░░░░░░░█
${yellow}${bold} █░░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░█░░░░░░░░░░░░░░█
${yellow}${bold} █░░░░░░░░░▀▄░░░░░░▄▀░░░░░░░░░█
${yellow}${bold}  █░░░░░░░░░░▀▄░░░░░░░░░░░░░░▄▀░░░░░░░░░░░░░░░█
${yellow}${bold}   █▄░░░░░░░░░░▀▄░░░░░░░░░░░░░░▄█
${yellow}${bold}    ▀█▄░░░░░░░░░░░▀▄░░░░░▄▀░░░░░░░░░░░░░░░▄█▀
${yellow}${bold}      ▀█▄░░░░░░░░░░░░▀▄░▄▀░░░░░░░░░░░░░░▄█▀
${yellow}${bold}        ▀█▄▄░░░░░░░░░░░░▀░░░░░░░░░░░░▄▄█▀
${yellow}${bold}           ▀▀█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█▀▀
${reset}

${white} © 2025 ${yellow}Ado${reset}
${white}Github : ${yellow}Aliza-Kojou - new version the baileys MD${reset}
`);

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
var desc = Object.getOwnPropertyDescriptor(m, k);
if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
desc = { enumerable: true, get: function() { return m[k]; } };
}
Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proto = exports.makeWASocket = void 0;
const WAProto_1 = require("../WAProto");
Object.defineProperty(exports, "proto", { enumerable: true, get: function () { return WAProto_1.proto; } });
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);
exports.default = Socket_1.default;
