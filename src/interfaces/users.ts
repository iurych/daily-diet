import { z } from 'zod'
import { userRequestSchema } from '../schema/users.schema'

export type userResquest = z.infer<typeof userRequestSchema>
