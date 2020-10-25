import { getTabCompletion } from '../../../tabCompletion'

test('padding.test.txt', () => {
  expect(getTabCompletion('p')).toEqual('padding: ')
})
