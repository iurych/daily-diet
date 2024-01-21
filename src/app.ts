import cookie from '@fastify/cookie'
import fastifyJwt from '@fastify/jwt'
import fastify from 'fastify'
import { env } from './env'
import { errorHandler } from './errors'
import { usersRoutes } from './routes/users'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.SECRET_KEY,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '7d',
  },
})

app.register(cookie)

app.register(usersRoutes, {
  prefix: '/users',
})

app.setErrorHandler(errorHandler)
