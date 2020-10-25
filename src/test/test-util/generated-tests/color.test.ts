import { getTabCompletion } from '../../../tabCompletion'

test('color.test.txt', () => {
  expect(getTabCompletion('c')).toEqual('color: ')
})
