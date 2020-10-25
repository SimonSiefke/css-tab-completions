import { getTabCompletion } from '../../../tabCompletion'

test('text-overflow.test.txt', () => {
  expect(getTabCompletion('d')).toEqual('display: ')
  expect(getTabCompletion('text-overflow')).toEqual('text-overflow: ')
  expect(getTabCompletion('toe')).toEqual('text-overflow: ellipsis;')
})
