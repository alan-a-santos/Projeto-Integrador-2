import { server } from "../../server"

import { finailza_pedido } from "./finaliza_pedido"
import { informacao_cliente } from "./informacao_cliente"
import { lista_clientes } from "./lista_clientes"
import { lista_devedores } from "./lista_devedores"
import { lista_fitness } from "./lista_fitness"
import { lista_ofertas } from "./lista_ofertas"
import { lista_pedidos } from "./lista_pedidos"
import { lista_porcoes } from "./lista_pratos"
import { lista_situacao } from "./lista_situacao"
import { nomes_devedores } from "./nomes_devedores"
import { pedido_informacao_cliente } from "./pedido_informacao_cliente"
import { pgto_total } from "./pgto_total"




export const servicos_diversos_routes = async() => {
    server.register(lista_clientes)
    server.register(informacao_cliente)
    server.register(pedido_informacao_cliente)
    server.register(finailza_pedido)
    server.register(lista_porcoes)
    server.register( lista_ofertas )
    server.register(lista_fitness)
    server.register(lista_situacao)
    server.register(lista_devedores)
    server.register(lista_pedidos)
    server.register(pgto_total)
    server.register(nomes_devedores)
}