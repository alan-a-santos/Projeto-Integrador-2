import { login } from "./login"
import { server } from '../../server'


export const login_routes = async() => {
    server.register(login)
}

// class registro_usuario{
//     async execute({nome, nascimento, celular, cpf, email, cadastro,  cep, endereco, numero, complemento, bairro, cidade, observacao}:dados_cadastro){
//          const query= 'INSERT INTO clientes (nome, nascimento, celular,  cpf, email, cadastro, cep, observacao,  endereco, numero, complemento, bairro, cidade) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'

              
//     try {
//         const [result] = await conexao.execute(query, [nome,  nascimento, celular,  cpf,  email, cadastro, cep, observacao,  endereco, numero, complemento, bairro, cidade]);
//         console.log('Cliente cadastrado com sucesso!', result);
//         resposta = "Cliente cadastrado com sucesso"
//   } catch (error) {
//         console.error('Erro ao cadastrar cliente:', error);
//         throw new Error('Erro no cadastro');
        
//   }

//   return (resposta)
// }

// }