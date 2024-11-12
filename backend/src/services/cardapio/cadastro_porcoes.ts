// import { conexao } from "../../bd_config/conexao"


// interface dados_usuario{
//     categoria: string,
//     descricao: string
 
// }
// let resposta = ""


// class cadastro_porcoes{
//     async execute({ categoria, descricao }: dados_usuario){

//         console.log(categoria, descricao)
//         const query_pesq = "SELECT * FROM porcoes WHERE descricao =? "

//         const [resultado_pesq]: any = await conexao.execute(query_pesq,[descricao])
//         const pesq= resultado_pesq[0]

//         if (pesq) { 
//           return { mensagem: "Porção já cadastrado" };
//         }
//         const query = "INSERT INTO porcoes (categoria, descricao) VALUES (?, ?)"
//         await conexao.execute(query, [categoria, descricao])
//         resposta = "Porção Cadastrada com Sucesso"

//         return (resposta)
//     }
    
// }

// export { cadastro_porcoes }






// import { conexao } from "../../bd_config/conexao"


// interface dados_cadastro{
//     segmento: string,
//     categoria: string,
//     nome_prato: string,
//     valor: number
// }

// let resposta: string =""

// class cadastro_cardapio{
//     async execute({ segmento, categoria, nome_prato, valor}: dados_cadastro){
//         const query = ' INSERT INTO cardapio (segmento, categoria, nome_prato, valor) VALUES (?, ?, ?, ?)'

//         try{
//             const [ resultado] = await conexao.execute(query, [segmento, categoria, nome_prato, valor])
//         console.log("Prato Cadatrado com sucesso")
//         } catch{
//             console.error("erro ao criar o prato do cardapio")
//             throw new Error("Erro ao cadastrar")
//         }
//         return (resposta)
//     }
// }

// export { cadastro_cardapio }