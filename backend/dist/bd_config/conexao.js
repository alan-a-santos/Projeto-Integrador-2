"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conexao = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};
if (!config.host || !config.user || !config.password || !config.database) {
    throw new Error("Configuração do banco de dados está incompleta. Verifique as variáveis de ambiente.");
}
const conexao = promise_1.default.createPool(config);
exports.conexao = conexao;
conexao.getConnection()
    .then(() => console.log("Banco de dados conectado"))
    .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
    process.exit(1); // Encerra o processo em caso de erro
});
