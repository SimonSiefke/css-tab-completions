import { getTabCompletion } from '../../../tabCompletion'

test('color.test.txt', () => {
  expect(getTabCompletion('color')).toEqual('color: ')
  expect(getTabCompletion('c')).toEqual('color: ')
})
