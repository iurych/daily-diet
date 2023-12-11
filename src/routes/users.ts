import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export const usersRoutes = async (app: FastifyInstance) => {
  app.post('/users', async (request: FastifyRequest, reply: FastifyReply) => {
    
  })
}