import { server } from "../../server"
import { atualiza_pedido } from "./atualiza_pedido"
import { cadastro_marmitex } from "./cadastro_marmitex"
import { painel } from "./painel"
import { pedico_consulta } from "./pedido_consulta"
import { pedido_finalizado } from "./pedido_finalizado"


export const pedidos_routes = async() => {
    server.register(cadastro_marmitex)
    server.register(painel)
    server.register(atualiza_pedido)
    server.register(pedido_finalizado)
    server.register(pedico_consulta)
}