import { server } from '../../server'
import { atualiza } from './atualiza'
import { cadastro } from './cadastro'
import { exclusao } from './exclusao'

export const clientes_routes = async() => {
    server.register(cadastro)
    server.register(exclusao)
    server.register(atualiza)
}