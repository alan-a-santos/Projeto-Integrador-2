import { conexao } from "../../bd_config/conexao";


interface data{
    data: string
}

class lista_ofertas {
    async execute() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Ajuste para mês (0-11) e formatação
        const day = String(today.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        const query = 'SELECT nome_prato, id, valor FROM ofertas WHERE data = ? and segmento = "Marmitex"';
       
        // Executa a consulta usando a data do dia
        const [porcoes] = await conexao.execute(query, [formattedDate]);
        return porcoes;
    }
}
export { lista_ofertas }