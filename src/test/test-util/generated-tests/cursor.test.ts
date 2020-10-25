import { getTabCompletion } from '../../../tabCompletion'

test('cursor.test.txt', () => {
  expect(getTabCompletion('cursor')).toEqual('cursor: ')
  expect(getTabCompletion('cuna')).toEqual('cursor: not-allowed;')
  expect(getTabCompletion('cu')).toEqual('cursor: ')
})
