import { getTabCompletion } from '../../../tabCompletion'

test('line-height.test.txt', () => {
  expect(getTabCompletion('lh')).toEqual('line-height: ')
})
