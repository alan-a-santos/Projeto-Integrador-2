import { conexao } from "../../bd_config/conexao";

interface dados_alteracao {
    id: number,
    segmento?: string,
    pedido?: string,
    observacao?: string,
    valor?: number,
   
    situacao?: string,
    
}

class atualiza_pedido {
    async update({ id, segmento, pedido, observacao, valor, situacao }: dados_alteracao): Promise<{ mensagem: string }> {
        
        // Atualização do pedido
        const query_update_pedido = `UPDATE pedidos SET segmento = COALESCE(?, segmento),  pedido = COALESCE(?, pedido),  observacao = COALESCE(?, observacao), 
                valor = COALESCE(?, valor),  situacao = COALESCE(?, situacao)  WHERE id = ?`

        const query_update_receber = `UPDATE receber  SET valor = COALESCE(?, valor) WHERE id_pedido = ? `

        // Atualização na tabela receber, se necessário
        let mensagem = "Pedido atualizado com sucesso!";
        try {
            // Atualiza o pedido
            await conexao.execute(query_update_pedido, [segmento, pedido, observacao, valor, situacao, id]);
            await conexao.execute(query_update_receber, [ valor,  id]);
      

            return { mensagem };

        } catch (error) {
            console.error('Erro ao atualizar pedido:', error);
            throw new Error('Erro na atualização do pedido');
        }
    } 
}

export { atualiza_pedido }
''