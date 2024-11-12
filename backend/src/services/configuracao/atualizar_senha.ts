import { conexao } from "../../bd_config/conexao"


interface dados_usuario{
    usuario: string,
    senha: string
}


class atualizar_senha{
    async execute({ usuario, senha }: dados_usuario){
        const query_pesq = "SELECT * FROM usuarios WHERE usuario =? "
        const queryupdate = 'UPDATE usuarios SET senha=? WHERE usuario=?'

        const [resultado_pesq]: any = await conexao.execute(query_pesq,[usuario])
        const user= resultado_pesq[0]

        if (!user) { 
            return("Usuário não localizado" );
          }

       const conn = await conexao.getConnection()

       try{
            conn.beginTransaction()

            await conn.execute(queryupdate, [senha, usuario])
            await conn.commit()
             return ('Senha alterada com sucesso!!!')
           
       } catch (error){
            await conn.rollback()
            console.error("Erro na alteração da senha")
            throw new Error("Erro ao alterar senha")
            
       } finally{
            await conn.release()
       }
      
    }
   
}

export { atualizar_senha }