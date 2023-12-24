import { FastifyRequest } from 'fastify'
import { ZodTypeAny } from 'zod'

export const validateReqBody =
  (schema: ZodTypeAny) =>
  (req: FastifyRequest): void => {
    console.log(req.body)
    const validate = schema.parse(req.body)

    req.body = validate
  }
