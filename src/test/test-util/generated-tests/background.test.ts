import { getTabCompletion } from '../../../tabCompletion'

test('background.test.txt', () => {
  expect(getTabCompletion('bg')).toEqual('background: ')
})
