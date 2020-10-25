import { getTabCompletion } from '../../../tabCompletion'

test('gap.test.txt', () => {
  expect(getTabCompletion('g')).toEqual('gap: ')
})
