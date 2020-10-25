import { getTabCompletion } from '../../../tabCompletion'

test('top.test.txt', () => {
  expect(getTabCompletion('t')).toEqual('top: ')
})
