import { conexao } from "../../bd_config/conexao";



class lista_porcoes{
    async execute(categoria:string, segmento:string){

        const query = 'SELECT * FROM cardapio  WHERE categoria =? and segmento=? order by nome_prato'
        
        const [porcoes] = await conexao.execute(query,[categoria, segmento])
        return porcoes
    }
}

export { lista_porcoes }