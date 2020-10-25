import { getTabCompletion } from '../../../tabCompletion'

test('padding-left.test.txt', () => {
  expect(getTabCompletion('pl')).toEqual('padding-left: ')
})
