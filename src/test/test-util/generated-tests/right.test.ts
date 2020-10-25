import { getTabCompletion } from '../../../tabCompletion'

test('right.test.txt', () => {
  expect(getTabCompletion('right')).toEqual('right: ')
  expect(getTabCompletion('r')).toEqual('right: ')
})
