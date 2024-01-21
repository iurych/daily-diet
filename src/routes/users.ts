/* eslint-disable camelcase */
import { hash } from 'bcryptjs'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { randomUUID } from 'node:crypto'
import { knex } from '../database'
import { userAuthRequest, userRequestSchema } from '../schema/users.schema'

export const usersRoutes = async (app: FastifyInstance) => {
  app.post(
    '',
    async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
      const { name, email, password } = userRequestSchema.parse(request.body)

      const checkUser = await knex('users').where({ email }).first()

      if (checkUser) {
        return reply.status(400).send({ message: 'User already exist!' })
      }

      const password_hash = await hash(password, 6)

      const user = await knex('users')
        .insert({
          id: randomUUID(),
          name,
          email,
          password: password_hash,
        })
        .returning('*')

      return reply.status(201).send({
        user,
      })
    },
  )

  app.post('/session', async (request: FastifyRequest, reply: FastifyReply) => {
    console.log(request.url)
    // let sessionId = request.cookies.sessionId

    // if (!sessionId) {
    //   sessionId = randomUUID()

    //   reply.setCookie('sessionId', sessionId, {
    //     path: '/',
    //     maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    //   })
    // }

    const { email, password } = userAuthRequest.parse(request.body)

    const user = await knex('users').where(email)

    console.log(user)

    if (!user) {
      throw new Error('User does not exist!')
    }

    // const ifPassMatches = await compare(password)
  })

  app.get('', async (request, reply) => {
    const users = await knex('users')
    return reply.send(users)
  })

  app.delete('', async (request, reply) => {
    await knex('users').del()
    return reply.status(204).send()
  })
}
