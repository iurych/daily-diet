import { FastifyInstance } from 'fastify'
import { userControllers } from '../controller/users.controller'
import { validateReqBody } from '../middlewares/validate-body'
import { usersSchema } from '../schema/users.schema'

export const usersRoutes = async (app: FastifyInstance) => {
  app.post(
    '',
    { preHandler: [validateReqBody(usersSchema)] },

    
  )
}
