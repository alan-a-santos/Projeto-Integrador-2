import { conexao } from "../../bd_config/conexao"


interface dados_usuario{
    segmento: string,
    categoria: string,
    nome_prato: string,
   
 
}
let resposta = ""

class cadastro_cardapio{ 
    async execute({ segmento, categoria, nome_prato }: dados_usuario){
        const query_pesq = "SELECT * FROM cardapio WHERE nome_prato =? "

        const [resultado_pesq]: any = await conexao.execute(query_pesq,[nome_prato])
        const pesq= resultado_pesq[0]

        if (pesq) { 
          return ( `Prato "${nome_prato}" já cadastrado` )
        }
        const query = "INSERT INTO cardapio (segmento, categoria, nome_prato) VALUES (?, ?, ?)"
        await conexao.execute(query, [segmento, categoria, nome_prato])
        resposta = "Prato Cadastrado com Sucesso"

        return (resposta)
    }
    
}

export { cadastro_cardapio }

