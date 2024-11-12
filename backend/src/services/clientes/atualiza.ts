import { conexao } from '../../bd_config/conexao'

interface dados_cadastro {
    id: number,
    nome: string, 
    nascimento: string, 
    tipo: string, 
    cpf: string, 
    cadastro: string, 
    observacao: string,
    contatos: { email: string, telefone: string },
    endereco: { cep: string, rua: string, numero: string, complemento: string, bairro: string, cidade: string } 
}

function formatDateToInput(dateString: string): string {
    // Formata a data para "yyyy-mm-dd" para uso no campo de data
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}
class atualiza_cadastro {

    sanitizeInput(value: any) {
        return value === undefined ? null : value;
    }

    async execute({ nome, nascimento, tipo, cpf, id, observacao, contatos, endereco }: dados_cadastro): Promise<{ mensagem: string }> {
        const queryPesq = "SELECT * FROM clientes LEFT JOIN endereco ON clientes.id = endereco.id_cliente LEFT JOIN contatos ON clientes.id = contatos.id_cliente WHERE clientes.id = ?";
        const [resultadoPesq]: any = await conexao.execute(queryPesq, [id]);
        const clienteAtual = resultadoPesq[0];

        if (!clienteAtual) {
            return { mensagem: "Cliente não encontrado" };
        }

        const conn = await conexao.getConnection();
        try {
            await conn.beginTransaction();

            await this.atualizarCliente(conn, clienteAtual, { nome, nascimento, tipo, cpf, observacao, id });
            await this.atualizarEndereco(conn, clienteAtual, endereco, id);
            await this.atualizarContatos(conn, clienteAtual, contatos, id);

            await conn.commit();

            return { mensagem: 'Cliente, endereço e contatos atualizados com sucesso!' };

        } catch (error) {
            await conn.rollback();
            console.error('Erro ao atualizar cliente, endereço ou contatos:', error);
            throw new Error('Erro na atualização completa');
        } finally {
            await conn.release();
        }
    }

    private async atualizarCliente(conn: any, clienteAtual: any, dadosCliente: any) {
        let query = 'UPDATE clientes SET ';
        let campos: any[] = [];

        if (dadosCliente.nome !== clienteAtual.nome) {
            query += 'nome=?, ';
            campos.push(this.sanitizeInput(dadosCliente.nome));
        }
        if (dadosCliente.nascimento !== clienteAtual.data_nascimento) {
            query += 'nascimento=?, ';
            campos.push(formatDateToInput(this.sanitizeInput(dadosCliente.nascimento)));
        }
        if (dadosCliente.tipo !== clienteAtual.tipo) {
            query += 'tipo=?, ';
            campos.push(this.sanitizeInput(dadosCliente.tipo));
        }
        if (dadosCliente.cpf !== clienteAtual.cpf) {
            query += 'cpf=?, ';
            campos.push(this.sanitizeInput(dadosCliente.cpf));
        }
        if (dadosCliente.observacao !== clienteAtual.observacao) {
            query += 'observacao=?, ';
            campos.push(this.sanitizeInput(dadosCliente.observacao));
        }

        if (campos.length > 0) {
            query = query.slice(0, -2) + ' WHERE id=?';
            campos.push(dadosCliente.id);
            await conn.execute(query, campos);
        }
    }

    private async atualizarEndereco(conn: any, clienteAtual: any, endereco: any, id: number) {
        let query = 'UPDATE endereco SET ';
        let campos: any[] = [];

        if (endereco.cep !== clienteAtual.cep) {
            query += 'cep=?, ';
            campos.push(this.sanitizeInput(endereco.cep));
        }
        if (endereco.rua !== clienteAtual.rua) {
            query += 'rua=?, ';
            campos.push(this.sanitizeInput(endereco.rua));
        }
        if (endereco.numero !== clienteAtual.numero) {
            query += 'numero=?, ';
            campos.push(this.sanitizeInput(endereco.numero));
        }
        if (endereco.complemento !== clienteAtual.complemento) {
            query += 'complemento=?, ';
            campos.push(this.sanitizeInput(endereco.complemento));
        }
        if (endereco.bairro !== clienteAtual.bairro) {
            query += 'bairro=?, ';
            campos.push(this.sanitizeInput(endereco.bairro));
        }
        if (endereco.cidade !== clienteAtual.cidade) {
            query += 'cidade=?, ';
            campos.push(this.sanitizeInput(endereco.cidade));
        }

        if (campos.length > 0) {
            query = query.slice(0, -2) + ' WHERE id_cliente=?';
            campos.push(id);
            await conn.execute(query, campos);
        }
    }

