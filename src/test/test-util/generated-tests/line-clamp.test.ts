import { getTabCompletion } from '../../../tabCompletion'

test('line-clamp.test.txt', () => {
  expect(getTabCompletion('line-clamp')).toEqual('line-clamp: ')
  expect(getTabCompletion('lc')).toEqual('line-clamp: ')
})
