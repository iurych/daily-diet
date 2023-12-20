import { z } from 'zod'

export const usersSchema = z.object({
  name: z.string().max(45),
  email: z.string().email().max(45),
})
