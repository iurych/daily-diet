import { z } from 'zod'
import { usersSchema } from '../schema/users.schema'

export type userCreateRequest = z.infer<typeof usersSchema>
