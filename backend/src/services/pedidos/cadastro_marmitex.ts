import { conexao } from "../../bd_config/conexao"

interface dados_cadastro {
  id_cliente: number;
  segmento: string;
  pedido: string;
  observacao: string;
  valor: number;
  dia: string;
  situacao: string;
  receber: {
    id_cliente: number;
    valor: number;
    dia: string;
    segmento: string;
    situacaof: string;
  };
}

class pedido_marmitex {
  async execute({
    id_cliente,
    segmento,
    pedido,
    observacao,
    valor,
    dia,
    situacao,
    receber,
  }: dados_cadastro): Promise<{ mensagem: string; id_cliente?: number }> {
    const query_pedido =
      "INSERT INTO pedidos (id_cliente, segmento, pedido, observacao, valor, dia, situacao) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const query_pagar =
      "INSERT INTO receber (id_pedido, id_cliente, segmento, data_venda, valor, situacao) VALUES (?, ?, ?, ?, ?, ?)";

    const conn = await conexao.getConnection();

    try {
      // Inserindo o pedido no banco de dados
      const [resultado_pedido]: any = await conn.execute(query_pedido, [
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
      await conn.execute(query_pagar, [
        pedidoId,
        receber.id_cliente,
        receber.segmento,
        receber.dia,
        receber.valor,
        receber.situacaof,
      ]);

      await conn.commit();

      return { mensagem: "Pedido cadastrado com sucesso!" };
    } catch (error) {
      await conn.rollback();
      console.error("Erro ao cadastrar pedido:", error);
      throw new Error("Erro no cadastro do pedido");
    } finally {
      conn.release();
    }
  }
}

export { pedido_marmitex };


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