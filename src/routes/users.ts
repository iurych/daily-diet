import { FastifyInstance } from 'fastify'
import { randomUUID } from 'node:crypto'
import { knex } from '../database'
import { userRequestSchema } from '../schema/users.schema'

export const usersRoutes = async (app: FastifyInstance) => {
  app.post('', async (request, reply): Promise<void> => {
    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()

      reply.setCookie('sessionId', sessionId, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      })
    }

    const { name, email } = userRequestSchema.parse(request.body)

    const checkUser = await knex('users').where({ email }).first()

    console.log(checkUser)

    if (!checkUser) {
      return reply.status(400).send({ message: 'User already exist!' })
    }

    await knex('users').insert({
      id: randomUUID(),
      name,
      email,
      session_id: sessionId,
    })

    return reply.status(201).send()
  })

  app.get('', async (request, reply) => {
    const users = await knex('users')
    return reply.send(users)
  })
}
