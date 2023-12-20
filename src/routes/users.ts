import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { usersSchema } from '../schema/users.schema'

export const usersRoutes = async (app: FastifyInstance) => {
  app.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    console.log(request.body)
    const { name, email } = usersSchema.parse(request.body)
    
  })
}
