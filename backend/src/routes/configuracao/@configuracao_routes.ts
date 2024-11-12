import { cadastro_usuario } from "./cadastro_usuario"
import { server } from '../../server'
import { atualizar_senha } from "./atualiza_senha"


export const configuracao_routes = async() => {
    server.register(cadastro_usuario)
    server.register(atualizar_senha)
}