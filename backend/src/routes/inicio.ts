import { server } from "../server";
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export async function inicio(fastify: FastifyInstance) {
    server.get('/', async (request:FastifyRequest, reply:FastifyReply) => {
      reply.send({ message: 'Servidor funcionando corretamente!' });
    });
  }