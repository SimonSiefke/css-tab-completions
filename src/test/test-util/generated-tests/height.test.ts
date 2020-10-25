import { getTabCompletion } from '../../../tabCompletion'

test('height.test.txt', () => {
  expect(getTabCompletion('height')).toEqual('height: ')
  expect(getTabCompletion('h')).toEqual('height: ')
  // expect(getTabCompletion('h10')).toEqual('height: 10px;')
})
