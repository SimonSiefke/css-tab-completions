import { getTabCompletion } from '../../../tabCompletion'

test('max-width.test.txt', () => {
  expect(getTabCompletion('maw')).toEqual('max-width: ')
})
