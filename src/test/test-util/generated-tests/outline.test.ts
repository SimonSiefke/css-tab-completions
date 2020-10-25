import { getTabCompletion } from '../../../tabCompletion'

test('outline.test.txt', () => {
  expect(getTabCompletion('ol')).toEqual('outline:')
  expect(getTabCompletion('oln')).toEqual('outline: none;')
})
