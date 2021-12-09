import { CreateCarCommand } from './create-car-command'

describe('CreateCarCommand', () => {
  it('should create a car', async () => {
    const command = new CreateCarCommand()
    const expected: string = 'Hello'

    const actual = await command.execute()

    expect(actual).toEqual(expected)
  })
})
