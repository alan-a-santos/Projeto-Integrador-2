import { conexao } from "../../bd_config/conexao"


interface dados_cadastro{
    segmento: string,
    nome_prato: string,
    valor: number,
    data: string,
    categoria: string
}

let resposta: string = ""

class oferta_cardapio{
    async execute({ segmento,  categoria, nome_prato, data, valor}: dados_cadastro){

       
        const query_pesq = "SELECT * FROM ofertas WHERE nome_prato =? and data=?"

        const [resultado_pesq]: any = await conexao.execute(query_pesq,[nome_prato, data])
        const pesq= resultado_pesq[0]
   
        if (pesq) { 
          return { mensagem: `Prato "${nome_prato}" já disponível para oferta no dia "${data}` };
        }

        const query = 'INSERT INTO ofertas (segmento, categoria,  nome_prato, data, valor) VALUES (?, ?, ?, ?, ?)'
        await conexao.execute(query,[ segmento, categoria, nome_prato, data, valor])
            
            resposta="Oferta efetuada com sucesso"    
        return { mensage: resposta}
    }
}

export { oferta_cardapio }