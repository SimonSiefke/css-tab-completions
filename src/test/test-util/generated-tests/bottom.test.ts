import { getTabCompletion } from '../../../tabCompletion'

test('bottom.test.txt', () => {
  expect(getTabCompletion('b')).toEqual('bottom: ')
})
