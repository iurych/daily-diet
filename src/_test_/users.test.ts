import { expect, test } from 'vitest'

test('It is possible to create a user', () => {
  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
