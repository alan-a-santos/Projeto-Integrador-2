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
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizar_senha = void 0;
const atualiza_senha_1 = require("../../controllers/configuracao/atualiza_senha");
const atualizar_senha = (route) => __awaiter(void 0, void 0, void 0, function* () {
    route.put("/configuracao/atualiza_senha", (request, replay) => {
        return new atualiza_senha_1.atualizar_senha_controller().handle(request, replay);
    });
});
exports.atualizar_senha = atualizar_senha;
