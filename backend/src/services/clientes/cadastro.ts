import { conexao} from '../../bd_config/conexao'

interface dados_cadastro{
    nome:string, nascimento:string, tipo:string, cpf:string ,cadastro:string, observacao:string
    contatos:{email:string , telefone:string}
    endereco:{cep: string, rua:string, numero:string, complemento:string, bairro:string, cidade:string} 
}

class registro_usuario{
    async execute({nome, nascimento, tipo, cpf, cadastro, observacao,contatos, endereco}:dados_cadastro):  Promise<{ mensagem: string, id_cliente?: number }>{
       
          const query_pesq = "SELECT * FROM clientes WHERE nome =? "        
         const query_cliente= 'INSERT INTO clientes (nome, nascimento, tipo , cpf, cadastro, observacao) VALUES (?, ?, ?, ?, ?, ? )'       
         const query_endereco= 'INSERT INTO endereco (id_cliente, cep, rua, numero, complemento, bairro, cidade) VALUES (?, ?, ?, ?, ?, ?, ? )'       
         const query_contato= 'INSERT INTO contatos (id_cliente,email, telefone) VALUES (?, ?,?  )'       
         
         const [resultado_pesq]: any = await conexao.execute(query_pesq,[nome])
        const pesq= resultado_pesq[0]

        if (pesq) { 
          return { mensagem: "Cliente já cadastrado" };
        }
         const conn = await conexao.getConnection()
        try {    

        conn.beginTransaction()

        const [resultado_cliente]: any = await conn.execute(query_cliente, [nome,  nascimento, tipo,  cpf,  cadastro, observacao]);
        const clienteId= resultado_cliente.insertId

        await conn.execute(query_endereco,[clienteId, endereco.cep, endereco.rua, endereco.numero, endereco.complemento, endereco.bairro, endereco.cidade])

        await conn.execute(query_contato,[clienteId, contatos.email, contatos.telefone])

        await conn.commit()

        return {mensagem: 'Cliente, endereço e contatos cadastrados com sucesso!'}

          } catch (error) {
            await conn.rollback()
            console.error('Erro ao cadastrar cliente, endereço ou contatos:', error);
            throw new Error('Erro no cadastro completo');
  } finally{
    conn.release()
  }
} 
}
export { registro_usuario }
