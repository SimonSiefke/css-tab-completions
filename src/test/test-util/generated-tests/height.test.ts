import { getTabCompletion } from '../../../tabCompletion'

test('height.test.txt', () => {
  expect(getTabCompletion('h')).toEqual('height: ')
})
