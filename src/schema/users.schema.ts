import { z } from 'zod'

export const userRequestSchema = z.object({
  name: z.string().max(100),
  email: z.string().email().max(100),
})
