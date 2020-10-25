import { getTabCompletion } from '../../../tabCompletion'

test('flex-grow.test.txt', () => {
  expect(getTabCompletion('fg')).toEqual('flex-grow: ')
})
