import { z } from 'zod'

export const userRequestSchema = z.object({
  name: z.string().max(100),
  email: z.string().email().max(100),
  password: z.string().min(6),
})

export const userAuthRequest = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})
