import fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";

export const server = fastify({ logger: false})

server.register(cors, {
    origin: '*'  // Permitir todas as origens. Ajuste conforme necessário.
  });

server.register(routes)

const start = async() =>{
    try{
        await server.listen({ port: 3001, host: '0.0.0.0' });
        console.log("Servidor Conectado")
    } catch (err){
        console.error("Erro ao iniciar o servidor:", err);
        process.exit(1)
    }
}

start()