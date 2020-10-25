import { getTabCompletion } from '../../../tabCompletion'

test('padding-right.test.txt', () => {
  expect(getTabCompletion('pr')).toEqual('padding-right: ')
})
