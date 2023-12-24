import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { validateReqBody } from '../middlewares/validate-body'
import { usersSchema } from '../schema/users.schema'

export const usersRoutes = async (app: FastifyInstance) => {
  app.addHook('preHandler', (req: FastifyRequest) => {
    console.log(`[${req.method}] ${req.url}`)
  })

  app.post(
    '',
    { preHandler: [validateReqBody(usersSchema)] },

    (req: FastifyRequest, rep: FastifyReply) => {
      return rep.status(403).send()
    },
  )
}
