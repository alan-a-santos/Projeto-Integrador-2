import { server } from "../../server"

import { cadastro_pratos } from "./cadastro_pratos"
import { oferta_cardapio } from "./oferta_cardapio"


export const cardapio_routes = async() => {
    server.register(cadastro_pratos)
 
    server.register(oferta_cardapio)
}