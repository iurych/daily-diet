import { FastifyRequest } from 'fastify'
import { ZodTypeAny } from 'zod'

export const validateReqBody =
  (schema: ZodTypeAny) =>
  (request: FastifyRequest): void => {
    const validate = schema.parse(request.body)
    request.body = validate
  }
