"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conexao = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const conexao = promise_1.default.createPool({
    host: "localhost",
    user: "root",
    password: "aas798118",
    database: "integrador_ii"
});
exports.conexao = conexao;
console.log("Banco de dados conectado");
