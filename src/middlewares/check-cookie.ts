import { FastifyReply, FastifyRequest } from 'fastify'

export const checkSessionIdExist = async (
  req: FastifyRequest,
  rep: FastifyReply,
) => {
  const sessionId = req.cookies.sessionId
  if (!sessionId) {
    return rep.status(401).send({
      error: 'Unauthorized',
    })
  }
}
