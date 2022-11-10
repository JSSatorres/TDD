import { describe, expect, it } from 'vitest'

const canConfigure = (from, to) => {
  if (typeof from !== 'string') throw new Error('parameter is not a strin')
}
describe('canConfigure', () => {
  it('should throw a error if first parameter is not a string', () => {
    expect(() => canConfigure().toThrow())
  })
})
