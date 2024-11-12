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
exports.login_routes = void 0;
const login_1 = require("./login");
const server_1 = require("../../server");
const login_routes = () => __awaiter(void 0, void 0, void 0, function* () {
    server_1.server.register(login_1.login);
});
exports.login_routes = login_routes;
// class registro_usuario{
//     async execute({nome, nascimento, celular, cpf, email, cadastro,  cep, endereco, numero, complemento, bairro, cidade, observacao}:dados_cadastro){
//          const query= 'INSERT INTO clientes (nome, nascimento, celular,  cpf, email, cadastro, cep, observacao,  endereco, numero, complemento, bairro, cidade) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
//     try {
//         const [result] = await conexao.execute(query, [nome,  nascimento, celular,  cpf,  email, cadastro, cep, observacao,  endereco, numero, complemento, bairro, cidade]);
//         console.log('Cliente cadastrado com sucesso!', result);
//         resposta = "Cliente cadastrado com sucesso"
//   } catch (error) {
//         console.error('Erro ao cadastrar cliente:', error);
//         throw new Error('Erro no cadastro');
//   }
//   return (resposta)
// }
// }
