import { getTabCompletion } from '../../../tabCompletion'

test('top.test.txt', () => {
  expect(getTabCompletion('top')).toEqual('top: ')
  expect(getTabCompletion('t')).toEqual('top: ')
  expect(getTabCompletion('t0')).toEqual('top: 0;')
})
