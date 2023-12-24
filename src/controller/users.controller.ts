import { FastifyReply, FastifyRequest } from 'fastify'

export const userControllers = (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  return reply.send()
}
