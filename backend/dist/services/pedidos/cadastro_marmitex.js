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
exports.pedido_marmitex = void 0;
const conexao_1 = require("../../bd_config/conexao");
class pedido_marmitex {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_cliente, segmento, pedido, observacao, valor, dia, situacao, receber, }) {
            const query_pedido = "INSERT INTO pedidos (id_cliente, segmento, pedido, observacao, valor, dia, situacao) VALUES (?, ?, ?, ?, ?, ?, ?)";
            const query_pagar = "INSERT INTO receber (id_pedido, id_cliente, segmento, data_venda, valor, situacao) VALUES (?, ?, ?, ?, ?, ?)";
            const conn = yield conexao_1.conexao.getConnection();
            try {
                // Inserindo o pedido no banco de dados
                const [resultado_pedido] = yield conn.execute(query_pedido, [
                    id_cliente,
                    segmento,
                    pedido,
                    observacao,
                    valor,
                    dia,
                    situacao,
                ]);
                const pedidoId = resultado_pedido.insertId;
                // Inserindo os dados na tabela "receber"
                yield conn.execute(query_pagar, [
                    pedidoId,
                    receber.id_cliente,
                    receber.segmento,
                    receber.dia,
                    receber.valor,
                    receber.situacaof,
                ]);
                yield conn.commit();
                return { mensagem: "Pedido cadastrado com sucesso!" };
            }
            catch (error) {
                yield conn.rollback();
                console.error("Erro ao cadastrar pedido:", error);
                throw new Error("Erro no cadastro do pedido");
            }
            finally {
                conn.release();
            }
        });
    }
}
exports.pedido_marmitex = pedido_marmitex;
// import { conexao } from "../../bd_config/conexao"
// interface dados_cadastro {
//     id_cliente: number,
//     segmento: string,
//     pedido: string,
//     observacao: string,
//     valor: number,
//     dia: string,
//     situacao: string,
//     receber:{
//     id_cliente: number, 
//     valor: number,
//     dia: string,
//     segmento:string,
//     situacaof: string
// }
// }
// class pedido_marmitex{
//     async execute({ id_cliente, segmento, pedido, observacao, valor, dia, situacao, receber }: dados_cadastro):  Promise<{ mensagem: string, id_cliente?: number }>{
//         const query_pesq = "SELECT * FROM pedidos WHERE id_cliente =? and dia=?"
//        const query_pedido = ' INSERT INTO pedidos (id_cliente, segmento ,pedido, observacao, valor, dia, situacao) VALUES (?, ?, ?, ?, ?, ?, ?)'
//         const query_pagar = ' INSERT INTO receber (id_pedido, id_cliente, segmento, data_venda, valor, situacao ) VALUES (?, ?, ?, ?, ?, ?)'
//         const [resultado_pesq]: any = await conexao.execute(query_pesq,[id_cliente, dia])
//         const pesq= resultado_pesq[0]
//         if (pesq) {   
//           console.log("ok")
//             return { mensagem: `Pedido realizado com sucesso` };
//           }
//            const conn = await conexao.getConnection()
//         try{
//             const [resultado_pedido]:any = await conexao.execute(query_pedido, [id_cliente, segmento, pedido, observacao, valor, dia, situacao])
//             const pedidoId = resultado_pedido.insertId
//             await conn.execute(query_pagar,[pedidoId, receber.id_cliente, receber.segmento, receber.dia, receber.valor, receber.situacaof])
//             await conn.commit()
//             return {mensagem: 'Pedido cadastrados com sucesso!'}
//         } catch (error) {
//           await conn.rollback()
//           console.error('Erro ao cadastrar pedido:', error);
//           throw new Error('Erro no cadastro do pedido');
// } finally{
//   conn.release()
// }
// } 
// }
// export { pedido_marmitex }
