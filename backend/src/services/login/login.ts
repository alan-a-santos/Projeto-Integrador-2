  import { conexao } from '../../bd_config/conexao';

  interface dados_acesso {
      usuario: string;
      senha: string;
  }
  let resposta: string = "";
  class login_usuario {
      async execute({ usuario, senha }: dados_acesso) {
          const query = "SELECT * FROM usuarios WHERE usuario = ?";
              const [pesq]: any = await conexao.execute(query,[usuario]);
              const user = pesq[0]

              if (user.senha == senha){
                resposta="Autorizado"
              }else{
                resposta = "Negado"
              }                   
              return resposta
        }}
  export { login_usuario };
