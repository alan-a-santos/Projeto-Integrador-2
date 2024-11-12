import { conexao } from "../../bd_config/conexao"


interface dados_usuario{
    usuario: string,
    senha: string
}
let resposta = ""

class novo_usuario{
    async execute({ usuario, senha }: dados_usuario){
        const query_pesq = "SELECT * FROM usuarios WHERE usuario =? "
        
        const [resultado_pesq]: any = await conexao.execute(query_pesq,[usuario])
        const pesq= resultado_pesq[0]

        if (pesq) { 
          return("Cliente já cadastrado" );
       
        }
        const query = "INSERT INTO usuarios (usuario, senha) VALUES (?, ?)"
        await conexao.execute(query, [usuario, senha])
        

        return ("Usuário cadastrado com sucesso" )
    }
    
}

export { novo_usuario }