    private async atualizarContatos(conn: any, clienteAtual: any, contatos: any, id: number) {
        let query = 'UPDATE contatos SET ';
        let campos: any[] = [];

        if (contatos.email !== clienteAtual.email) {
            query += 'email=?, ';
            campos.push(this.sanitizeInput(contatos.email));
        }
        if (contatos.telefone !== clienteAtual.telefone) {
            query += 'telefone=?, ';
            campos.push(this.sanitizeInput(contatos.telefone));
        }

        if (campos.length > 0) {
            query = query.slice(0, -2) + ' WHERE id_cliente=?';
            campos.push(id);
            await conn.execute(query, campos);
        }
    }
}

export { atualiza_cadastro };



// import { conexao} from '../../bd_config/conexao'

// interface dados_cadastro{ id:number,
//     nome:string, nascimento:string, tipo:string, cpf:string ,cadastro:string, observacao:string
//     contatos:{email:string , telefone:string}
//     endereco:{cep: string, rua:string, numero:string, complemento:string, bairro:string, cidade:string} 
// }

// class atualiza_cadastro{
//     async execute({nome, nascimento, tipo, cpf, id, observacao,contatos, endereco}:dados_cadastro):  Promise<{ mensagem: string, id_cliente?: number }>{
       
//           const query_pesq = "SELECT * FROM clientes WHERE id_cliente =?"        
//          const query_cliente= 'UPDATE clientes SET nome=?, data_nascimento=?, tipo=?, cpf=?, observacao=? WHERE id_cliente =?'
//         //  'INSERT INTO clientes (nome_cliente, data_nascimento, tipo_pessoa, cpf, data_cadastro, observacao) VALUES (?, ?, ?, ?, ?, ? )'       
//          const query_endereco='UPDATE endereco SET cep=?, rua=?, numero=?, complemento =?, bairro=?, cidade=? WHERE id_cliente =?'
//         //   'INSERT INTO endereco (id_cliente, cep, rua, numero, complemento, bairro, cidade) VALUES (?, ?, ?, ?, ?, ?, ? )'       
//          const query_contato='UPDATE contato SET email=?, telefone=? WHERE id_cliente =?'
//         //   'INSERT INTO contatos (id_cliente,email, telefone) VALUES (?, ?,?  )'       
         
//          const [resultado_pesq]: any = await conexao.execute(query_pesq,[id])
//         const pesq= resultado_pesq[0]

//         if (!pesq) { // Se já existe um cliente com esse CPF
//           return { mensagem: "Cliente não encontrado" };
//         }
//          const conn = await conexao.getConnection()
//         try {    

//         conn.beginTransaction()

//         const [resultado_cliente]: any = await conn.execute(query_cliente, [nome,  nascimento, tipo,  cpf,   observacao, id]);
//         const clienteId= resultado_cliente.insertId

//         await conn.execute(query_endereco,[endereco.cep, endereco.rua, endereco.numero, endereco.complemento, endereco.bairro, endereco.cidade, id])

//         await conn.execute(query_contato,[ contatos.email, contatos.telefone, id])

//         await conn.commit()

//         return {mensagem: 'Cliente, endereço e contatos atualizados com sucesso!'}

//           } catch (error) {
//             await conn.rollback()
//             console.error('Erro ao cadastrar cliente, endereço ou contatos:', error);
//             throw new Error('Erro no cadastro completo');
//   } finally{
//     conn.release()
//   }
// } 
// }
// export { atualiza_cadastro }


















// interface dados_cadastro{
//     nome:string, nascimento:string, celular:string, cpf:string ,email:string ,cadastro:string,  cep: string, endereco:string, numero:string, complemento:string, bairro:string, cidade:string, observacao:string ,  id: string
// }

// let resposta:string

// class atualiza_cadastro{
//     async execute({nome, nascimento, celular, cpf, email, cadastro,  cep, endereco, numero, complemento, bairro, cidade, observacao,id}:dados_cadastro){
//          const query= "UPDATE clientes  SET nome = ?, nascimento = ?, celular = ?, cpf = ?, email = ?, cadastro = ?, cep = ?, observacao = ?, endereco = ?, numero = ?, complemento = ?, bairro = ?, cidade = ? WHERE id = ?"

//          const params = [nome, nascimento, celular, cpf, email, cadastro, cep, observacao, endereco, numero, complemento, bairro, cidade, id];     
//     try {
//         const [result] =await conexao.execute(query, params);
//         console.log('Cliente cadastrado com sucesso!', result);
//         resposta = "Cliente cadastrado com sucesso"
//   } catch (error) { 
//         console.error('Erro ao cadastrar cliente:', error);
//         throw new Error('Erro no cadastro');
        
//   }

//   return (resposta)
// }

// }

// export { atualiza_cadastro }