"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("@fastify/cors"));
exports.server = (0, fastify_1.default)({ logger: true });
exports.server.register(cors_1.default, {
    origin: '*' // Permitir todas as origens. Ajuste conforme necessário.
});
exports.server.register(routes_1.routes);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const port = Number(process.env.PORT) || 80;
        yield exports.server.listen({ port, host: '0.0.0.0' });
        console.log('Servidor Conectado');
    }
    catch (err) {
        exports.server.log.error('Erro ao iniciar o servidor:', err);
        process.exit(1);
    }
});
start();
