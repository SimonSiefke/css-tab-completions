import { getTabCompletion } from '../../../tabCompletion'

test('z-index.test.txt', () => {
  expect(getTabCompletion('z')).toEqual('z-index: ')
})
