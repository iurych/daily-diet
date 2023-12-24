import fastify from 'fastify'
import { errorHandler } from './errors'
import { usersRoutes } from './routes/users'

export const app = fastify()

app.register(usersRoutes, {
  prefix: '/users',
})

app.setErrorHandler(errorHandler)
