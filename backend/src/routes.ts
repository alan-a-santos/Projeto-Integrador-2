import { cardapio_routes } from "./routes/cardapio/@cardapio_routes"
import { clientes_routes } from "./routes/clientes/@clientes_routes"
import { configuracao_routes } from "./routes/configuracao/@configuracao_routes"
import { login_routes } from "./routes/login/@login_routes"
import { pedidos_routes } from "./routes/pedidos/@pedidos_routes"
import { servicos_diversos_routes } from "./routes/servicos_diversos/@servicos_diversos_routes"
import { server } from "./server"


export const routes = async() => {
    server.register(login_routes)
    server.register(configuracao_routes)
    server.register(clientes_routes)
    server.register(cardapio_routes)
    server.register(pedidos_routes)
    server.register(servicos_diversos_routes)
}

